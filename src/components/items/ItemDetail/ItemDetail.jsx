import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [viewItemCount, setViewItemCount] = useState(true);
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  const title = product? product.name : ''
  const description = product
    ? `${product.name} - ${product.description?.substring(0, 120) || 'Compra este iPhone en MrIphones. Excelente calidad y precio garantizado.'}... Precio: $${product.price}. Compra con confianza.`
    : ''
  
  const categoryName = product?.category === "iphones-sellados" 
    ? "iPhones Sellados" 
    : product?.category === "iphones-seminuevos"
    ? "iPhones Seminuevos"
    : "iPhones";
  const categoryUrl = product?.category 
    ? `${baseUrl}/category/${product.category}`
    : baseUrl;

  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "url": currentUrl,
      "priceCurrency": "USD",
      "price": product.price.toString(),
      "availability": product.stock > 0 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "MrIphones"
      }
    },
    "brand": {
      "@type": "Brand",
      "name": "Apple"
    },
    "category": product.category === "iphones-sellados" 
      ? "Smartphone Nuevo" 
      : "Smartphone Reacondicionado"
  } : null;

  const breadcrumbSchema = product ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryName,
        "item": categoryUrl
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": currentUrl
      }
    ]
  } : null;
  
  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
    setQuantityAdded(count);
    setViewItemCount(false);
  };

  return (
    <div className="item-detail-container">
      {product && (
        <Helmet>
          <title>{title} | MrIphones</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={currentUrl} />
          
          <meta property="og:type" content="product" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:title" content={`${title} | MrIphones`} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={product.image} />
          <meta property="og:site_name" content="MrIphones" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={currentUrl} />
          <meta name="twitter:title" content={`${title} | MrIphones`} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={product.image} />
          
          {productSchema && (
            <script type="application/ld+json">
              {JSON.stringify(productSchema)}
            </script>
          )}
          {breadcrumbSchema && (
            <script type="application/ld+json">
              {JSON.stringify(breadcrumbSchema)}
            </script>
          )}
        </Helmet>
      )}
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
