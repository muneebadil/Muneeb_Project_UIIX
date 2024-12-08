"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri"; // Dropdown arrow
import { MdPerson, MdMailOutline } from "react-icons/md"; // Person & Mail icons
import { PiMagnifyingGlass, PiShoppingCartLight } from "react-icons/pi"; // Magnifying Glass & Cart icons
import { CiHeart } from "react-icons/ci"; // Heart icon
import { FiPhone } from "react-icons/fi"; // Phone icon
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"; // Social Media Icons
import { IoLogoInstagram } from "react-icons/io"; // Instagram icon

const NavbarFull = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Dark Navbar */}
      <nav className="bg-[#252B42] h-[58px] flex items-center justify-between px-4 lg:px-8">
        {/* Left Section */}
        <div className="flex space-x-4 items-center">
          <div className="flex items-center text-white space-x-2">
            <FiPhone className="w-5 h-5" />
            <span className="text-sm font-bold">(225) 555 0-118</span>
          </div>
          <div className="hidden sm:flex items-center text-white space-x-2">
            <MdMailOutline className="w-5 h-5" />
            <span className="text-sm font-bold">michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="hidden md:block text-center">
          <span className="text-white text-sm font-bold">
            Follow Us and get a chance to win 80% off
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <span className="text-white text-sm font-bold">Follow Us:</span>
          <div className="flex space-x-2">
            <IoLogoInstagram className="text-white w-5 h-5" />
            <FaFacebook className="text-white w-5 h-5" />
            <FaTwitter className="text-white w-5 h-5" />
            <FaYoutube className="text-white w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Light Navbar */}
      <nav className="bg-white h-[58px] flex items-center justify-between px-4 lg:px-12 shadow">
        {/* Left Section */}
        <h1 className="text-[#252B42] text-2xl font-bold">Bandage</h1>

        {/* Center Section */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-[#737373] font-bold hover:text-[#23A6F0]">
            Home
          </a>
          <div className="relative">
            <button
              className="text-[#737373] font-bold hover:text-[#23A6F0] flex items-center"
              onClick={toggleDropdown}
            >
              Shop
              <RiArrowDropDownLine className="ml-1 w-5 h-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded mt-2 shadow-lg">
                <ul className="p-2">
                  <li className="py-1 px-4 hover:bg-gray-100">Category 1</li>
                  <li className="py-1 px-4 hover:bg-gray-100">Category 2</li>
                  <li className="py-1 px-4 hover:bg-gray-100">Category 3</li>
                </ul>
              </div>
            )}
          </div>
          <a href="#blog" className="text-[#737373] font-bold hover:text-[#23A6F0]">
            Blog
          </a>
          <a href="#contact" className="text-[#737373] font-bold hover:text-[#23A6F0]">
            Contact
          </a>
          <a href="#pages" className="text-[#737373] font-bold hover:text-[#23A6F0]">
            Pages
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="text-[#23A6F0] font-bold">Login/Signup</button>
          <PiMagnifyingGlass className="text-[#23A6F0] w-6 h-6" />
          <PiShoppingCartLight className="text-[#23A6F0] w-6 h-6" />
          <CiHeart className="text-[#23A6F0] w-6 h-6" />
        </div>
      </nav>
    </>
  );
};

export default NavbarFull;
