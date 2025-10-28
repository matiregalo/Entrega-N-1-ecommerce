import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-2 col-md-3 mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start">
              <img src={logo} className="img-fluid" alt="Logo imarket" />
            </div>
          </div>

          <div className="col-lg-3 col-md-3 mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2 small"> Ubicación</h6>
            <p className="mb-1 small">Mercedes 1709, esq. Magallanes</p>

            <h6 className="fw-semibold mt-2 mb-1 small"> Horarios</h6>
            <p className="mb-1 small">Lun-Vie: 10-18 hs</p>
            <p className="mb-2 small">Sáb: 9-13 hs</p>

            <h6 className="fw-semibold  mb-1 small"> Contacto</h6>
            <p className="mb-1 small">imarket@gmail.com.uy</p>
            <p className="mb-1 small">+598 92 386 617</p>
            <p className="mb-0 small">2418 0111</p>
          </div>

          <div className="col-lg-2 col-md-2 mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2 border-bottom border-secondary pb-1 small">
              iPhones
            </h6>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link
                  to="/category/iphones-sellados"
                  className="text-white text-decoration-none small d-block py-1 hover-effect"
                >
                  Sellados
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/category/iphones-seminuevos"
                  className="text-white text-decoration-none small d-block py-1 hover-effect"
                >
                  Seminuevos
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-2 mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2 border-bottom border-secondary pb-1 small">
              Enlaces
            </h6>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link
                  to="/"
                  className="text-white text-decoration-none small d-block py-1 hover-effect"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/sobre-nosotros"
                  className="text-white text-decoration-none small d-block py-1 hover-effect"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-2">
            <h6 className="fw-semibold mb-2 border-bottom border-secondary pb-1 small">
              ¿Por qué elegirnos?
            </h6>
            <div className="small">
              <p className="mb-1">✅ Garantía</p>
              <p className="mb-1">✅ Asesoramiento profesional</p>
              <p className="mb-2">✅ Precios competitivos</p>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-3 pt-2">
          <div className="row">
            <div className="col-12 text-center">
              <p className="small text-secondary mb-0">
                © {new Date().getFullYear()} iMarket. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
