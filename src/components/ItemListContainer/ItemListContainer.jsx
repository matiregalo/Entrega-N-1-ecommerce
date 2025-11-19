import { useState, useEffect, useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList.jsx";
import Loader from "../Loader/Loader.jsx";
import db from "../../db/db.js";
import { ErrorContext } from "../../context/ErrorContext.jsx";
import Error from "../Error/Error.jsx";

const ItemListContainer = ({ onLoadingChange }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const productsRef = collection(db, "products");
  const { error, setError, clearError } = useContext(ErrorContext);

  const getProducts = async () => {
    clearError();
    try {
      let dataDb;
      if (category){
        const q = query(productsRef, where("category", "==", category));
        dataDb = await getDocs(q);
      } else{
        dataDb = await getDocs(productsRef);
      }
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      })
      setProducts(data);
    } catch (error) {
      setError({
          message: category 
        ? `Error al cargar productos de la categoría ${category}`
        : "No se encontraron productos",
      code: category ? 500 : 404,
      });
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
    getProducts();
  }, [category]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error.hasError ? (
        <Error />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
