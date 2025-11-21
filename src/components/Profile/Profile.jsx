import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Profile = (params) => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect =
    (() => {
      if (!user.id && !loading) {
        navigate("/login");
      }
    },
    [user, loading]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        ((<h1>Perfil de usuario</h1>),
        (<h3>Bienvenido {user.username}</h3>),
        (<button onClick={signOutUser}>Cerrar Sesion</button>))
      )}
    </div>
  );
};

export default Profile;
