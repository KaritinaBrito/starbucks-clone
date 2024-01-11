import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../Styles/Menu.css";
import { useEffect, useState } from "react";
import ProductsMenu from "../components/ProductsMenu";
import "../Styles/ProductsCategory.css";

const ProductsCategory = () => {
  const { name } = useParams();
  console.log(name);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/menu2.json");
        const data = await response.json();
        const category = data.map((cat) =>
          cat.category.map((sub) => {
            const tmp = sub.subcategory;
            const ass = tmp.filter((tmp1) => tmp1.name == name);
            console.log(ass);
            return ass[0].products;
          })
        );
        setProducts(category);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [name]);

  console.log(products);

  return (
    <>
      <section className="menu-container">
        <Link to={"/menu"} className="menu-container__back">
          Menu/{name}
        </Link>
        <h2 className="category__title">{name}</h2>
        {products.map((subcat) => (
          <>
            {subcat.map((prods) => (
              <>
                {prods.map((item) => (
                  <>
                    <div className="menu-products__subtitle" key={item.id}>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="menu-products__grid">
                      {item.subproducts.map((prodSingle) => (
                        <Link to={`/menu/${name}/${prodSingle.name}`}>
                          <ProductsMenu
                            id={prodSingle.id}
                            name={prodSingle.name}
                            image={prodSingle.image}
                          />
                        </Link>
                      ))}
                    </div>
                  </>
                ))}
              </>
            ))}
          </>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default ProductsCategory;
