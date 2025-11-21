import { createContext, useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import db from "../db/db.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const signOutUser = async () => {
    await signOut(auth);
    setUser({});
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const dataDb = await getDoc(userRef);
        const userData = { id: dataDb.id, ...dataDb.data() };
        setUser(userData);
      }
      setLoading(false);
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
