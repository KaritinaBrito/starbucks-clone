import "../Styles/ProductsMenu.css";
import { Product } from "../models/Product";

const ProductsMenu = ({ image, name }: Product) => {
  return (
    <>
      <section className="products-menu">
        <div className="products-container__image">
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
      </section>
    </>
  );
};

export default ProductsMenu;
