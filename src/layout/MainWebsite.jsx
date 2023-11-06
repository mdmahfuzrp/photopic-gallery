import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import "./GlobalLoader.css";

const MainWebsite = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1300px] px-5 mx-auto">
        <Outlet />
      </div>
      <Footer />

      {isLoading && (
        <div className="absolute w-full flex items-center justify-center min-h-[85vh]">
          <span className="globalLoader">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default MainWebsite;
