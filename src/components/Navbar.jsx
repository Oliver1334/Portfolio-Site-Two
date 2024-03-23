import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#410c0c] text-gray-300">
      <div>
        <h1>Oliver Taylor</h1>
      </div>
      {/* menu */}

      <ul className="font-abc hidden md:flex">
        <li className="px-4 cursor-pointer">Home</li>
        <li className="px-4 cursor-pointer">About</li>
        <li className="px-4 cursor-pointer">Skills</li>
        <li className="px-4 cursor-pointer">Work</li>
        <li className="px-4 cursor-pointer">Contact</li>
      </ul>

      {/* Hamburger Icon*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#410c0c] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300'href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'href="/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'href="/">
              CV <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
