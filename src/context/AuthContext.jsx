import { createContext, useState, useEffect, useContext } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import db, { app } from "../db/db.js";
import { ErrorContext } from "./ErrorContext.jsx";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const { setError, clearError } = useContext(ErrorContext);

  const signOutUser = async () => {
    clearError();
    try {
      await signOut(auth);
      setUser({});
    } catch (error) {
      setError({
        message: "Error al cerrar sesión",
        code: 400,
      });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      clearError();
      try {
        if (user) {
          if (!user.emailVerified) {
            await signOut(auth);
            setUser({});
            setLoading(false);
            return;
          }
          const userRef = doc(db, "users", user.uid);
          const dataDb = await getDoc(userRef);
          if (dataDb.exists()) {
            const userData = { id: dataDb.id, ...dataDb.data() };
            setUser(userData);
          } else {
            // Lo crea temporalmente, totalmente necesario para si el usuario inicia sesion con el link de verificacion
            try {
              await setDoc(userRef, {
                username: user.email?.split("@")[0] || "Usuario",
                email: user.email,
                emailVerified: user.emailVerified,
              });
              const newDataDb = await getDoc(userRef);
              if (newDataDb.exists()) {
                const userData = { id: newDataDb.id, ...newDataDb.data() };
                setUser(userData);
              } else {
                await signOut(auth);
                setUser({});
              }
            } catch (setDocError) {
              if (import.meta.env.DEV) {
                console.error("Error al crear documento del usuario:", setDocError);
              }
              await signOut(auth);
              setUser({});
            }
          }
        } else {
          setUser({});
        }
      } catch (error) {
        setError({
          message: "Error al cargar datos del usuario",
          code: 400,
        });
      } finally {
        setLoading(false);
      }
    });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ user, loading, signOutUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export { AuthContext, AuthProvider };
