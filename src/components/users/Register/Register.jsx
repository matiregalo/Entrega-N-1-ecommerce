import { useState, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import "./register.css";
import { ErrorContext } from "../../../context/ErrorContext.jsx";
import ErrorComponent from "../../feedback/Error/Error.jsx";
import Loader from "../../feedback/Loader/Loader.jsx";
import db, { app } from "../../../db/db.js";
import Login_RegisterForm from "../Login-RegisterForm/Login-RegisterForm.jsx";
import useTitle from "../../../hooks/useTitle.js";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(app);
  const { error, setError, clearError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    clearError();
    setIsLoading(true);
    
    if (!dataForm.username || !dataForm.email || !dataForm.password) {
      setError({
        message: "Por favor, completa todos los campos",
        code: 400,
      });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dataForm.email)) {
      setError({
        message: "Por favor, ingresa un email válido",
        code: 400,
      });
      setIsLoading(false);
      return;
    }

    if (dataForm.password.length < 6) {
      setError({
        message: "La contraseña debe tener al menos 6 caracteres",
        code: 400,
      });
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        dataForm.email,
        dataForm.password,
      );

      const firestorePromise = setDoc(doc(db, "users", userCredential.user.uid), {
        username: dataForm.username,
        email: dataForm.email,
        emailVerified: false,
      });
      
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new window.Error("Timeout al guardar en Firestore")), 5000)
      );
      
      try {
        await Promise.race([firestorePromise, timeoutPromise]);
      } catch (firestoreError) {
        if (import.meta.env.DEV) {
          console.warn("Error al guardar en Firestore, continuando con verificación:", firestoreError);
        }
      }

      const actionCodeSettings = {
        url: `${window.location.origin}/verify-email`,
        handleCodeInApp: true,
      };

      await sendEmailVerification(userCredential.user, actionCodeSettings);

      await auth.signOut();

      navigate("/login", { 
        state: { 
          successMessage: "¡Te hemos enviado un email de verificación! Revisa tu bandeja de entrada y también la carpeta de spam." 
        },
        replace: true,
      });
    } catch (error) {
      setIsLoading(false);
      
      if (error.code === "auth/email-already-in-use") {
        navigate("/login", {
          state: {
            successMessage: "Este email ya está registrado. Por favor, inicia sesión.",
          },
          replace: true,
        });
        return;
      }
      
      let errorMessage = "Error al crear el usuario";
      
      if (error.code === "auth/invalid-email") {
        errorMessage = "El email no es válido.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "La contraseña es muy débil. Debe tener al menos 6 caracteres.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Error de conexión. Verifica tu internet e intenta nuevamente.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Demasiados intentos. Por favor, espera unos minutos e intenta nuevamente.";
      } else {
        errorMessage = `Error al crear el usuario. Por favor, intenta nuevamente.`;
        if (import.meta.env.DEV) {
          console.error("Error en registro:", error);
        }
      }
      
      setError({
        message: errorMessage,
        code: 400,
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  useTitle({title: "Registrar"})

  return (
    <div>
      {error.hasError ? (
        <ErrorComponent />
      ) : (
        <div className="register">
          <form className="form-register" onSubmit={handleSubmitForm}>
            <h2>Registro</h2>
            <div className="input-box">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                className="input"
                placeholder="Nombre de usuario"
                type="username"
                id="username"
                name="username"
                value={dataForm.username}
                onChange={handleChangeInput}
              />
            </div>
            <Login_RegisterForm
              dataForm={dataForm}
              handleChangeInput={handleChangeInput}
            />
            <button 
              className="submit" 
              type="submit"
              disabled={!dataForm.username || !dataForm.email || !dataForm.password}
            >
              Registrarme
            </button>
            <div className="button-to-login">
              <p>Ya tienes un usuario</p>
              <Link className="link" to="/login">
                Iniciar sesion!
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
