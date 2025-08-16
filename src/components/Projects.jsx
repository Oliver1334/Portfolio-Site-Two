import React from "react";
import weatherappimg from "../assets/weatherapp2.png";
import ncgameslogo from "../assets/nclogo3.png";
import fanFinder from "../assets/fanfinder.png";
import { Link } from "react-scroll";

export const Projects = () => {
  return (
    <div
      
      className="w-full md:h-screen text-[#FCFFFC] bg-[#040F0F] h-[150vh] pt-32 pb-32"
    >
      <div  className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-12">
        <div name="projects" className="pb-4 pt-32">
          <p  className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232]">
            Projects
          </p>
          <p  className="pt-6 pb-4">
            {"// Take a look at my most recent projects"}
          </p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-0">
          {/* Grid Project Card */}
          <div className=" bg-[#2D3A3A] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            {/* Image */}
            <img
              src={ncgameslogo}
              alt="NC Games"
              className="w-full p-2 pb-3 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow px-3 pb-3 ">
              <span className="text-2xl font-bold text-[#FCFFFC] tracking-wider ">
                NC Games
              </span>
              <p className="pb-3">
                NC Games is a board game review aggregation app allowing users
                to view, vote and comment on reviews amongst other features.
              </p>

              {/* buttons */}
              <div className="pt-8 flex flex-row justify-center space-x-4 ">
                <a
                  href="https://nc-games1334.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className=" text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex 
                  "
                  >
                    Deployed App
                  </button>
                </a>

                <Link to="ncgames" smooth={true} duration={500}>
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex 
                  "
                  >
                    Learn More...
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Grid Project Card 2*/}
          <div className=" bg-[#2D3A3A] flex flex-col justify-between hover:scale-105 transition-transform duration-300 ">
            {/* Image */}
            <img
              src={fanFinder}
              alt="Fan Finder"
              className="w-full p-2 pb-3 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow px-3 pb-3 ">
              <span className="text-2xl font-bold text-[#FCFFFC] tracking-wider ">
                Fan Finder
              </span>
              <p className="pb-2">
                A social networking app for iOS and Android that uses
                location-based features, developed with React Native.
              </p>

              {/* buttons */}
              <div className="pt-12 flex flex-row justify-center space-x-4">
                <a
                  href="https://www.youtube.com/watch?v=N_lc2a5umbo&ab_channel=Northcoders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex
                  "
                  >
                    Video Demo
                  </button>
                </a>

                <Link to="fanfinder" smooth={true} duration={500}>
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex
                  "
                  >
                    Learn More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Grid Project Card 3*/}
          <div className=" bg-[#2D3A3A] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            {/* Image */}
            <img
              src={weatherappimg}
              alt="Weather App"
              className="w-full p-2 pb-3 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow px-3 pb-3  ">
              <span className="text-2xl font-bold text-[#FCFFFC] tracking-wider ">
                Weather App
              </span>
              <p className="pb-3">
                A web app built with React and Typescript to fetch and display
                weather data using the OpenWeather API.
              </p>

              {/* buttons */}
              <div className="pt-12 flex flex-row justify-center space-x-4">
                <a
                  href="https://weather-app-virid-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex
                  "
                  >
                    Deployed App
                  </button>
                </a>
                <Link to="weather" smooth={true} duration={500}>
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex
                  "
                  >
                    Learn More...
                  </button>
                </Link>
              </div>
            </div>
          </div>

           {/* Grid Project Card 4*/}
           <div className=" bg-[#2D3A3A] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            {/* Image */}
            <img
              src={weatherappimg}
              alt="Weather App"
              className="w-full p-2 pb-3 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow px-3 pb-3  ">
              <span className="text-2xl font-bold text-[#FCFFFC] tracking-wider ">
                Weather App
              </span>
              <p className="pb-3">
                A web app built with React and Typescript to fetch and display
                weather data using the OpenWeather API.
              </p>

              {/* buttons */}
              <div className="pt-12 flex flex-row justify-center space-x-4">
                <a
                  href="https://weather-app-virid-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex
                  "
                  >
                    Deployed App
                  </button>
                </a>
                <Link to="weather" smooth={true} duration={500}>
                  <button
                    className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-4 py-3 flex
                  "
                  >
                    Learn More...
                  </button>
                </Link>
              </div>
            </div>
          </div>

          

          {/*container end*/}
        </div>
      </div>
    </div>
  );
};
