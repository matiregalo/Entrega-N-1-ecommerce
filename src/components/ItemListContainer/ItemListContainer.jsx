import getProducts from "../../data/products.js";
import { useState, useEffect } from "react";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
