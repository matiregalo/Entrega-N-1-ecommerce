
import NavBar from "./components/NavBar/NavBar";

import Contenedor from "./components/Contenedor/Contenedor";
import './App.css'

function App() {

  return (
    <div className="app">
      <NavBar />
      <Contenedor saludoDeBienvenida={ "Hola, ecommerce en proceso..." } />
    </div>
  )
}

export default App