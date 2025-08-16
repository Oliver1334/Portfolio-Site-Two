import React from "react";
import weatherappimg from "../assets/weatherapp2.png";
import ncgameslogo from "../assets/nclogo3.png";
import fanFinder from "../assets/fanfinder.png";
import morndulimg from "../assets/morndulPig.jpg"
import vocabGame from "../assets/vocabGameCover.png"
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-0 pb-32">

{/* Project Card 1 */}
<div className="bg-[#2D3A3A] shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 rounded-none">
  {/* Image */}
  <div className="p-2">
    <img
      src={ncgameslogo}
      alt="NC Games"
      className="w-full h-48 object-cover border border-[#1E2929]"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-grow p-4">
    {/* Title */}
    <h3 className="text-2xl font-bold text-[#FCFFFC] tracking-wide mb-2">
      NC Games
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-sm mb-3">
      NC Games is a board game review aggregation app allowing users
      to view, vote and comment on reviews amongst other features.
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        React
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Node.js
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        PostgreSQL
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        CSS
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Express
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Jest
      </span>
    </div>

    {/* Buttons */}
    <div className="mt-auto flex flex-row justify-center space-x-4">
      <a
        href="https://nc-games1334.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Deployed App
        </button>
      </a>

      <Link to="ncgames" smooth={true} duration={500}>
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
</div>

{/* Project Card 2 */}
<div className="bg-[#2D3A3A] shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 rounded-none">
  {/* Image */}
  <div className="p-2">
    <img
      src={fanFinder}
              alt="Fan Finder"
      className="w-full h-48 object-cover border border-[#1E2929]"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-grow p-4">
    {/* Title */}
    <h3 className="text-2xl font-bold text-[#FCFFFC] tracking-wide mb-2">
    Fan Finder
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-sm mb-3">
    A social networking app for iOS and Android that uses
    location-based features, developed with React Native.
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        React Native
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Node.js
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        MongoDB
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Jest
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Express
      </span>
    </div>

    {/* Buttons */}
    <div className="mt-auto flex flex-row justify-center space-x-4">
      <a
        href="https://www.youtube.com/watch?v=N_lc2a5umbo&ab_channel=Northcoders"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Video Demo
        </button>
      </a>

      <Link to="fanfinder" smooth={true} duration={500}>
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
</div>

{/* Project Card 3 */}
<div className="bg-[#2D3A3A] shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 rounded-none">
  {/* Image */}
  <div className="p-2">
    <img
      src={weatherappimg}
              alt="Weather App"
      className="w-full h-48 object-cover border border-[#1E2929]"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-grow p-4">
    {/* Title */}
    <h3 className="text-2xl font-bold text-[#FCFFFC] tracking-wide mb-2">
    Weather App
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-sm mb-3">
    A web app built with React and Typescript to fetch and display
                weather data using the OpenWeather API.
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        React
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        TypeScript
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        TailwindCSS
      </span>
    </div>

    {/* Buttons */}
    <div className="mt-auto flex flex-row justify-center space-x-4">
      <a
        href="https://weather-app-virid-alpha.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Deployed App
        </button>
      </a>

      <Link to="weather" smooth={true} duration={500}>
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
</div>

{/* Project Card 4 */}
<div className="bg-[#2D3A3A] shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 rounded-none">
  {/* Image */}
  <div className="p-2">
    <img
      src={vocabGame}
              alt="Vocab Game"
      className="w-full h-48 object-cover border border-[#1E2929]"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-grow p-4">
    {/* Title */}
    <h3 className="text-2xl font-bold text-[#FCFFFC] tracking-wide mb-2">
    Vocabulary Learning Game
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-sm mb-3">
    A terminal-based educational tool designed to help users learn and retain new vocabulary using a spaced repetition algorithm.
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        Python
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        CSV
      </span>
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        JSON
      </span>
    </div>

    {/* Buttons */}
    <div className="mt-auto flex flex-row justify-center space-x-4">
      <a
        href="https://github.com/Oliver1334/Spaced_Repetition_Algorithm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Github Repo
        </button>
      </a>

      <Link to="vocabGame" smooth={true} duration={500}>
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
</div>

{/* Project Card 5 */}
<div className="relative bg-[#2D3A3A] shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 rounded-none">
  {/* Ribbon Banner */}
  <div className="absolute top-4 left-[-40px] rotate-[-45deg] bg-yellow-500 text-black text-xs font-bold shadow-lg flex items-center justify-center px-12 py-2"
     style={{ transform: 'translate(-5px, 10px) rotate(-45deg)' }}>
  In Development
</div>
  {/* Image */}
  <div className="p-2">
    <img
      src={morndulimg}
      alt="Vocabulary Learning Game"
      className="w-full h-48 object-cover border border-[#1E2929]"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-grow p-4">
    {/* Title */}
    <h3 className="text-2xl font-bold text-[#FCFFFC] tracking-wide mb-2">
      Text-based RPG
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-sm mb-3">
    A C# console app featuring turn-based combat, character progression and minimal ASCII art for a classic text-adventure experience.
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
        C#
      </span>
    </div>

    {/* Buttons */}
    <div className="mt-auto flex flex-row justify-center space-x-4">

      <Link to="textBased" smooth={true} duration={500}>
        <button
          className="text-sm font-medium text-[#FCFFFC] border-2 border-[#FCFFFC] px-4 py-2 rounded-none hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300"
        >
          Learn More
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
