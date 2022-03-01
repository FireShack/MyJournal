import { Navigate } from "react-router";

export const PublicRoutes = ({ children, IsLogin }) => {
  return IsLogin ? <Navigate to="/" /> : children ;
};
