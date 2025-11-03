import { useState } from "react";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <div className="item-count-container">
      <div className="quantity-selector mb-4">
        <label className="quantity-label">Cantidad:</label>
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={handleClickRestar}
            disabled={count <= 1}
          >
            −
          </button>
          <span className="quantity-display">{count}</span>
          <button
            className="quantity-btn"
            onClick={handleClickSumar}
            disabled={count >= stock}
          >
            +
          </button>
        </div>
      </div>
      <div className="action-buttons">
        <button
          onClick={() => addToCart(count)}
          className="btn btn-primary btn-lg add-to-cart-btn"
          disabled={stock === 0}
        >
          🛒 Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
