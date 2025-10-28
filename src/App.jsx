import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <BrowserRouter>
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
        </Routes>
        {!isLoading && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
