import { Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <Route {...rest} element={Component} />
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoute;
