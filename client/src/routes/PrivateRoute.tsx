import { Navigate } from "react-router-dom";

import { JSX } from "react";
import { useAuth } from "../auth/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
