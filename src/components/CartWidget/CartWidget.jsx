import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext);
  return (
    <div>
      <ul>
        <i className="fs-1 bi bi-bag "></i>
      </ul>
    </div>
  );
};

export default CartWidget;
