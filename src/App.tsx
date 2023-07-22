import './styles/global.scss';
import Homepage from './pages/homepage/Homepage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserPage from './pages/users/UserPage';
import ProductPage from './pages/products/ProductPage';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

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
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
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
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
