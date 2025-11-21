import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";

import "./cart.css";
import CartItem from "../CartItem/CartItem";

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
                    <CartItem
                      key={productCart.id}
                      productCart={productCart}
                      deleteProductById={deleteProductById}
                    />
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
