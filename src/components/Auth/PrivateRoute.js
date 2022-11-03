import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./UserContext";

const PrivateRoute = ({ children }) => {
  const Navigate = useNavigate();
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;