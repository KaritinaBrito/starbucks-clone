import { useEffect, useState } from "react";
import "../Styles/Product.css";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const ProductCard = () => {
  const { name, product } = useParams();
  console.log(product);
  console.log(name);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu2.json");
        const data = await response.json();
        const category = data.map((cat) =>
          cat.category.map((sub) => {
            const tmp = sub.subcategory;
            const ass = tmp.filter((tmp1) => tmp1.name == name);
            console.log(ass);
            return ass[0].products;
          })
        );
        const itemSelected = category.map((item) =>
          item[0].map((subp) => {
            const psi = subp.subproducts;
            const res = psi.filter((psa) => psa.name == product);
            console.log(res);
            return res[0];
          })
        );
        const notUndefined = itemSelected.map((item) =>
          item.filter((el) => el !== undefined)
        );
        setCard(notUndefined);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [product, name]);

  return (
    <>
      {card.map((elemS) => (
        <>
          <section className="product-card__container" key={elemS[0].id}>
            <div className="product__header">
              <div>
                <img src={elemS[0].image} alt={elemS[0].name} />
              </div>
              <div>
                <h1>{elemS[0].name}</h1>
                <h3>{elemS[0].information}</h3>
              </div>
            </div>
            <div className="product__article">
              <p>{elemS[0].description}</p>
            </div>
          </section>
        </>
      ))}
      <Footer />
    </>
  );
};

export default ProductCard;
