import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/items/containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/items/containers/ItemDetailContainer/ItemDetailContainer";
import SobreNosotros from "./components/pages/SobreNosotros/SobreNosotros";
import PathNotFound from "./components/pages/PathNotFound/PathNotFound";
import Footer from "./components/layout/Footer/Footer";
import Cart from "./components/Cart/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import { ErrorProvider } from "./context/ErrorContext";
import Checkout from "./components/Checkout/Checkout/Checkout";
import Register from "./components/users/Register/Register";
import Login from "./components/users/Login/Login";
import VerifyEmail from "./components/users/VerifyEmail/VerifyEmail";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/users/Profile/Profile";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingChange = (loading) => {
    setIsLoading(loading);
  };
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ItemListContainer onLoadingChange={handleLoadingChange} />
                  }
                />
                <Route
                  path="/category/:category"
                  element={
                    <ItemListContainer onLoadingChange={handleLoadingChange} />
                  }
                />
                <Route
                  path="/detail/:id"
                  element={
                    <ItemDetailContainer
                      onLoadingChange={handleLoadingChange}
                    />
                  }
                />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<PathNotFound />} />
              </Routes>
              {!isLoading && <Footer />}
            </CartProvider>
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
