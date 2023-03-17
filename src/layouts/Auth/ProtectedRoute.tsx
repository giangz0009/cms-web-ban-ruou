import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "src/context/AppContext";

interface Props extends React.PropsWithChildren {}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const { user, token } = useAuth();

  return user && token ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
