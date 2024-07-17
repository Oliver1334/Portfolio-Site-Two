import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import PostgreSQL from "../assets/postgresql.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import ExpressJS from "../assets/express.png";
import Jest from "../assets/jest.png"
import APImg from "../assets/api.png"


export const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#410c0c] text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">


          <div className="shadow-lg shadow-[#248232] hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={Javascript} alt="Javascript icon"></img>
            <p className="py-3">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={ReactImg} alt="React icon"></img>
            <p className="py-3">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={HTML} alt="HTML icon"></img>
            <p className="py-3">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="CSS icon"></img>
            <p className="py-3">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={Node} alt="NODEJS icon"></img>
            <p className="py-3">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={PostgreSQL} alt="PostgreSQL icon"></img>
            <p className="py-3">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={Jest} alt="Jest icon"></img>
            <p className="py-3">JEST</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={Tailwind} alt="Tailwind icon"></img>
            <p className="py-3">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={ExpressJS} alt="Express icon"></img>
            <p className="py-3">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={Git} alt="GIT icon"></img>
            <p className="py-3">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto pt-4" src={APImg} alt="API icon"></img>
            <p className="py-3">RESTFUL APIS</p>
          </div>






        </div>
      </div>
    </div>
  );
};

