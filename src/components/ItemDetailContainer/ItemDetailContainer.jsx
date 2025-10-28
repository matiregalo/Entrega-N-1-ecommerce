import { useState, useEffect } from "react";
import { getProductById } from "../../data/products.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(1).then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(product);

  return <div></div>;
};

export default ItemDetailContainer;
