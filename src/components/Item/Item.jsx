const Item = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Item;
