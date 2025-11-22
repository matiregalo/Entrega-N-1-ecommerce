import { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useLocation } from "react-router-dom";

import { CartContext } from "../../../context/CartContext.jsx";
import db from "../../../db/db.js";
import { ErrorContext } from "../../../context/ErrorContext.jsx";
import Error from "../../feedback/Error/Error.jsx";
import FormCheckout from "../FormCheckout/FormCheckout.jsx";
import OrderReview from "../OrderReview/OrderReview.jsx";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const { cart, totalPrice } = useContext(CartContext);
  const { error, setError, clearError } = useContext(ErrorContext);
  const [orderId, setOrderId] = useState(null);
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

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
      setOrderId(response.id);
    } catch (error) {
      setError({
        message: `Error al subir la orden de compra de`,
        code: 500,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Checkout | iMarket</title>
        <meta name="description" content="Completa tu compra de iPhones. Ingresa tus datos de contacto y finaliza tu pedido de forma segura en iMarket." />
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {orderId ? (
        <OrderReview orderId={orderId} />
      ) : error.hasError ? (
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
