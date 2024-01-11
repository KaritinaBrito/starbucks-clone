import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoAlertCircleOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import "../Styles/Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <section className="login__container">
      <div className="login__container-left">
        <h1>Ingresa a tu cuenta 🌟</h1>
      </div>
      <div className="login__container-right">
        <div className="form-login">
          <form onSubmit={onSubmit}>
            <div className="field-login">
              <div className="field-login__label">
                <label htmlFor="user">Ingresa tu email</label>
              </div>
              <div className="field-login__input">
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  {...register("user", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Correo no válido",
                    },
                  })}
                />
                {errors.user && (
                  <div>
                    <IoAlertCircleOutline className="alert-icon" />
                    <p className="field-register__message">
                      {errors.user.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="field-login">
              <div className="field-login__label">
                <label htmlFor="password">Ingresa tu contraseña</label>
              </div>
              <div className="field-login__input">
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                  })}
                />
                {errors.password && (
                  <div>
                    <IoAlertCircleOutline className="alert-icon" />
                    <p className="field-register__message">
                      {errors.password.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="btn-login">
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
        <div className="banner-register">
          <h2>¡SER PARTE DE STARBUCKS REWARDS™ ES MUY FÁCIL!</h2>
        </div>
        <div className="rewards-login">
          <h2>Únete a Starbucks Rewards</h2>
          <p>
            Descarga la aplicación, registrate, obtén estrellas, disfruta de
            café gratis y algo más.
          </p>
          <div className="rewards-login__btn">
            <Link to={"/register"}>¡Únete ahora!</Link>
            <img src="../../src/assets/chica-sbx.png" alt="" />
          </div>
        </div>
        <div className="login-footer">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Login;
