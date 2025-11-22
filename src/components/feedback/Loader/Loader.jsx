import useTitle from "../../../hooks/useTitle";
import "./loader.css";

const Loader = () => {
  useTitle({title: "Cargando.."})

  return (
  <div className="container my-4">
    <div className="loading-container text-center py-5">
      <div className="loading-icon mb-3">
        <div className="iphone-loader">
          <div className="iphone-screen"></div>
        </div>
      </div>
      <h5 className="text-primary mb-2">Buscando iPhones...</h5>
      <p className="text-muted">Encontrando los mejores productos para ti</p>
    </div>
  </div>
  )
};

export default Loader;
