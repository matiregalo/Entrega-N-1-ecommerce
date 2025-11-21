import "./success.css";

const Success = ({ message, onClose }) => {
  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-icon">
          <i className="bi bi-check-circle-fill"></i>
        </div>
        <div className="success-message">
          <h4>¡Registro exitoso!</h4>
          <p>{message}</p>
        </div>
        {onClose && (
          <button className="success-close" onClick={onClose} aria-label="Cerrar mensaje">
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Success;