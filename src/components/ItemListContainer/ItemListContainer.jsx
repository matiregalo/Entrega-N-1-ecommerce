import {getProducts, getProductById} from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });

    getProductById(1).then((data) => {
      console.log(data);
    });
  }, []);

  console.log(products);
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
