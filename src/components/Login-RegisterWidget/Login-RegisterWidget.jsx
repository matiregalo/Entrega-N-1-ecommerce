import { useContext } from "react";
import { Link } from "react-router-dom";

import "./login-registerWidget.css";

const Login_RegisterWidget = () => {
  return (
    <Link to="/register" className="cart-widget">
      <div className="cart-icon-container">
        <i class="bi bi-person"></i>
      </div>
    </Link>
  );
};

export default Login_RegisterWidget;
