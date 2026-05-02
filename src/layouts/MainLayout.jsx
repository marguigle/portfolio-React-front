
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";

const MainLayout = () => {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-500">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
