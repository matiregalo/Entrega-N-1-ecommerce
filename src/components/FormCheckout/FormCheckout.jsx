import "./formCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <div className="form-checkout-container">
      <div className="form-checkout-card">
        <div className="form-header">
          <h2 className="form-title">Finalizar Compra</h2>
          <p className="form-subtitle">
            Completa tus datos para procesar el pedido
          </p>
        </div>

        <form onSubmit={sendOrder} className="checkout-form">
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              <i className="bi bi-person"></i>
              Nombre completo
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChangeInput}
              placeholder="Ingresa tu nombre completo"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              <i className="bi bi-phone"></i>
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeInput}
              placeholder="Ingresa tu número de teléfono"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <i className="bi bi-envelope"></i>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={dataForm.email}
              onChange={handleChangeInput}
              placeholder="Ingresa tu correo electrónico"
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            <i className="bi bi-bag-check"></i>
            Confirmar Compra
          </button>
        </form>
        <div className="form-footer">
          <p className="security-note">
            <i className="bi bi-shield-check"></i>
            Tus datos están protegidos y no serán compartidos con terceros
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
