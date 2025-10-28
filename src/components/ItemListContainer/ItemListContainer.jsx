import { getProducts, getProductById } from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
