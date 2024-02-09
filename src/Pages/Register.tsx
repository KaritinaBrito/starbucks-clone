import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Footer from "../components/Footer";
import "../Styles/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [rewards, setRewards] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  return (
    <>
      <section className="register__container">
        <div className="register__container-left">
          <h1>Registro</h1>
        </div>
        <div className="register__container-right">
          <div className="form-register">
            <div className="form-register__text">
              <div className="form-register__intro">
                <h4>Información personal</h4>
                <small>(*) campos obligatorios</small>
              </div>
              <p>
                ¡Regístrate y comienza a vivir la experiencia Starbucks
                Rewards™!
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="field-register">
                <div className="field-register__label">
                  <label htmlFor="name">Nombre(s)</label>
                </div>
                <div className="field-register__input">
                  <input
                    id="name"
                    type="text"
                    placeholder="Nombre(s)*"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "El campo es obligatorio",
                      },
                    })}
                  />
                  {errors.name && (
                    <div>
                      <IoAlertCircleOutline className="alert-icon" />
                      <p className="field-register__message">
                        {errors.name?.message?.toString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="field-register">
                <div className="field-register__label">
                  <label htmlFor="lastname">Apellido paterno</label>
                </div>
                <div className="field-register__input">
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Apellido paterno*"
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "El campo es obligatorio",
                      },
                    })}
                  />
                  {errors.lastname && (
                    <div>
                      <IoAlertCircleOutline className="alert-icon" />
                      <p className="field-register__message">
                        {errors.lastname?.message?.toString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="field-register">
                <div className="field-register__label">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="field-register__input">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email*"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El campo es obligatorio",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Correo no válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <div>
                      <IoAlertCircleOutline className="alert-icon" />
                      <p className="field-register__message">
                        {errors.email?.message?.toString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="field-register">
                <div className="field-register__label">
                  <label htmlFor="confirmEmail">Confirmar Email</label>
                </div>
                <div className="field-register__input">
                  <input
                    id="confirmEmail"
                    type="email"
                    placeholder="Confirmar Email*"
                    {...register("confirmEmail", {
                      required: {
                        value: true,
                        message: "El campo es obligatorio",
                      },
                      validate: (value) =>
                        value === watch("email") || "Los correos no coinciden",
                    })}
                  />
                  {errors.confirmEmail && (
                    <div>
                      <IoAlertCircleOutline className="alert-icon" />
                      <p className="field-register__message">
                        {errors.confirmEmail?.message?.toString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="field-register">
                <div className="field-register__label">
                  <label htmlFor="password">Contraseña</label>
                </div>
                <div className="field-register__input">
                  <input
                    id="password"
                    type="password"
                    placeholder="Contraseña*"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Ingresa tu contraseña",
                      },
                      minLength: {
                        value: 8,
                        message: "Entre 8 y 25 caracteres",
                      },
                      maxLength: {
                        value: 25,
                        message: "Entre 8 y 25 caracteres",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message: "Ingresa tu contraseña",
                      },
                    })}
                  />
                  {errors.password && (
                    <div>
                      <FaRegEyeSlash className="eye-icon" />
                      <FaRegEye className="eye-icon inactive" />
                      <p className="field-register__message">
                        {errors.password?.message?.toString()}
                      </p>
                      <p className="field-register__message">
                        Al menos una letra minúscula
                      </p>
                      <p className="field-register__message">
                        Al menos una letra mayúscula
                      </p>
                      <p className="field-register__message">
                        Al menos un número
                      </p>
                      <p className="field-register__message">
                        Al menos un caracter especial
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="field-register">
                <div className="field-register__label">
                  <label htmlFor="confirmPassword">
                    Confirma tu constraseña
                  </label>
                </div>
                <div className="field-register__input">
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirma contraseña*"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Confirma tu contraseña",
                      },
                      validate: (value) =>
                        value === watch("password") ||
                        "Las constraseñas no coinciden",
                    })}
                  />
                  {errors.confirmPassword && (
                    <div>
                      <FaRegEyeSlash className="eye-icon" />
                      <FaRegEye className="eye-icon inactive" />
                      <p className="field-register__message">
                        {errors.confirmPassword?.message?.toString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="birthdate">
                <label htmlFor="birthdate" className="birthdate-label">
                  Fecha de Nacimiento <small>(Opcional)</small>
                </label>
                <small>
                  Agrega tu fecha de cumpleaños para otorgarte una bebida gratis
                  en el mes de tu cumpleaños
                </small>
                <div className="month-day">
                  <div className="month">
                    <select id="month" {...register("month")}>
                      <option value="1">Enero</option>
                      <option value="2">Febrero</option>
                      <option value="3">Marzo</option>
                      <option value="4">Abril</option>
                      <option value="5">Mayo</option>
                      <option value="6">Junio</option>
                      <option value="7">Julio</option>
                      <option value="8">Agosto</option>
                      <option value="9">Septiembre</option>
                      <option value="10">Octubre</option>
                      <option value="11">Noviembre</option>
                      <option value="12">Diciembre</option>
                    </select>
                  </div>
                  <div className="day">
                    <select id="day" {...register("day")}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="rewards">
                <h3>Ingresa a Starbucks Rewards</h3>
                <p>
                  Únete a Starbucks Rewards™ y disfruta de beneficios
                  especiales.
                </p>

                <div className="radio-1">
                  <input type="radio" {...register("radio-1")} />
                  <label htmlFor="radio-1">
                    <span>
                      Quiero recibir una Starbucks Card digital instantánea
                    </span>
                  </label>
                </div>

                <div className="radio-2">
                  <input
                    type="radio"
                    {...register("radio-1")}
                    onClick={() => setRewards(true)}
                  />
                  <label htmlFor="radio-2">
                    <span>
                      Quiero unirme con una Starbucks Card que ya tengo
                    </span>
                  </label>
                </div>
                <div
                  className={`${
                    rewards ? "rewards-register" : "rewards-inactive"
                  } `}
                >
                  <div className="field-register">
                    <div className="field-register__label">
                      <label htmlFor="starbucksCard">
                        Número Starbucks Card
                      </label>
                    </div>
                    <div className="field-register__input">
                      <input
                        id="starbucksCard"
                        type="number"
                        {...register("starbucksCard", {
                          minLength: {
                            value: 15,
                            message:
                              "Solo números y se esperan 15 o 16 dígitos",
                          },
                          maxLength: {
                            value: 16,
                            message:
                              "Solo números y se esperan 15 o 16 dígitos",
                          },
                        })}
                      />
                      {errors.starbuckscard && (
                        <div>
                          <IoAlertCircleOutline className="alert-icon" />
                          <p className="field-register__message">
                            {errors.starbucksCard?.message?.toString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="field-register ">
                    <div>
                      <label htmlFor="securityCode">Código de seguridad</label>
                    </div>
                    <div className="field-register__input">
                      <input
                        id="securityCode"
                        type="password"
                        placeholder="Código de seguridad"
                        {...register("securityCode", {
                          minLength: {
                            value: 8,
                            message: "Se esperan 8 dígitos",
                          },
                          maxLength: {
                            value: 8,
                            message: "Se esperan 8 dígitos",
                          },
                        })}
                      />
                      {errors.securityCode && (
                        <div>
                          <IoAlertCircleOutline className="alert-icon" />
                          <p className="field-register__message">
                            {errors.securityCode?.message?.toString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="terms-conditions">
                <h3>Términos y condiciones</h3>
                <div className="newsletter">
                  <label htmlFor="legal-1"></label>
                  <input
                    id="legal-1"
                    type="checkbox"
                    {...register("legal-1")}
                  />
                  <span>
                    Deseo recibir novedades sobre productos y promociones
                  </span>
                </div>

                <div className="terms">
                  <label htmlFor="legal2"></label>
                  <input
                    id="legal2"
                    type="checkbox"
                    {...register("legal2", {
                      required: {
                        value: true,
                        message: "Debes aceptar terminos y condiciones",
                      },
                    })}
                  />
                  <span>
                    Acepto los{" "}
                    <Link to={"/terms"}>Terminos y Condicionesy</Link> y{" "}
                    <Link to={"/privacity"}>Aviso de Privacidad</Link>
                  </span>
                </div>
                {errors.legal2 && (
                  <p className="field-register__message">
                    {errors.legal2?.message?.toString()}
                  </p>
                )}
              </div>
              <div className="button-container">
                <button type="submit">Registrame</button>
              </div>
            </form>
          </div>
          <div className="banner-register">
            <h2>¡SER PARTE DE STARBUCKS REWARDS™ ES MUY FÁCIL!</h2>
          </div>
          <div className="login-footer">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
