/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  } else if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
}

export default PrivateRoute;
