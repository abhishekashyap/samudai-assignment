import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "../SignInWithEthereum/signInSlice";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
