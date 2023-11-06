import { Link } from "react-router-dom";
import { PlayStyleIcon } from "../assets/icons";
import menIcon from "../../public/men.png";
import ideaArrow from "../assets/images/ideaarrow.png";

const Header = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex flex-col md:flex-row items-center  md:justify-evenly gap-7">
        <div className="w-full md:mi-w-[70%]  flex items-center flex-col text-center mt-[30px] md:text-left md:items-start">
          <h1 className="text-[35px] lg:text-[50px] mt-[-40px] md:mt-[-40px] lg:mt-[-150px] leading-[50px] lg:leading-[60px] font-[850] text-secondary font-ageo mb-2">
            <span className="text-primary">Scroll Down</span> To Get <br />
             Experience With Our <br />
            <span className="text-primary">Gallery Functionality</span>
          </h1>
          <p className="flex text-base lg:text-[20px] mb-7 max-w-[420px] lg:max-w-[550px]">
            Your best quality photo need a best album for your memories store,
            and that's we provide with amazing services.
          </p>
          <div className="flex items-center gap-2">
            <Link className="bg-primary hover:bg-darkPrimary duration-200  text-white text-[18px] shadow-md font-[400] py-[13px] px-[14px] rounded-md tracking-wider">
              Get Started
            </Link>

            <div className="flex items-center gap-1">
              <PlayStyleIcon />
              <p className="text-[18px] font-medium tracking-wide">Learn More</p>
            </div>
          </div>

        </div>

        <div className="max-w-[500px] relative w-full ">
            
        <img src={ideaArrow} className="absolute  top-[50PX] left-[0px] rotate-[20deg] z-[-1]" alt="" />

          <img src={menIcon} className="w-full z-[999]" alt="" />
        </div>
        
      </div>
      
      <div className="w-full absolute bottom-[50px] left-[0] flex items-center justify-center">
          <a href="#gallery" className="mouseLoader"></a>
          </div>
    </div>
  );
};

export default Header;
