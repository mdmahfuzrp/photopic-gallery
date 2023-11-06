import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainWebsite = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1300px] px-5 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainWebsite;
