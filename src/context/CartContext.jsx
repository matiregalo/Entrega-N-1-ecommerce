import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

  useEffect(() => {
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (newProduct) => {
    const indexProduct = cart.findIndex(
      (productCart) => productCart.id === newProduct.id,
    );
    if (indexProduct !== -1) {
      const newCart = [...cart];
      newCart[indexProduct].quantity =
        newCart[indexProduct].quantity + newProduct.quantity;
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
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
    const indexProduct = cart.findIndex(
      (productCart) => productCart.id === productId,
    );
    const newCart = [...cart];
    if (newCart[indexProduct].quantity == 1) {
      const productosFiltrados = newCart.filter(
        (productCart) => productCart.id !== productId,
      );
      setCart(productosFiltrados);
    } else {
      newCart[indexProduct].quantity = newCart[indexProduct].quantity - 1;
      setCart(newCart);
    }
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
