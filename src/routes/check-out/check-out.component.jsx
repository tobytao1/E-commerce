import { React, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CheckOutItem } from "../../components/checkout-item/checkout-item.component";
import "./chekc-out.styles.scss";
export const CheckOut = () => {
  const { cartProduct, totalPrice } = useContext(CartContext);
  console.log(totalPrice);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartProduct.map((product) => {
        return (
          <CheckOutItem key={product.id} cartItem={product} />
          //   <div key={product.id}>
          //     <h3>{product.name}</h3>
          //     <div>
          //       <button onClick={() => addCart(product, false)}>-</button>
          //       {product.quantity}
          //       <button onClick={() => addCart(product)}>+</button>
          //     </div>

          //     <span>{product.price}</span>
          //   </div>
        );
      })}
      <div>Total : {totalPrice}</div>
    </div>
  );
};
