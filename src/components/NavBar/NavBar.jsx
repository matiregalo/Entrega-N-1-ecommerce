import logo from "../../assets/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
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
                <a className="nav-link text-dark" href="#" id="link-celulares">
                  {" "}
                  Celulares{" "}
                </a>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accesorios
                </a>
                <ul className="dropdown-menu shadow-sm rounded-3 custom-dropdown ">
                  <li className="mx-2">
                    <a
                      className="dropdown-item text-dark "
                      id="link-fundas"
                      href="#"
                    >
                      Fundas
                    </a>
                  </li>
                  <li className="mx-2">
                    <a
                      className="dropdown-item text-dark"
                      id="link-cargadores"
                      href="#"
                    >
                      Cargadores
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" id="link-contacto" href="#">
                  Contacto
                </a>
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
