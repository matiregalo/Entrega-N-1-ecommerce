import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    const productoExiste = cart.find(
      (productCart) => productCart.id === newProduct.id,
    );
    if (productoExiste) {
      const updatedCart = cart.map((productCart) =>
        productCart.id === newProduct.id
          ? { ...productCart, quantity: productCart.quantity + 1 }
          : productCart,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0,
    );
    return quantity;
  };

  const totalPrice = () => {
    const total = cart.reduce(
      (total, productCart) => total + productCart.quantity * productCart.price,
      0,
    );
    return total;
  };

  const deleteProductById = (productId) => {
    const productosFiltrados = cart.filter(
      (productCart) => productCart.id !== productId,
    );
    setCart(productosFiltrados);
  };

  const deleteCart = () => {
    setCart([]);
  };

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
