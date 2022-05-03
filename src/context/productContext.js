import { createContext, useState } from "react";
import SHOP_DATA from "../routes/shop/shop.data.json";

export const ProductContext = createContext({
  products: [],
  setProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(SHOP_DATA);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
