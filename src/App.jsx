import { ToastContainer, toast } from "react-toastify"

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom"
import AuthPage from "./components/AuthPage"
import Dashboard from "./components/Dashboard"
import HomeLayout from "./components/HomeLayout"
import Reports from "./components/Reports"
import Settings from "./components/Settings"
import { getToken, onMessage } from "firebase/messaging"
import { messaging } from "./firebase/firebaseConfig"
import Message from "./Message"
import { useEffect } from "react"

function App() {
  onMessage(messaging, (payload) => {
    const date = new Date()
    console.log("notification recieved at ", date)

    toast(<Message notification={payload.notification} />)
  })
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission()

    if (permission === "granted") {
      const token = await getToken(messaging, {
        // vapidKey: VITE_APP_VAPID_KEY,
        vapidKey:
          "BKPZ4igfrnKxC7VaBRndoZCWp5y8t4HaZWWwdNBa2B2C12zdeX51Q8W7EEBqOkCgwqqKDpIAlU4d6DkgpIiwfx0",
      })

      //We can send token to server
      console.log("Token generated : ", token)
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification")
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])

  // Protected Route
  const ProtectedRoute = () => {
    const token = localStorage.getItem("accessToken")

    return token ? <Outlet /> : <Navigate to="/auth" replace />
  }

  // Public Route
  const PublicRoute = () => {
    const token = localStorage.getItem("accessToken")

    return token ? <Navigate to="/" replace /> : <Outlet />
  }

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
              path: "reports",
              element: <Reports />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
          ],
        },
      ],
      errorElement: <div>error page</div>,
    },
    {
      element: <PublicRoute />,
      children: [{ path: "auth", element: <AuthPage /> }],
    },
    {
      path: "*",
      element: localStorage.getItem("accessToken") ? (
        <Navigate to="/" replace />
      ) : (
        <Navigate to="auth" replace />
      ),
    },
  ])
  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
