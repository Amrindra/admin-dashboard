import "./styles/global.scss";
import Homepage from "./pages/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./pages/users/UserPage";
import ProductPage from "./pages/products/ProductPage";
import Login from "./pages/login/Login";
import SingleUserPage from "./pages/singleUser/SingleUserPage";
import SingleProductPage from "./pages/singleProduct/SingleProductPage";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/users",
          element: <UserPage />,
        },
        {
          path: "/profile/:id",
          element: <SingleUserPage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/products/:id",
          element: <SingleProductPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
