import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./components/ErrorPage";
import Main from "./components/Main";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PublicRoute from "./hooks/PublicRoute";
import PrivateRoute from "./hooks/PrivateRoute";
import ChefInfo from "./pages/ChefInfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("http://localhost:5000/chefs"),
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <PublicRoute>
              <Signup />
            </PublicRoute>
          ),
        },
        {
          path: "/chef/:chefId",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/chef/${params.chefId}`),
          element: (
            <PrivateRoute>
              <ChefInfo />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
