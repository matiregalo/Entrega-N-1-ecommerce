const CartItem = ({ productCart, deleteProductById }) => {
  return (
    <div className="cart-item">
      <img
        src={productCart.image}
        alt={productCart.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <p className="product-name">{productCart.name}</p>
        {productCart.quantity > 1 && (
          <p className="unit-price">Precio c/u {productCart.price}</p>
        )}
        <p className="quantity">Cantidad: {productCart.quantity}</p>
        <p className="partial-price">
          Precio parcial: {productCart.price * productCart.quantity}
        </p>
      </div>
      <button
        onClick={() => deleteProductById(productCart.id)}
        className="delete-btn"
      >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
};

export default CartItem;
