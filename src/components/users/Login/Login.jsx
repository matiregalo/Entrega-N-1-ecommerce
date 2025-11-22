import { useState, useContext, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";
import { ErrorContext } from "../../../context/ErrorContext.jsx";
import ErrorComponent from "../../feedback/Error/Error.jsx";
import Login_RegisterForm from "../Login-RegisterForm/Login-RegisterForm.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";
import Loader from "../../feedback/Loader/Loader";
import db, { app } from "../../../db/db.js";
import { getDoc, doc, setDoc } from "firebase/firestore"; 
import Success from "../../feedback/Success/Success.jsx"; 

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth(app);
  const { error, setError, clearError } = useContext(ErrorContext);
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation(); 

  useEffect(() => {
    if (!loading && user && Object.keys(user).length > 0 && location.pathname === "/login") {
      navigate("/profile", { replace: true });
    }
  }, [user, loading, navigate, location.pathname]);

  useEffect(() => {
    if (location.state?.successMessage) {
      setSuccessMessage(location.state.successMessage);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);


  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    clearError();
    setSuccessMessage(""); 
  };

  const handleCloseSuccess = () => {
    setSuccessMessage(""); 
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
      
      await userCredential.user.reload();
      
      if (!userCredential.user.emailVerified) {
        await auth.signOut();
        throw new Error("No has verificado tu email");
      }
      
      const userRef = doc(db, "users", userCredential.user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          username: userCredential.user.email?.split("@")[0] || "Usuario",
          email: userCredential.user.email,
          emailVerified: userCredential.user.emailVerified,
        });
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate("/profile", { replace: true });
    } catch (error) {
      let errorMessage = "Error al iniciar sesión";
      
      if (error.message === "No has verificado tu email") {
        errorMessage = "No has verificado tu email. Por favor, revisa tu correo y haz clic en el enlace de verificación.";
      } else if (error.message === "Usuario no encontrado en la base de datos") {
        errorMessage = "Usuario no encontrado en la base de datos.";
      } else if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        errorMessage = "Email o contraseña incorrectos.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Demasiados intentos fallidos. Por favor, espera unos minutos e intenta nuevamente.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Error de conexión. Verifica tu internet e intenta nuevamente.";
      } else {
        errorMessage = `Error al iniciar sesión. Por favor, intenta nuevamente.`;
        if (import.meta.env.DEV) {
          console.error("Error en login:", error);
        }
      }
      
      setError({
        message: errorMessage,
        code: 400,
      });
    }
  };

  if (loading) {
    return <Loader />;
  }



  return (
    <div>
      {error.hasError ? (
        <ErrorComponent />
      ) : (
        <div className="register">
          <form className="form-register" onSubmit={handleSubmitForm}>
              {successMessage && (
            <Success 
              message={successMessage} 
              onClose={handleCloseSuccess}
            />
          )}
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
