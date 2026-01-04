import { Helmet } from "react-helmet-async";
import "./PathNotFound.css";

const PathNotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Ruta no encontrada | MrIphones</title>
        <meta name="description" content="La página que buscas no existe en MrIphones. Regresa al inicio para encontrar los mejores iPhones." />
      </Helmet>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 text-center">
            <div className="not-found-iphone mb-4">
              <div className="not-found-frame">
                <div className="not-found-screen">
                  <div className="not-found-content">
                    <div className="not-found-icon">📱</div>
                    <div className="not-found-code">404</div>
                    <div className="not-found-message">
                      Página No Encontrada
                    </div>
                  </div>
                </div>
              </div>
              <div className="not-found-home-button"></div>
            </div>

            <div className="not-found-text mb-4">
              <h1 className="display-5 fw-bold text-dark mb-3">
                ¡Ups! Algo salió mal
              </h1>
              <p className="lead text-muted mb-4">
                La página que estás buscando no existe o ha sido movida. Parece
                que este iPhone no tiene esa aplicación instalada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathNotFound;
