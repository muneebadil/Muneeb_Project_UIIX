// components/Navbar.jsx
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-[#252B42] h-[58px] w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Left Section */}
      <div className="flex space-x-4 sm:space-x-6 items-center flex-wrap">
        {/* Phone Button */}
        <div className="flex items-center bg-[#252B42] rounded-sm w-auto sm:w-[145px] h-[44px] p-2 sm:p-[10px]">
          <FiPhone className="text-white w-[16px] h-[16px]" />
          <h6 className="text-white font-bold text-[12px] sm:text-[14px] ml-2 sm:w-[104px]">
            (225) 555 0-118
          </h6>
        </div>

        {/* Email Button */}
        <div className="flex items-center bg-[#252B42] rounded-sm w-auto sm:w-[268px] h-[44px] p-2 sm:p-[10px]">
          <MdMailOutline className="text-white w-[16px] h-[16px]" />
          <h6 className="text-white font-bold text-[12px] sm:text-[14px] ml-2 sm:w-[227px]">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Center Section */}
      <div className="hidden sm:block">
        <h6 className="text-white font-bold text-[12px] sm:text-[14px] text-center">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <h6 className="text-white font-bold text-[12px] sm:text-[14px]">Follow Us:</h6>
        {/* Social Icons */}
        <div className="flex space-x-2 sm:space-x-3">
          <IoLogoInstagram className="text-white w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] p-2 sm:p-[5px]" />
          <FaFacebook className="text-white w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] p-2 sm:p-[5px]" />
          <FaTwitter className="text-white w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] p-2 sm:p-[5px]" />
          <FaYoutube className="text-white w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] p-2 sm:p-[5px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
