import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};
