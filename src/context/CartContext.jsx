import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0,
    );
    return quantity;
  };

  const totalPrice = () => {};

  const deleteProductById = () => {};

  const deleteCart = () => {};

  return (
    <div>
      <CartContext.Provider
        value={{
          cart,
          addProduct,
          totalPrice,
          totalQuantity,
          deleteCart,
          deleteProductById,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export { CartContext, CartProvider };
