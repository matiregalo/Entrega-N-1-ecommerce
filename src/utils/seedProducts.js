import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    description:
      "Pantalla Super Retina XDR de 6.9”, chip A18 Pro, cámara triple de 48 MP, 1 TB de almacenamiento.",
    stock: 15,
    image: "/image/iphone-16-pro-max.avif",
    price: 800,
    category: "iphones-sellados",
  },
  {
    id: 2,
    name: "iPhone 16",
    description:
      "Pantalla OLED de 6.1”, chip A18, cámara dual de 48 MP, batería de larga duración.",
    stock: 0,
    image: "/image/iphone-16.avif",
    price: 900,
    category: "iphones-sellados",
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    description:
      "Diseño en titanio, chip A17 Pro, cámara de 48 MP con zoom óptico 5x, pantalla ProMotion.",
    stock: 18,
    image: "/image/iphone-15-pro.avif",
    price: 900,
    category: "iphones-sellados",
  },
  {
    id: 4,
    name: "iPhone 15",
    description:
      "Pantalla de 6.1”, Dynamic Island, chip A16 Bionic, resistente al agua IP68.",
    stock: 25,
    image: "/image/iphone-15.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
  {
    id: 5,
    name: "iPhone 14 Pro Max",
    description:
      "Pantalla Always-On, chip A16 Bionic, cámara de 48 MP, 120 Hz de tasa de refresco.",
    stock: 10,
    image: "/image/iphone-14-pro-max.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
  {
    id: 6,
    name: "iPhone 14",
    description:
      "Chip A15 Bionic, cámara dual de 12 MP, grabación 4K HDR, Face ID.",
    stock: 30,
    image: "/image/iphone-14.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
  {
    id: 7,
    name: "iPhone 13 Pro",
    description:
      "Pantalla OLED de 6.1”, chip A15 Bionic, cámara triple, batería optimizada.",
    stock: 12,
    image: "/image/iphone-13-pro.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
  {
    id: 8,
    name: "iPhone 13 Mini",
    description:
      "Diseño compacto de 5.4”, chip A15 Bionic, cámara dual, 256 GB de almacenamiento.",
    stock: 8,
    image: "/image/iphone-13-mini.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
  {
    id: 9,
    name: "iPhone SE (3ra generación)",
    description:
      "Pantalla Retina HD de 4.7”, chip A15 Bionic, sensor Touch ID, diseño clásico.",
    stock: 22,
    image: "/image/iphone-se-3ageneracion.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
  {
    id: 10,
    name: "iPhone 12",
    description:
      "Pantalla Super Retina XDR de 6.1”, chip A14 Bionic, conectividad 5G, cámara dual.",
    stock: 17,
    image: "/image/iphone-12.avif",
    price: 900,
    category: "iphones-seminuevos",
  },
];

const seedProducts = async () => {
  try {
    const productsRef = collection(db, "products");
    products.map(async ({ id, ...dataProduct }) => {
      await addDoc(productsRef, dataProduct);
    });
    console.log("Productos subidos correctamente")
  } catch (error) {
    console.log(error)
  }
};
seedProducts();