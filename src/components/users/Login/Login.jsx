import { useState, useContext, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ErrorContext } from "../../../context/ErrorContext.jsx";
import Error from "../../feedback/Error/Error.jsx";
import Login_RegisterForm from "../Login-RegisterForm/Login-RegisterForm.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";
import Loader from "../../feedback/Loader/Loader";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();
  const { error, setError, clearError } = useContext(ErrorContext);
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    clearError();
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
        await auth.signOut();
        throw new Error("No has verificado tu email");
      }
      const userRef = doc(db, "users", userCredential.user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await auth.signOut();
        throw new Error("Usuario no encontrado en la base de datos");
      }
      navigate("/profile");
    } catch (error) {
      setError({
        message: `Error al iniciar sesion, acuerdate de verificar el email que fue enviado, revisa en el spam`,
        code: 400,
      });
    }
  };

  useEffect(() => {
    if (!loading && user?.id) {
      navigate("/profile");
    }
  }, [user, navigate, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {error.hasError ? (
        <Error />
      ) : (
        <div className="register">
          <form className="form-register" onSubmit={handleSubmitForm}>
            <h2>Iniciar sesion</h2>
            <Login_RegisterForm
              dataForm={dataForm}
              handleChangeInput={handleChangeInput}
            />
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
