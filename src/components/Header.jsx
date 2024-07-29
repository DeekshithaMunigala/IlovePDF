import Logo from "../assets/ilovepdf.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { TiLightbulb } from "react-icons/ti";
import { IoPricetagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="z-10 fixed top-0 h-[60px] shadow-lg flex items-center justify-between w-full bg-[#ffffff]">
      <img src={Logo} alt="Logo" className="sm:h-7 h-5 my-4 sm:mx-6 mx-4" />
      <div className="flex items-center justify-between sm:mx-6 mx-1">
        <button className="sm:text-sm text-xs py-1 px-3 mr-4 rounded-md bg-[#E5322D] text-white font-semibold">
          Get Started
        </button>
        <button className="sm:text-sm text-xs py-1 px-3 rounded-md bg-[#E5322D] text-white font-semibold">
          Try for Free
        </button>

        <span className="relative group cursor-pointer">
          <AiOutlineMenu className="h-6 w-6 m-4" />
          <ul className="z-10 p-1 absolute right-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <li className="flex items-center py-3 px-4 rounded hover:bg-[#f5f5fa] hover:text-[#E5322D]">
              <img
                src="https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png"
                alt="Icon"
                className="h-4 mr-4"
              />
              <span className="text-xs font-semibold">Home</span>
            </li>

            <li className="flex items-center py-3 px-4 rounded hover:bg-[#f5f5fa] hover:text-[#E5322D]">
              <AiOutlineProduct className="h-4 mr-4" />
              <span className="text-xs font-semibold">Product</span>
            </li>

            <li className="flex items-center py-3 px-4 rounded hover:bg-[#f5f5fa] hover:text-[#E5322D]">
              <TiLightbulb className="h-4 mr-4" />
              <span className="text-xs font-semibold">Solutions</span>
            </li>

            <li className="flex items-center py-3 px-4 rounded hover:bg-[#f5f5fa] hover:text-[#E5322D]">
              <IoPricetagOutline className="h-4 mr-4" />
              <span className="text-xs font-semibold">Pricing</span>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Header;
