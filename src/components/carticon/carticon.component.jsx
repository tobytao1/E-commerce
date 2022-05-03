import React from "react";
import { ReactComponent as ShopLogo } from "../../assets/shopping-bag.svg";
import "../carticon/cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
export const CartIcon = () => {
  const { display, setDisplay, total } = useContext(CartContext);
  const cartOutHandler = () => {
    setDisplay(!display);
  };
  return (
    <div className="cart-icon-container" onClick={cartOutHandler}>
      <ShopLogo className="shopping-icon" />
      <span className="item-count">{total}</span>
    </div>
  );
};
