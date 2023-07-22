import './App.css';
import Homepage from './pages/homepage/Homepage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserPage from './pages/users/UserPage';
import ProductPage from './pages/products/ProductPage';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      chlidren: [
        {
          path: '/',
          element: <Homepage />,
        },
        {
          path: '/users',
          element: <UserPage />,
        },
        {
          path: '/products',
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
