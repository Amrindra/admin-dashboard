import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SideMenuBar from "../sideMenuBar/SideMenuBar";
import Footer from "../footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <SideMenuBar />
        </div>
        <div className="content-container">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
