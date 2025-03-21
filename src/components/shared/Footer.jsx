import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import footerlogo from "../../assets/img/logo/logo2_footer.png";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import footerlogo from "../../assets/img/logo/logo2_footer.png";
const Footer = () => {
  return (
    <footer className="bg-[#1f0101] text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left contact info */}
          <div className="text-center flex flex-col w-full ">
            <div className="flex w-[5rem] mx-auto mb-1">
              <FaPhoneAlt className="w-3 h-3 text-red-600" />
            </div>
            <h6 className="text-xs font-semibold mb-2">CONTACT INFO</h6>
            <p className="text-xs mb-1">913-473-7000</p>
            <p className="text-gray-400 text-xs">contact@cakeshop.com</p>
          </div>

          {/* Center logo and description */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img src={footerlogo} alt="Narosundar" className="h-15 " />
            </div>
            <p className="text-gray-400 text-xs max-w-md mx-auto">
              There are many variations of passages of Lorem Ipsum available be
              the majority.
            </p>
          </div>

          {/* Right contact info */}
          <div className="text-center flex flex-col w-full ">
            <div className="flex w-[5rem] mx-auto mb-1">
              <FaLocationArrow className="w-3 h-3 text-red-600" />
            </div>
            <h6 className="text-xs font-semibold mb-2">CONTACT INFO</h6>
            <p className="text-xs mb-1">913-473-7000</p>
            <p className="text-gray-400 text-xs">contact@cakeshop.com</p>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex justify-center gap-4 mt-8 mb-8">
          <a
            href="#"
            className="p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            <FaFacebook className="w-5 h-5 text-white transition-transform duration-300 ease-in-out hover:scale-x-[-1]" />
          </a>

          <a
            href="#"
            className="p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            <FaInstagram className="w-5 h-5 text-white transition-transform duration-300 ease-in-out hover:scale-x-[-1]" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5 text-white transition-transform duration-300 ease-in-out hover:scale-x-[-1]" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p className="">Copyright ©2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
