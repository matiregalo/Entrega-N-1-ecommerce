import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import "./login-registerWidget.css";

const Login_RegisterWidget = () => {
  const { user } = useContext(AuthContext);
  const destination = user?.id ? "/profile" : "/login";

  return (
    <Link to={destination} className="login-register-widget">
      <div className="login-icon-container">
        <i className="bi bi-person"></i>
      </div>
    </Link>
  );
};

export default Login_RegisterWidget;
