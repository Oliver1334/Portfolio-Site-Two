import React, { useState, useEffect, useRef, useCallback } from "react";
import ndgimg1 from "../assets/NDG1.png"
import ndgimg2 from "../assets/NDG2.png"
import ndgimg3 from "../assets/NDG3.png"
import ndgimg4 from "../assets/NDG4.png"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdSquare } from "react-icons/md";

export const Ncgames = () => {
  const slides = [
    { src: ndgimg1 },
    { src: ndgimg2 },
    { src: ndgimg3 },
    { src: ndgimg4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(slideIntervalRef.current);
  }, [nextSlide]);

  useEffect(() => {
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(slideIntervalRef.current);
  }, [currentIndex, nextSlide]);

  return (
    <div name="ncgames" className="w-full  text-[#FCFFFC] bg-[#040F0F] pt-12  ">
      <div
        
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full  pt-12"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232] ">
            No Dice Games
          </p>

          {/* body and img div */}
          <div className="flex flex-col md:flex-row md:items-center pb-4 pt-4 md:py-6 ">
            <div className="flex flex-col w-full md:w-1/2">
              <p className="pb-4">
                NDG is a board game review aggregation website that
                enables users to sign in, view, vote on, and comment on reviews,
                as well as post and delete their own comments. The reviews and
                user interactions are managed through my own backend and
                PostgreSQL database. This project was developed as part of the
                comprehensive Northcoders Full-Stack Software Developer
                Bootcamp, with the objective of seamlessly integrating my
                front-end and back-end skills into a cohesive application.
              </p>

              <footer>
                <ul className="flex flex-wrap gap-2 mb-4">
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    JavaScript
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    React
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    Node.js
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    PostgreSQL
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    Express.js
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    Jest
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    TailwindCSS
                  </li>
                </ul>
              </footer>
            </div>
            {/* image div */}
            <div className="md:max-w-[450px] lg:max-w-[550px] lg:h-[400px] md:h-[475px] h-[400px] w-full m-auto relative px-8 group pt-6  md:px-9 lg:pb-0 md:pb-12 ">
            <img 
  src={slides[currentIndex].src}
  alt="Project screenshot"
  className="w-full h-full rounded-2xl object-cover duration-500"
/>
              {/* left arrow */}
              <div className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-1000 absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* right arrow */}
              <div className="opacity-0 group-hover:opacity-100 translate-x-[10px] group-hover:translate-x-0 transition-all duration-1000 absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2 ">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl text-[#FCFFFC] cursor-pointer hover:text-[#2BA84A] hover:scale-125 duration-300 px-1"
                  >
                    <MdSquare />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row justify-center md:justify-start space-x-4 md:gap-6 lg:pt-8 md:pt-8 pt-12">
            <a
              href="https://nodicegames.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex"
              >
                Deployed App
              </button>
            </a>

            <a
              href="https://github.com/Oliver1334/nodicegames-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
              text-[#FCFFFC] group border-2 px-6 py-3 flex
              "
              >
                Frontend Repo
              </button>
            </a>

            <a
              href="https://github.com/Oliver1334/nodicegames-BE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
              text-[#FCFFFC] group border-2 px-6 py-3 flex
              "
              >
                Backend Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
