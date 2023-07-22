import './App.css';
import Homepage from './pages/homepage/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import UserPage from './pages/users/UserPage';
import ProductPage from './pages/products/ProductPage';

function App() {
  const Layout = () => {
    return <div className="main"></div>;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: 'users',
      element: <UserPage />,
    },
    {
      path: 'products',
      element: <ProductPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
