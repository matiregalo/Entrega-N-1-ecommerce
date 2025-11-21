import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ErrorContext } from "../../../context/ErrorContext.jsx";
import Error from "../Error/Error.jsx";
import Login_RegisterForm from "../Login-RegisterForm/Login-RegisterForm.jsx";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();
  const { error, setError, clearError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    clearError();
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        dataForm.email,
        dataForm.password,
      );
      if (!userCredential.user.emailVerified) {
        auth.signOut();
        throw new Error();
      }
      navigate("/profile");
    } catch (error) {
      setError({
        message: `Error al iniciar sesion`,
        code: 400,
      });
    }
  };
  return (
    <div>
      {error.hasError ? (
        <Error />
      ) : (
        <div className="register">
          <form className="form-register" onSubmit={handleSubmitForm}>
            <h2>Iniciar sesion</h2>
            <Login_RegisterForm dataForm={dataForm} handleChangeInput={handleChangeInput}/>
            <button className="submit" type="submit">
              Iniciar sesion
            </button>
            <div className="button-to-login">
              <p>Eres nuevo?</p>
              <Link className="link" to="/register">
                Registrate aqui!
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
