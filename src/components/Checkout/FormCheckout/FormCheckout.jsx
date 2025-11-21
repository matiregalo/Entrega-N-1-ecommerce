import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./formCheckout.css";
import OrderItem from "../checkout/OrderItem/OrderItem";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  const { cart, totalPrice, totalQuantity } = useContext(CartContext);

  return (
    <div className="checkout-page-container">
      <div className="checkout-container">
        <div className="checkout-form-section">
          <div className="checkout-card">
            <div className="checkout-header">
              <h2 className="checkout-title">Finalizar Compra</h2>
            </div>

            <form onSubmit={sendOrder} className="checkout-form">
              <div className="form-section">
                <h3 className="section-title">
                  <i className="bi bi-person-circle"></i>
                  Información de contacto
                </h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullname" className="form-label">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={dataForm.fullname}
                      onChange={handleChangeInput}
                      placeholder="Ej: Juan Pérez"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={dataForm.email}
                      onChange={handleChangeInput}
                      placeholder="ejemplo@correo.com"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={dataForm.phone}
                      onChange={handleChangeInput}
                      placeholder="+54 11 1234-5678"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">
                  <i className="bi bi-credit-card"></i>
                  Método de pago
                </h3>

                <div className="payment-methods">
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="mercadopago"
                      name="paymentMethod"
                      value="mercadopago"
                      className="payment-radio"
                      defaultChecked
                    />
                    <label htmlFor="mercadopago" className="payment-label">
                      <div className="payment-icon">
                        <i className="bi bi-wallet2"></i>
                      </div>
                      <div className="payment-info">
                        <span className="payment-name">Mercado Pago</span>
                        <span className="payment-desc">
                          Pago rápido y seguro
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="payment-method">
                    <input
                      type="radio"
                      id="transferencia"
                      name="paymentMethod"
                      value="transferencia"
                      className="payment-radio"
                    />
                    <label htmlFor="transferencia" className="payment-label">
                      <div className="payment-icon">
                        <i className="bi bi-bank"></i>
                      </div>
                      <div className="payment-info">
                        <span className="payment-name">
                          Transferencia bancaria
                        </span>
                        <span className="payment-desc">
                          Pago por transferencia
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="payment-btn">
                <>
                  <i className="bi bi-lock-fill"></i>
                  Pagar ${totalPrice()}
                </>
              </button>
            </form>
          </div>
        </div>

        <div className="order-summary-section">
          <div className="order-summary-card">
            <h3 className="summary-title">Resumen del pedido</h3>

            <div className="order-items">
              {cart.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal ({totalQuantity()} productos)</span>
                <span>${totalPrice()}</span>
              </div>
              <div className="total-row">
                <span>Envío</span>
                <span className="free-shipping">Gratis</span>
              </div>
              <div className="total-row discount">
                <span>Descuento</span>
                <span>$0</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>${totalPrice()}</span>
              </div>
            </div>

            <div className="security-badges">
              <div className="security-badge">
                <i className="bi bi-shield-check"></i>
                <span>Compra 100% segura</span>
              </div>
              <div className="security-badge">
                <i className="bi bi-truck"></i>
                <span>Envío gratis</span>
              </div>
              <div className="security-badge">
                <i className="bi bi-arrow-clockwise"></i>
                <span>Devolución gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
