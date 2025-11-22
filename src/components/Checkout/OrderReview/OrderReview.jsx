import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./OrderReview.css";
import OrderItem from "../OrderItem/OrderItem";
import { Helmet } from "react-helmet-async";

const OrderReview = ({ orderId }) => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleNewOrder = () => {
    deleteCart();
  };

  return (
    <div className="order-review-container">
      <Helmet>
        <title>Resumen de compra | iMarket</title>
        <meta name="description" content="Tu compra ha sido completada exitosamente. Revisa los detalles de tu pedido y guarda tu número de orden para futuras consultas." />
      </Helmet>
      <div className="order-review-card">
        <div className="order-success-header">
          <h1 className="order-success-title">¡Compra Exitosa!</h1>
          <p className="order-success-subtitle">
            Tu pedido ha sido procesado correctamente
          </p>
        </div>

        <div className="order-info-section">
          <div className="order-info-card">
            <h3 className="section-title">Detalles de tu orden</h3>

            <div className="order-detail">
              <span className="detail-label">Número de orden:</span>
              <span className="order-id">{orderId}</span>
            </div>

            <div className="order-detail">
              <span className="detail-label">Total pagado:</span>
              <span className="order-total">${totalPrice()}</span>
            </div>

            <div className="order-detail">
              <span className="detail-label">Productos:</span>
              <span className="order-items">{cart.length} productos</span>
            </div>
          </div>
        </div>

        <div className="products-summary">
          <h3 className="section-title">Resumen de productos</h3>
          <div className="products-list">
            {cart.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="order-actions">
          <div className="action-buttons">
            <Link to="/cart" onClick={handleNewOrder} className="btn-primary">
              <i className="bi bi-bag"></i>
              Realizar nueva compra
            </Link>

            <Link to="/" onClick={handleNewOrder} className="btn-secondary">
              <i className="bi bi-house"></i>
              Volver al inicio
            </Link>
          </div>

          <div className="order-notes">
            <p className="note-text">
              <strong>Importante:</strong> Guarda tu número de orden para
              cualquier consulta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
