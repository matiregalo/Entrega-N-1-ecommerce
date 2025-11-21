import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import seedProducts from "./utils/seedProducts.js";
seedProducts();

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>,
);
