import { React, useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cartContext";
import { CartItem } from "../cartItem/cartItem.component";
export const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  const { removeCart, addCart } = useContext(CartContext);

  const addCartItem = () => {
    return addCart(cartItem);
  };

  const decreaseCartItem = () => {
    addCart(cartItem, false);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span clssName="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseCartItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
