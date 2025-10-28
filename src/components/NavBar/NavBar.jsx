import logo from "../../assets/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        id="section-nav"
      >
        <div className="container">
          <img src={logo} className="img-small me-5" alt="Logo imarket" />
          <a className="navbar-brand fw-bold text-dark" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#imarketNavbar"
            aria-controls="imarketNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="imarketNavbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link text-dark" to="/" id="link-inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  iPhones
                </a>
                <ul className="dropdown-menu shadow-sm rounded-3 custom-dropdown  ">
                  <li className="mx-2">
                    <Link
                      className="dropdown-item text-dark "
                      id="link-iphones-sellados"
                      to="/category/iphones-sellados"
                    >
                      iPhones Sellados
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link
                      className="dropdown-item text-dark"
                      id="link-iphones-seminuevos"
                      to="/category/iphones-seminuevos"
                    >
                      iPhones Seminuevos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  id="link-sobre-nosotros"
                  to="/sobre-nosotros"
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
