import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
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

              <div className="product-actions">
                <ItemCount stock={product.stock} addToCart={addToCart} />
                <button className="btn btn-outline-dark btn-lg">
                  💰 Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
