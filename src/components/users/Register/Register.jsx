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
import Error from "../../feedback/Error/Error.jsx";
import db from "../../../db/db.js";
import Login_RegisterForm from "../Login-RegisterForm/Login-RegisterForm.jsx";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    username: "",
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        dataForm.email,
        dataForm.password,
      );
      if (!userCredential) throw new Error();
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username: dataForm.username,
        email: dataForm.email,
        emailVerified: false,
      });
      await sendEmailVerification(userCredential.user);
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      setError({
        message: `Error al crear el usuario ${error.message}`,
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
            <button className="submit" type="submit">
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
