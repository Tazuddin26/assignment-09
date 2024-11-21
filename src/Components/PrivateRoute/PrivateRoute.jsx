/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-[500px] flex justify-center">
        <span className="loading loading-bars loading-lg text-center"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
};

export default PrivateRoute;
