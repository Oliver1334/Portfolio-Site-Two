import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hamburger from 'hamburger-react'
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(!isOpen);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#040F0F] text-[#FCFFFC] z-50">
      <div>
        <h1></h1>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300" >
            Home
          </Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300" >
            About
          </Link>
        </li>
        <li>
        <Link to="skills" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300" >
            Skills
          </Link>
        </li>
        <li>
        <Link to="projects" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300" >
            Projects
          </Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300" >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon*/}
      <div onClick={handleClick} className="md:hidden z-10">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#040F0F] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`} //template literal to access isOpen here for ternary operator
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300">
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} className="text-[#FCFFFC] hover:text-[#2BA84A] duration-300 ">
            Contact
          </Link>
        </li>
      </ul>


      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2D3A3A]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Oliver1334"
              target="_blank" // This will open the link in a new tab
              rel="noopener noreferrer" // This is a security measure when using target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#248232]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:oliver.taylor1334@outlook.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#246682]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/oliver-taylor-297382366/"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

