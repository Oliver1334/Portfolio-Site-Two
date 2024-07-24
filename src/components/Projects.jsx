import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import ncgamesimg from "../assets/ncgames.png"

export const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-[#FCFFFC] bg-[#040F0F] pt-12">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-12">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232]">
            Projects
          </p>
          <p className="py-6">// Take a look at my most recent projects</p>
        </div>

{/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">


            {/* Grid Project Card */}
          <div className=" bg-[#2D3A3A] flex flex-col justify-between h-[400px] hover:scale-105 transition-transform duration-300">
            
            {/* Image */}
            <img src={ncgamesimg} alt="NC Games" className="w-full p-2 object-cover"/>

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow p-2 ">
              <span className="text-2xl font-bold text-[#FCFFFC] tracking-wider ">
                NC Games
              </span>

              {/* button */ }
              <div className="pt-8 flex justify-center">
                <a href="/">
                  <button className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  ">
                    Read More...
                  </button>
                </a>
               
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

