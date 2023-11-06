import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemList = (
    <>
      <li className="hover:text-primary duration-150 cursor-pointer">Home</li>
      <li className="hover:text-primary duration-150 cursor-pointer">
        Gallery
      </li>
      <li className="hover:text-primary duration-150 cursor-pointer">
        About Us
      </li>
      <li className="hover:text-primary duration-150 cursor-pointer">
        Our App
      </li>
      <li className="hover:text-primary duration-150 cursor-pointer">
        Contacts
      </li>
    </>
  );
  return (
    <div className="shadow-md">
      <div className="hidden md:flex items-center justify-between max-w-[1300px] mx-auto py-4 px-5 pl-[18px]">
        <div>
          <img src="/public/logo-dark.png" className="h-[35px]" alt="" />
        </div>
        <div>
          <ul className="flex gap-4 font-medium text-[18px]">{itemList}</ul>
        </div>
        <div className="flex gap-3 items-center">
          <Link className="text-[18px] font-medium hover:underline hover:text-primary">
            Log in
          </Link>
          <Link className="bg-primary hover:bg-darkPrimary duration-200  text-white text-[18px] shadow-md font-[400] py-[6px] px-[14px] rounded-md">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="py-4 block md:hidden px-5 pl-[18px] max-w-[1300px] mx-auto">
        <div className="flex items-center justify-between">
          {isMenuOpen ? (
            <img src="/public/logo-white.png" className="h-[32px] z-[99999]" alt="" />
          ) : (
            <img src="/public/logo-dark.png" className="h-[32px] z-[99999]" alt="" />
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-[99999]"
          >
            <CgMenuRightAlt
              size={28}
              className={`${
                isMenuOpen ? "text-white" : "text-secondary"
              } hover:text-primary duration-100`}
            />
          </button>
        </div>
        <div
          className={`absolute flex justify-center items-center top-0 left-0 bg-secondary duration-200 h-screen z-[999] w-full ${
            isMenuOpen ? "left-[0] opacity-100 ml-0 " : "left-[-100%] opacity-0"
          } transition-all duration-300 ease-in`}
        >
          <ul
            className={`text-center text-white text-[18px] tracking-wide flex flex-col gap-4 w-fit`}
          >
            {itemList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
