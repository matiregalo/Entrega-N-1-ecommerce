//import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import Loader from "../Loader/Loader.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ onLoadingChange }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const productsRef = collection(db, "products");
  const [error, setError] = useState(false);

  const getProducts = async () => {
    setError(false);
    try {
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      if (onLoadingChange) {
        onLoadingChange(false);
      }
    }
  };

  const getProductsByCategory = async () => {
    setError(false);
    try {
      const q = query(productsRef, where("category", "==", category));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      if (onLoadingChange) {
        onLoadingChange(false);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
  if (onLoadingChange) {
    onLoadingChange(true); 
  }
    if (category) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [category]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
