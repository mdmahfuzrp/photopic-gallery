import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemList = (
    <>
      <a
        href="#home"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-primary duration-150 cursor-pointer"
      >
        Home
      </a>
      <a
        href="#gallery"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-primary duration-150 cursor-pointer"
      >
        Gallery
      </a>
      <a
        href="#our-vision"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-primary duration-150 cursor-pointer"
      >
        Our Vision
      </a>
      <a
        href="#testimonial"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-primary duration-150 cursor-pointer"
      >
        Testimonial
      </a>
      <a
        href="#subscribe"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-primary duration-150 cursor-pointer"
      >
        Subscribe
      </a>
    </>
  );


  // For Scroll Shadow in Navbar
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${isVisible && 'shadow-sm duration-150'} fixed w-full bg-white z-[999] top-0`}>
      <div className="hidden md:flex items-center justify-between max-w-[1300px] mx-auto py-4 px-5 pl-[18px]">
        <div>
          <img src="/public/logo-dark.png" className="h-[35px]" alt="" />
        </div>
        <div>
          <ul className="flex gap-4 font-medium text-[18px]">{itemList}</ul>
        </div>
        <div className="flex gap-3 items-center">
          <Link className="text-[18px] hidden lg:flex font-medium hover:underline hover:text-primary">
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
            <img
              src="/public/logo-white.png"
              className="h-[32px] z-[99999]"
              alt=""
            />
          ) : (
            <img
              src="/public/logo-dark.png"
              className="h-[32px] z-[99999]"
              alt=""
            />
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
            <div className="flex gap-3 items-center mt-3">
              <Link className="bg-primary hover:bg-darkPrimary duration-200  text-white text-base font-medium shadow-md py-[4px] px-[15px] rounded-md">
                Log in
              </Link>
              <Link className="bg-primary hover:bg-darkPrimary duration-200  text-white text-base font-medium shadow-md py-[4px] px-[15px] rounded-md">
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
