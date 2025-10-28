import { useState, useEffect } from "react";
import { getProductById } from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(1).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
