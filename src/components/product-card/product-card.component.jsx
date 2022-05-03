import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addCart } = useContext(CartContext);

  const addCartItem = () => {
    return addCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="not found " />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttontype="inverted" onClick={addCartItem}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
