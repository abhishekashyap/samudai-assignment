import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import { Dashboard, SignIn, Stats } from "../pages";

export const RouterPaths = () => (
  <Routes>
    <Route
      path="/stats"
      element={
        <ProtectedRoute>
          <Stats />
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route path="/" element={<SignIn />} />
  </Routes>
);
