import { useEffect, useState, useContext, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAuth, applyActionCode } from "firebase/auth";
import { app } from "../../../db/db.js";
import { Helmet } from "react-helmet-async";
import Loader from "../../feedback/Loader/Loader.jsx";
import Error from "../../feedback/Error/Error.jsx";
import { ErrorContext } from "../../../context/ErrorContext.jsx";
import "./verifyEmail.css";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { error, setError, clearError } = useContext(ErrorContext);
  const auth = getAuth(app);
  const hasVerified = useRef(false);

  useEffect(() => {
    if (hasVerified.current) return;
    hasVerified.current = true;

    const verifyEmail = async () => {
      const actionCode = searchParams.get("oobCode");
      const mode = searchParams.get("mode");
      
      clearError();

      if (!actionCode) {
        setError({
          message: "Enlace de verificación inválido. Falta el código de verificación.",
          code: 400,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        return;
      }

      if (mode && mode !== "verifyEmail") {
        setError({
          message: "Este enlace no es para verificación de email.",
          code: 400,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        return;
      }

      try {
        await applyActionCode(auth, actionCode);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        navigate("/login", {
          state: {
            successMessage: "¡Email verificado exitosamente! Ya puedes iniciar sesión.",
          },
          replace: true,
        });
      } catch (error) {
        let errorMessage = "Error al verificar el email";
        
        if (error.code === "auth/expired-action-code") {
          errorMessage = "El enlace de verificación ha expirado. Por favor, solicita uno nuevo.";
        } else if (error.code === "auth/invalid-action-code") {
          errorMessage = "El enlace de verificación es inválido o ya fue usado.";
        } else if (error.code === "auth/user-disabled") {
          errorMessage = "Esta cuenta ha sido deshabilitada.";
        } else {
          errorMessage = `Error al verificar el email: ${error.message}`;
        }
        
        setError({
          message: errorMessage,
          code: 400,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
    };

    verifyEmail();
  }, []);

  if (loading && !error.hasError) {
    return <Loader />;
  }

  return (
    <div className="verify-email-container">
      <Helmet>
        <title>Verificar email | MrIphones</title>
        <meta name="description" content="Verifica tu email en MrIphones. Confirma tu dirección de correo electrónico para completar tu registro y acceder a tu cuenta." />
      </Helmet>
      {error.hasError && <Error />}
    </div>
  );
};

export default VerifyEmail;

