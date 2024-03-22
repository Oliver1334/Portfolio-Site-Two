import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#410c0c] text-gray-300">
        <div></div>
      {/* menu */}
      
        <ul className="font-abc hidden md:flex">
          <li className="px-4 cursor-pointer">Home</li>
          <li className="px-4 cursor-pointer">About</li>
          <li className="px-4 cursor-pointer">Skills</li>
          <li className="px-4 cursor-pointer">Work</li>
          <li className="px-4 cursor-pointer">Contact</li>
        </ul>
      
      {/* Hamburger Icon*/}
      <div className="md:hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
