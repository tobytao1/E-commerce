import Button from "../button/button.component";
import React from "react";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartItem } from "../cartItem/cartItem.component";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const { cartProduct, setDisplay, display } = useContext(CartContext);
  console.log(cartProduct);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProduct.map((product) => {
          return <CartItem cartItem={product} />;
        })}
      </div>
      <Link to="/checkout">
        <Button> Go To CheckOut </Button>
      </Link>
    </div>
  );
};
