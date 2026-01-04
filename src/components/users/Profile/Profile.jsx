import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Loader from "../../feedback/Loader/Loader";
import "./profile.css";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
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
      <Helmet>
        <title>Perfil | MrIphones</title>
        <meta name="description" content="Gestiona tu perfil de usuario en MrIphones. Revisa tu información personal y accede a tus compras de iPhones." />
        <link rel="canonical" href={`${window.location.origin}${location.pathname}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
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
