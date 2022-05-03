import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  display: false,
  setDisplay: () => null,
  cartProduct: [],
  addCart: () => null,
  total: 0,
  calTotal: () => null,
  removeCart: () => null,
  totalPrice: 0,
});

const addCartItem = (cartProduct, productToAdd, isAdd = true) => {
  const existingProduct = cartProduct.find(
    (product) => product.id === productToAdd.id
  );
  console.log(existingProduct);
  if (existingProduct && existingProduct.quantity === 1 && !isAdd) {
    return cartProduct.filter((product) => product !== existingProduct);
  }
  if (existingProduct && !isAdd) {
    return cartProduct.map((product) => {
      if (product.id === productToAdd.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
  }
  if (existingProduct) {
    return cartProduct.map((product) => {
      if (product.id === productToAdd.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  }
  return [...cartProduct, { ...productToAdd, quantity: 1 }];
};

const remove = (cartProduct, productToRemove) => {
  return cartProduct.filter((product) => product !== productToRemove);
};

export const CartProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cartProduct.reduce(
      (previous, current) => previous + current.quantity,
      0
    );
    setTotal(total);
  }, [cartProduct]);

  useEffect(() => {
    const totalPrice = cartProduct.reduce(
      (previous, current) => previous + current.quantity * current.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartProduct]);

  const addCart = (productToAdd, isAdd = true) => {
    console.log(addCartItem(cartProduct, productToAdd, isAdd));
    setCartProduct(addCartItem(cartProduct, productToAdd, isAdd));
  };

  const removeCart = (productToRemove) => {
    setCartProduct(remove(cartProduct, productToRemove));
  };

  //   const calTotal = () => {
  //     // if (cartProduct.length > 0) {
  //     //   const total = cartProduct.reduce(
  //     //     (previous, current) => previous + current.quantity,
  //     //     0
  //     //   );
  //     //   const totalPrice = cartProduct.reduce(
  //     //     (previous, current) => previous + current.price * current.quantity,
  //     //     0
  //     //   );
  //     //   console.log(typeof totalPrice);
  //     //   setTotal(total);
  //     //   setTotalPrice(totalPrice);
  //     // } else {
  //     //   setTotal(1);
  //     //   setTotalPrice(0);
  //     // }
  //     setTotal(total);
  //     setTotalPrice();
  //   };

  const value = {
    display,
    setDisplay,
    addCart,
    cartProduct,
    total,
    // calTotal,
    removeCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
