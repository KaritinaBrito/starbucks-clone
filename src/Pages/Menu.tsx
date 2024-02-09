import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProductsMenu from "../components/ProductsMenu";
import "../Styles/Menu.css";
import { useEffect, useState } from "react";

const Menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu2.json");
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="menu-container">
        <div className="menu-title">
          <span>¡Disfrútalos!</span>
          <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
        </div>
        {data.map((cat) => (
          <>
            {cat.category.map((subcat) => (
              <div className="menu-products" key={subcat.id}>
                <div>
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
              </div>
            ))}
          </>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Menu;
