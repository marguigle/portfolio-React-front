
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="transition-colors duration-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
