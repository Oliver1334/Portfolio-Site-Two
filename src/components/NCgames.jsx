import React from "react";
import ncgamesimg from "../assets/ncgames.png"

export const Ncgames = () => {
    return (
        <div name="ncgames" className="w-full md:h-screen text-[#FCFFFC] bg-[#040F0F] pt-12">



        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-12">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232]">
              NC Games
            </p>
            <p className="py-6">// Take a look at my most recent projects</p>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta officiis porro at, saepe incidunt possimus impedit consequatur delectus minus dolorem! Quia fugiat quidem ab sit ipsa at rerum, veritatis neque illo debitis, facilis necessitatibus blanditiis, placeat labore architecto consequuntur.</p>

              <img src={ncgamesimg} alt="NC Games" className="w-full md:w-1/2 p-2 pb-3 object-cover "/>

            </div>
            <div className="flex flex-col md:flex-row justify-left gap-12">
            <button className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  ">
                    Deployed App
                  </button>
                  <button className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  ">
                    Frontend Repo
                  </button>
                  <button className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  ">
                    Backend Repo
                  </button>




            </div>






          </div>
        </div>




        </div>
      );
    };