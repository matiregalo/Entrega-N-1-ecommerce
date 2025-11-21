const OrderItem = ({ item }) => {
  return (
    <div key={item.id} className="order-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-quantity">Cantidad: {item.quantity}</span>
      </div>
      <span className="item-price">${item.price * item.quantity}</span>
    </div>
  );
};

export default OrderItem;
