import "./App.css";
import { ToastContainer } from "react-toastify";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import HomeLayout from "./components/HomeLayout";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  // Protected Route
  const ProtectedRoute = () => {
    const token = localStorage.getItem("accessToken");

    return token ? <Outlet /> : <Navigate to="/auth" replace />;
  };

  // Public Route
  const PublicRoute = () => {
    const token = localStorage.getItem("accessToken");

    return token ? <Navigate to="/" replace /> : <Outlet />;
  };

  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <HomeLayout />,
          children: [
            { index: true, element: <Dashboard /> }, // default page

            {
              path: "/reports",
              element: <Reports />,
            },
            {
              path: "/settings",
              element: <Settings />,
            },
          ],
        },
      ],
      errorElement: <div>error page</div>,
    },
    {
      element: <PublicRoute />,
      children: [{ path: "/auth", element: <AuthPage /> }],
    },
    {
      path: "*",
      element: localStorage.getItem("accessToken") ? (
        <Navigate to="/" replace />
      ) : (
        <Navigate to="/auth" replace />
      ),
    },
  ]);
  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
