import { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemDetail from "../../ItemDetail/ItemDetail.jsx";
import Loader from "../Loader/Loader.js";
import db from "../../../../db/db.js";
import { ErrorContext } from "../../../../context/ErrorContext.jsx";
import Error from "../Error/Error.js";

const ItemDetailContainer = ({ onLoadingChange }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { error, setError, clearError } = useContext(ErrorContext);

  const getProduct = async () => {
    clearError();
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);
      if (!dataDb.exists()) {
        throw new Error();
      }
      const data = { id: dataDb.id, ...dataDb.data() };
      setProduct(data);
    } catch (error) {
      setError({
        message: `Error al cargar el producto con id ${id}`,
        code: 404,
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
    getProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error.hasError ? (
        <Error />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
