import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./components/Main";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PublicRoute from "./hooks/PublicRoute";
import PrivateRoute from "./hooks/PrivateRoute";
import ChefInfo from "./pages/ChefInfo";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Favourites from "./pages/Favourites";

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
          loader: async () =>
            await fetch("https://baburchi-vai-faysalewucse.vercel.app/chefs"),
        },
        {
          path: "/blog",
          element: <Blog />,
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
          loader: async ({ params }) =>
            await fetch(
              `https://baburchi-vai-faysalewucse.vercel.app/chef/${params.chefId}`
            ),
          element: (
            <PrivateRoute>
              <ChefInfo />
            </PrivateRoute>
          ),
        },
        {
          path: "/favourites",
          element: (
            <PrivateRoute>
              <Favourites />
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
