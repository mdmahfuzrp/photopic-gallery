import { Link } from "react-router-dom";
import logo from '../../public/logo-dark.png'
const Footer = () => {
  return (
    <div className="mb-[30px]">
      <div className="max-w-[1300px] mx-auto px-[19px]">
        <div className="flex flex-col gap-2 sm:flex-row items-center justify-between border-b pb-4 mb-4">
          <img src={logo} alt="" className="z-[0] h-[25px] opacity-80" />
          <p className="font-dm font-medium text-[#6a6a6a]">
            Copyright &copy; 2023 all right reserve{" "}
            <Link to="https://www.linkedin.com/in/mdmahfuzrp/" className="text-blue-400 underline" target="_blank">Md Mahfuz RP</Link>
          </p>
        </div>
        <div>
            <p className="text-[18px] text-gray-500">Projects just a simple ui but the main focus is drag and drop image functionality and this for showcase for ollyo gallery</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
