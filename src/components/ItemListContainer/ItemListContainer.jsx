//import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import Loader from "../Loader/Loader.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js"

const ItemListContainer = ({ onLoadingChange }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const productsRef = collection(db, "products")
  const [error, setError] = useState(false);

 /*useEffect(() => {
    setLoading(true);
    if (onLoadingChange) {
      onLoadingChange(true);
    }
    getProducts()
      .then((data) => {
        if (category) {
          const productsFilter = data.filter(
            (product) => product.category === category,
          );
          setProducts(productsFilter);
        } else {
          setProducts(data);
        }
      })
      .finally(() => {
        setLoading(false);
        if (onLoadingChange) {
          onLoadingChange(false);
        }
      });
  }, [category, onLoadingChange]);*/

  const getProducts = async () => {
    try {
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (
  <div>{loading ? <Loader /> : <ItemList products={products} />}</div>,
  <div>{error ? <Error /> : <ItemList products={products} />}</div>
);
};

export default ItemListContainer;
