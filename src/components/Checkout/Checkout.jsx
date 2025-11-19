import { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";

import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import { ErrorContext } from "../../context/ErrorContext.jsx";
import Error from "../Error/Error.jsx";
import FormCheckout from "../FormCheckout/FormCheckout.jsx";
import OrderReview from "../OrderReview/OrderReview.jsx";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const { cart, totalPrice } = useContext(CartContext);
  const { error, setError, clearError } = useContext(ErrorContext);
  const [orderId, setOrderId] = useState(null);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const sendOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
    };
    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    clearError();
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      setOrderId(response.id)
    } catch (error) {
      setError({
        message: `Error al subir la orden de compra de`,
        code: 500,
      });
    }
  };

  return (
    <div>
      {orderId ? (
        <OrderReview orderId={orderId}/>
      ) :
      error.hasError ? (
        <Error />
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          sendOrder={sendOrder}
        />
      )}
    </div>
  );
};

export default Checkout;
