import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import Loader from "../Loader/Loader.jsx";

const ItemListContainer = ({ onLoadingChange }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [category, onLoadingChange]);

  return (
    <div>
      {loading ? <Loader/> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
