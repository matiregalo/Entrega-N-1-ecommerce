import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import { ErrorContext } from "../../context/ErrorContext.jsx";
import Error from "../Error/Error.jsx";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const { cart, totalPrice } = useContext(CartContext);
  const { error, setError, clearError } = useContext(ErrorContext);

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
    try {
    const orderRef = collection(db, "orders");
    const response = await addDoc(orderRef, order);
    } catch (error) {
      setError({
        message: `Error al subir la orden de compra de ${response.id}`,
        code: 404,
      });
    }
  };

  return (
    <div>
      {error.hasError ? (
        <Error />
      ) : (
        <form onSubmit={sendOrder}>
          <input
            type="text"
            name="fullname"
            value={dataForm.fullname}
            onChange={handleChangeInput}
            placeholder="Ingresa tu nombre"
          />
          <input
            type="number"
            name="phone"
            value={dataForm.phone}
            onChange={handleChangeInput}
            placeholder="Ingresa tu telefono"
          />
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
            placeholder="Ingresa tu email"
          />
          <button type="submit">Enviar Orden</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
