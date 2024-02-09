import "../Styles/Home.css";
import Banner from "../components/Banner";
import BannerWrapper from "../components/BannerWrapper";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <Banner
          image="/assets/2023-11_la-magia-de-tu-bebiba-favorita.png"
          title="LA MAGIA EN TU BEBIDA FAVORITA"
          description="Siente el cariño de esta temporada con tus favoritos y llena de sabor cada momento."
          phraseText="#LlevemosLaMagia"
          side=""
          background="#ad96dc"
          button="inactive"
        />
        <Banner
          image="../src/assets/2023-11_rojo-es-el-color-de-la-temporada.png"
          title="ROJO ES EL COLOR DE LA TEMPORADA"
          description="Disfruta del color rojo con este favorito que nos visita de vuelta: Red Velvet Latte o Frappuccino® ¡Preparado con amor, más amor y mucho más amor!"
          phraseText="#LlevemosLaMagia"
          side="left"
          background="#e31c79"
          button="inactive"
        />
        <Banner
          image="../assets/2023-11_ buenos-deseos-en-cada-sorbo.png"
          title="BUENOS DESEOS EN CADA SORBO"
          description="Que tus fiestas tengan notas a chocolate y ciruela. Compártelo con amigos y familiares."
          phraseText="#LlevemosLaMagia"
          side=""
          background="#c12637"
          button="inactive"
        />
        <Banner
          image="/src/assets/2023-11_recompensas-en-tu-bebida-favorita.png"
          title="RECOMPENSAS EN TU BEBIDA FAVORITA"
          description="Sé parte de Starbucks Rewards y obtén más café gratis, promociones exclusivas, accesos a productos antes que nadie y más."
          phrase="inactive"
          side=""
          background="#1e3933"
          button=""
          buttonText="Descarga la App y regístrate"
        />
        <Banner
          image="/src/assets/2023-11_paga-como-quieras-y-obten-estrellas.png"
          title="PAGA COMO QUIERAS Y OBTÉN ESTRELLAS"
          description="Ahora tu café te da más beneficios. Obtén estrellas al pagar con tarjetas bancarias, efectivo o Starbucks Card. ¡Tu eliges!"
          phrase="inactive"
          side="left"
          background="#f2f0eb"
          button=""
          buttonText="Más información"
          buttonStyle="#1e3933"
        />
        <Banner
          image="/src/assets/2023-11_sorbos-que-cuidan-el-planeta.png"
          title="SORBOS QUE CUIDAN EL PLANETA"
          description="Todos los días tus reusables son bienvenidos. Trae tu vaso a tu Starbucks favorito y recibe un descuento de $8 en tu bebida."
          phraseText="#LlevemosLaMagia"
          side=""
          background="#006241"
          button="inactive"
        />
        <div className="banner-wrapper">
          <BannerWrapper
            image="/src/assets/2023-11_noticias-starbucks.png"
            title="Consulta los eventos más recientes."
            button="Ver más"
            background="#ebc7c0"
          />
          <BannerWrapper
            image="/src/assets/2023-11_conoce-nuestras-promociones.png"
            title="Términos y condiciones."
            button="Aquí"
            background="#204285"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
