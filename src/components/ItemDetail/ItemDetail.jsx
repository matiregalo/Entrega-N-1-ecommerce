import "./itemdetail.css";
const ItemDetail = ({ product }) => {
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
              <h1 className="product-title mb-3">{product.name}</h1>

              <div className="product-price mb-4">
                <span className="price-amount">${product.price}</span>
              </div>

              <div className="product-description mb-4">
                <h5 className="section-title">Descripción</h5>
                <p className="description-text">{product.description}</p>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary btn-lg me-3">
                  🛒 Agregar al Carrito
                </button>
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
