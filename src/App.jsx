import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import PathNotFound from "./components/PathNotFound/PathNotFound";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ErrorProvider } from "./context/ErrorContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingChange = (loading) => {
    setIsLoading(loading);
  };
  return (
    <div>
      <BrowserRouter>
        <ErrorProvider>
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
                  <ItemDetailContainer onLoadingChange={handleLoadingChange} />
                }
              />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<PathNotFound />} />
            </Routes>
            {!isLoading && <Footer />}
          </CartProvider>
        </ErrorProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
