// components/NavbarLight.jsx
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri"; // Shop dropdown arrow
import { MdPerson } from "react-icons/md"; // Person icon for Login/Signup
import { PiMagnifyingGlass } from "react-icons/pi"; // Magnifying Glass icon for Search
import { PiShoppingCartLight } from "react-icons/pi"; // Shopping Cart icon
import { CiHeart } from "react-icons/ci"; // Heart icon

const NavbarLight = () => {
  return (
    <nav className="bg-[#FFFFFF] h-[1437px] w-full flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12">
      {/* Left Section: Brand Name */}
      <div className="flex items-center w-[187px] h-[58px]">
        <h1 className="text-[#252B42] text-[24px] font-bold">Bandage</h1>
      </div>

      {/* Center Section: Links */}
      <div className="flex space-x-8 items-center justify-center w-full">
        <a href="#home" className="text-[#737373] text-[14px] font-bold w-[43px] h-[24px]">
          Home
        </a>
        <div className="relative flex items-center">
          <a href="#shop" className="text-[#737373] text-[14px] font-bold w-[38px] h-[28px]">
            Shop
          </a>
          <RiArrowDropDownLine className="text-[#252B42] w-[5.71px] h-[10px]" />
        </div>
        <a href="#blog" className="text-[#737373] text-[14px] font-bold w-[43px] h-[24px]">
          Blog
        </a>
        <a href="#contact" className="text-[#737373] text-[14px] font-bold w-[43px] h-[24px]">
          Contact
        </a>
      </div>

      {/* Right Section: Icons and Button */}
      <div className="flex space-x-5 items-center">
        {/* Login/Signup Button */}
        <div className="flex items-center space-x-2 bg-[#23A6F0] py-[15px] px-[15px] rounded-md">
          <button className="text-white text-[14px] font-bold w-[119px] h-[24px]">
            Login/Signup
          </button>
          <MdPerson className="text-[#23A6F0] w-[12px] h-[12px]" />
        </div>

        {/* Magnifying Glass (Search Icon) */}
        <div className="w-[46px] h-[46px] p-[15px] flex justify-center items-center">
          <PiMagnifyingGlass className="text-[#23A6F0] w-[46px] h-[46px]" />
        </div>

        {/* Shopping Cart Icon */}
        <div className="w-[56px] h-[46px] p-[15px] flex justify-center items-center">
          <PiShoppingCartLight className="text-[#23A6F0] w-[56px] h-[46px]" />
        </div>

        {/* Heart Icon */}
        <div className="w-[56px] h-[46px] p-[15px] flex justify-center items-center">
          <CiHeart className="text-[#23A6F0] w-[56px] h-[46px]" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarLight;
