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
  const skillsData = [
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactImg },
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Node.js", icon: Node },
    { name: "Express.js", icon: ExpressJS },
    { name: "PostgreSQL", icon: PostgreSQL },
    { name: "RESTful API", icon: APImg },
    { name: "Git", icon: Git },
    { name: "Jest", icon: Jest },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-[#040F0F] text-[#FCFFFC] py-20 scroll-mt-96"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#248232]">
            Skills
          </p>
          <p className="py-4">
            {"// Technologies i am skilled and experienced in"}
          </p>
        </div>

        {/* Mobile: Pill/Tag layout */}
        <div className="sm:hidden flex flex-wrap gap-3 justify-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#2D3A3A] hover:bg-[#1E2929] border-2 border-transparent hover:border-[#2BA84A] duration-300 px-4 py-2 rounded-full"
            >
              <img
                className="w-6 h-6"
                src={skill.icon}
                alt={`${skill.name} icon`}
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet: Card grid layout */}
        <div className="hidden sm:grid w-full grid-cols-4 md:grid-cols-6 gap-4 text-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2D3A3A] hover:bg-[#1E2929] duration-300 p-4 border-2 border-transparent hover:border-[#2BA84A] hover:shadow-lg hover:shadow-[#2BA84A]/20"
            >
              <img
                className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                src={skill.icon}
                alt={`${skill.name} icon`}
              />
              <p className="text-xs font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
