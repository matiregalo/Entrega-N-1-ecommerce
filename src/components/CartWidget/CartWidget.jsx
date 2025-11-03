import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css"

const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext);
   const quantity = totalQuantity();

  return (
    <div className="cart-widget">
      <div className="cart-icon-container">
        <i className="fs-1 bi bi-bag"></i>
        {quantity > 0 && (
          <span className="cart-badge">
            {quantity}
          </span>
        )}
      </div>
    </div>
  );
};


export default CartWidget;
