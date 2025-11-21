import { createContext, useState, useEffect, useContext } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import db from "../db/db.js";
import Error from "../components/feedback/Error/Error.jsx";
import { ErrorContext } from "./ErrorContext.jsx";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const { error, setError, clearError } = useContext(ErrorContext);

  const signOutUser = async () => {
    clearError();
    try {
      await signOut(auth);
      setUser({});
    } catch (error) {
      setError({
        message: `Error al cerrar sesion`,
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
            await signOut(auth);
            throw new Error();
          }
        } else {
          setUser({});
        }
      } catch (error) {
        setError({
          message: `Error al cargar datos`,
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
