import React, { useState, useEffect, useRef, useCallback } from "react";
import fanfinder1 from "../assets/fanfinder1.png";
import fanfinder2 from "../assets/fanfinder2.png";
import fanfinder3 from "../assets/fanfinder3.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdSquare } from "react-icons/md";

export const FanFinder = () => {
  const slides = [
    { src: fanfinder1 },
    { src: fanfinder2 },
    { src: fanfinder3 },
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
    <div
      name="fanfinder"
      className="w-full  text-[#FCFFFC] bg-[#040F0F] pt-12"
    >
      <div  className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  pt-12">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232] ">
            Fan Finder
          </p>

          {/* body and img div */}
          <div className="flex flex-col md:flex-row md:items-center pb-4 pt-4 md:py-6 ">
            <div className="flex flex-col w-full md:w-1/2 ">
              <p className="md:pb-12 pb-4">
                Fan Finder is a mobile app created with React Native. It was
                designed to help music enthusiasts discover upcoming local gigs
                and connect with fellow fans through gig-specific forums or
                chat. Developed by a team of four, this project utilises the
                MERN stack and was completed as part of our final Northcoders
                bootcamp challenge, where we pitched, planned, built, and
                deployed the app in just under two weeks.
              </p>

              <footer>
                <ul className="flex flex-wrap gap-2 mb-4">
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    JavaScript
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    React Native
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    Node.js
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    MongoDB
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    Express.js
                  </li>
                  <li className="bg-[#248232] text-[#FCFFFC] text-xs font-medium px-3 py-1 rounded-full">
                    Jest
                  </li>
                </ul>
              </footer>
            </div>

            {/* image div */}
            <div className="md:max-w-[450px] lg:max-w-[550px] lg:h-[400px] md:h-[475px] h-[400px] w-full m-auto relative px-8 group pt-6  md:px-9 lg:pb-0 md:pb-12 ">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
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
              href="https://www.youtube.com/watch?v=N_lc2a5umbo&ab_channel=Northcoders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] duration-300 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  "
              >
                Video Demo
              </button>
            </a>
            <a
              href="https://github.com/Oliver1334/fan-finder-FE"
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
              href="https://github.com/Oliver1334/fan-finder-BE"
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
