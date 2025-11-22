import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Loader from "../../feedback/Loader/Loader";
import "./profile.css";

const Profile = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading && !user?.id) {
        navigate("/login", { replace: true });
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [user, loading, navigate]);

  const getInitial = () => {
    return user?.username ? user.username.charAt(0).toUpperCase() : "U";
  };

  const handleSignOut = async () => {
    await signOutUser();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      {loading ? (
        <Loader />
      ) : (
        <div className="profile-content">
          <div className="user-avatar">{getInitial()}</div>

          <h1 className="profile-title">Perfil de usuario</h1>
          <h3 className="profile-welcome">Bienvenido {user?.username}</h3>

          <p className="profile-email">
            <i className="bi bi-envelope"></i>
            {user?.email}
          </p>

          <button className="logout-btn" onClick={handleSignOut}>
            <i className="bi bi-box-arrow-right"></i>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
