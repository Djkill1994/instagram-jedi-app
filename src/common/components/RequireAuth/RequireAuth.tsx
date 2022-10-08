import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "features/Login/slices/login.slice";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useSelector(loginSelector);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
