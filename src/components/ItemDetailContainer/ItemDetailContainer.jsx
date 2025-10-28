import { useState, useEffect } from "react";
import { getProductById } from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const ItemDetailContainer = ({ onLoadingChange }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (onLoadingChange) {
      onLoadingChange(true);
    }
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .finally(() => {
        setLoading(false);
        if (onLoadingChange) {
          onLoadingChange(false);
        }
      });
  }, [id, onLoadingChange]);

  return <div>{loading ? <Loader /> : <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
