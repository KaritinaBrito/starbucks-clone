import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

import "../Styles/Footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [dropdownMenuContact, setDropdownMenuContact] = useState(false);
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-container__contact">
            <div className="contact__about">
              <div className="arrow-section">
                <h3>Sobre Nosotros</h3>
                <IoIosArrowDown
                  className="arrow-icon"
                  onClick={() => setDropdownMenu(!dropdownMenu)}
                />
              </div>
              <ul className={`dropdown-about ${dropdownMenu ? "active" : ""}`}>
                <li>Trabaja con nosotros</li>
                <li>Historias Starbucks</li>
              </ul>
            </div>
            <div className="contact__customer-service">
              <div className="arrow-section">
                <h3>Atención al cliente</h3>
                <IoIosArrowDown
                  className="arrow-icon"
                  onClick={() => setDropdownMenuContact(!dropdownMenuContact)}
                />
              </div>
              <ul
                className={`dropdown-contact ${
                  dropdownMenuContact ? "active" : ""
                }`}
              >
                <li>Contáctanos</li>
                <li>Facturas Electrónicas</li>
                <li>Formas de comprar</li>
              </ul>
            </div>
          </div>
          <div className="footer-container__media">
            <ul className="list__social-media">
              <li>
                <FaFacebookF className="icons" />
              </li>
              <li>
                <FaInstagram className="icons" />
              </li>
              <li>
                <BsTwitterX className="icons" />
              </li>
              <li>
                <IoLogoYoutube className="icons" />
              </li>
            </ul>
            <ul className="menu-legal">
              <li>Accesibilidad Web</li>
              <li>
                <Link to={"/privacity"}>Aviso de Privacidad</Link>
              </li>
              <li>Boletines</li>
              <li>Condiciones de uso</li>
              <li>Mapa del sitio</li>
              <li>Preferencias sobre cookies</li>
            </ul>
            <div className="copyright-creation">
              <span className="copyright">
                Ⓒ 2023. Starbucks Cofee Company. Reservados todos los derechos
              </span>
              <span className="creation-date">
                mx | prod | 64c8baae1500e545b61c4b253ff7112e0390c7a1 |
                02/11/2023-05:12:47:373
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
