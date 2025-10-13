function ItemDetail({ item }) {
  return (
    <div>
      <img src={item.imageUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
}

export default ItemDetail;