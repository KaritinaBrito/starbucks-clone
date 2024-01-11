import { Link } from "react-router-dom";
import data from "../assets/menu2.json";
//import dataFood from "../assets/food.json";
import Footer from "../components/Footer";
import ProductsMenu from "../components/ProductsMenu";
import "../Styles/Menu.css";

const Menu = () => {
  return (
    <>
      <section className="menu-container">
        <div className="menu-title">
          <span>¡Disfrútalos!</span>
          <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
        </div>
        <div className="menu-products">
          {data.map((cat) => (
            <>
              {cat.category.map((subcat) => (
                <div key={subcat.id}>
                  <div className="menu-products__subtitle">
                    <h3>{subcat.name}</h3>
                  </div>
                  <div className="menu-products__grid">
                    {subcat.subcategory.map((products) => (
                      <div key={products.id}>
                        <Link to={`/menu/${products.name}`}>
                          <ProductsMenu
                            id={products.id}
                            image={products.image}
                            name={products.name}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
