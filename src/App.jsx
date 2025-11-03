import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import PathNotFound from "./components/PathNotFound/PathNotFound";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer onLoadingChange={setIsLoading} />}
            />
            <Route
              path="/category/:category"
              element={<ItemListContainer onLoadingChange={setIsLoading} />}
            />
            <Route
              path="/detail/:id"
              element={<ItemDetailContainer onLoadingChange={setIsLoading} />}
            />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="*" element={<PathNotFound />} />
          </Routes>
          {!isLoading && <Footer />}
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
