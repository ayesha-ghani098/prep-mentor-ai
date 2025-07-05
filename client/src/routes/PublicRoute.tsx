import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { JSX } from "react";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
