import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const getItem = () => {
  // Esta función debe retornar la promesa que resuelve con delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Producto Ejemplo',
        description: 'Descripción del producto.',
        price: 100,
        imageUrl: 'https://f.fcdn.app/imgs/187090/www.zonatecno.com.uy/zoteuy/714d/webp/catalogo/108415_108415_1/800x800/celular-apple-iphone-17-pro-max-1tb-12gb-blue-celular-apple-iphone-17-pro-max-1tb-12gb-blue.jpg',
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((item) => setItem(item));
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;