import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [viewItemCount, setViewItemCount] = useState(true);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
    setQuantityAdded(count);
    setViewItemCount(false);
  };

  return (
    <div className="item-detail-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="product-info">
              <div className="stock-badge mb-2">
                {product.stock === 0 && (
                  <span className="badge bg-danger">❌ Agotado</span>
                )}
              </div>
              <h1 className="product-title mb-3">{product.name}</h1>

              <div className="product-price mb-4">
                <span className="price-amount">${product.price}</span>
              </div>

              <div className="product-description mb-4">
                <h5 className="section-title">Descripción</h5>
                <p className="description-text">{product.description}</p>
              </div>
              {viewItemCount ? (
                <div className="product-actions">
                  <ItemCount stock={product.stock} addToCart={addToCart} />
                  {product.stock > 0 && quantityAdded === 0 && (
                    <div className="buy-now-section mt-3">
                      <Link
                        to="/cart"
                        className="buy-now-btn"
                        onClick={() => addToCart(1)}
                      >
                        Comprar Ahora
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div className="buy-now-section mt-3">
                  <Link to="/cart" className="buy-now-btn">
                    Ir al carrito
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
