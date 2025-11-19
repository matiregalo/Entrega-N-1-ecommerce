import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart, totalQuantity } =
    useContext(CartContext);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="products-section">
          <ItemListContainer />
        </div>

        <div className="cart-sidebar">
          <div className="cart-sidebar-content">
            <h3>Tu Carrito</h3>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((productCart) => (
                    <div key={productCart.id} className="cart-item">
                      <img
                        src={productCart.image}
                        alt={productCart.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <p className="product-name">{productCart.name}</p>
                        {productCart.quantity > 1 && (
                          <p className="unit-price">
                            Precio c/u {productCart.price}
                          </p>
                        )}
                        <p className="quantity">
                          Cantidad: {productCart.quantity}
                        </p>
                        <p className="partial-price">
                          Precio parcial:{" "}
                          {productCart.price * productCart.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteProductById(productCart.id)}
                        className="delete-btn"
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Total productos:</span>
                    <span>{totalQuantity()}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total a pagar:</span>
                    <span>${totalPrice()}</span>
                  </div>
                  <Link to="/checkout" className="comp-cart-btn">
                    Finalizar Compra
                  </Link>
                  <button onClick={deleteCart} className="clear-cart-btn">
                    Vaciar Carrito
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
