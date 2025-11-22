import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";
import { ErrorContext } from "../../../context/ErrorContext";
import { Helmet } from "react-helmet-async";

const Error = () => {
  const { error, clearError } = useContext(ErrorContext);
  const navigate = useNavigate()
  const handleRetry = () => {
    clearError();
    navigate('/');
  };
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Error | iMarket</title>
        <meta name="description" content="Ha ocurrido un error en iMarket. Por favor, intenta nuevamente o contacta a soporte si el problema persiste." />
      </Helmet>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 text-center">
            <div className="not-found-iphone mb-4">
              <div className="not-found-frame">
                <div className="not-found-screen">
                  <div className="not-found-content">
                    <div className="not-found-icon">📱</div>
                    <div className="not-found-code">{error.code || 500}</div>
                    <div className="not-found-message">
                      {error.message || "Ha ocurrido un error"}
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
                Redirigete a la página de inicio o contacta ha soporte si el
                error sigue persistiendo.
              </p>
              <button className="not-found-button" onClick={handleRetry}>
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
