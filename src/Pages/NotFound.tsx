import "../Styles/NotFound.css";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <section className="not__found-container">
        <img src="/images/mr-coffee.svg" alt="not found" />
        <h5>¡Ooops!</h5>
        <p>No podemos encontrar la página que buscaba.</p>
        <p>Puede intentar volver a escribir la URL.</p>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
