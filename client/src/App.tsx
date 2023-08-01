import "./styles/global.scss";
import Homepage from "./pages/homepage/Homepage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserPage from "./pages/users/UserPage";
import ProductPage from "./pages/products/ProductPage";
import Navbar from "./components/navbar/Navbar";
import SideMenuBar from "./components/sideMenuBar/SideMenuBar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import SingleUserPage from "./pages/singleUser/SingleUserPage";
import SingleProductPage from "./pages/singleProduct/SingleProductPage";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <SideMenuBar />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

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
          path: "/users/:id",
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
