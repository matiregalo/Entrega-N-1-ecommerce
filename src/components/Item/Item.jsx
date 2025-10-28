import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>
      <div className="text-item">
        <p className="title-item">{product.name}</p>
        <p className="price-item">${product.price}</p>
        <Link to={"/detail/" + product.id} className="button-item">
          MÁS INFORMACIÓN
        </Link>
      </div>
    </li>
  );
};

export default Item;
