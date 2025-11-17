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
import Jest from "../assets/jest.png";
import APImg from "../assets/api.png";

export const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-[#040F0F] text-[#FCFFFC]  pb-32 scroll-mt-96 "
    >
      {/* container */}
      <div name="skills-title" className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  pt-32 pb-32">
        <div>
          <p  className="text-4xl font-bold inline border-b-4 border-[#248232] ">
            Skills
          </p>
          <p className="py-4">
            {"// Technologies i am skilled and experienced in include:"}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-4">
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img
              className="w-20 mx-auto pt-4"
              src={Javascript}
              alt="Javascript icon"
            />
            <p className="py-3">JavaScript</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img
              className="w-20 mx-auto pt-4"
              src={ReactImg}
              alt="React icon"
            />
            <p className="py-3">React</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={HTML} alt="HTML icon" />
            <p className="py-3">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="CSS icon" />
            <p className="py-3">CSS</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={Node} alt="NODEJS icon" />
            <p className="py-3">Node.js</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img
              className="w-20 mx-auto pt-4"
              src={PostgreSQL}
              alt="PostgreSQL icon"
            />
            <p className="py-3">PostgreSQL</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={Jest} alt="Jest icon" />
            <p className="py-3">Jest</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img
              className="w-20 mx-auto pt-4"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="py-3">Tailwind CSS</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img
              className="w-20 mx-auto pt-4"
              src={ExpressJS}
              alt="Express icon"
            />
            <p className="py-3">Express.js</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={Git} alt="GIT icon" />
            <p className="py-3">Git</p>
          </div>
          <div className=" hover:scale-110 duration-300 bg-[#2D3A3A]">
            <img className="w-20 mx-auto pt-4" src={APImg} alt="API icon" />
            <p className="py-3">RESTful API</p>
          </div>
        </div>
      </div>
    </div>
  );
};
