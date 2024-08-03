import React, { useState, useEffect, useRef, useCallback } from "react";
import ncgamesimg from "../assets/ncgames.png";
import ncgamesimg1 from "../assets/ncgames1.png";
import ncgamesimg2 from "../assets/ncgames2.png";
import ncgamesimg3 from "../assets/ncgames3.png";
import ncgamesimg4 from "../assets/ncgames4.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdSquare } from "react-icons/md";

export const Ncgames = () => {
  const slides = [
    { src: ncgamesimg },
    { src: ncgamesimg1 },
    { src: ncgamesimg2 },
    { src: ncgamesimg3 },
    { src: ncgamesimg4 },
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
      name="ncgames"
      className="w-full md:h-screen text-[#FCFFFC] bg-[#040F0F] pt-12"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full pt-12">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232] ">
            NC Games
          </p>

          {/* body and img div */}
          <div className="flex flex-col md:flex-row md:items-center pb-4 pt-4 md:py-6 ">
            <div className="flex flex-col w-full md:w-1/2 ">
              <p className="pb-4">
                NC-Games is a board game review aggregation application that
                enables users to sign in, view, vote on, and comment on reviews,
                as well as post and delete their own comments. The reviews and
                user interactions are managed through my own backend and
                PostgreSQL database. This project was developed as part of the
                comprehensive Northcoders Full-Stack Software Developer
                Bootcamp, with the objective of seamlessly integrating my
                front-end and back-end skills into a cohesive application.
              </p>

              <p className="pb-2 font-bold inline  text-[#2BA84A] ">
                Technologies used:
              </p>

              <footer>
                <ul className="grid grid-cols-4 gap-2 lg:grid-cols-4 md:grid-cols-3">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>Express.js</li>
                  <li>Jest</li>
                  <li>CSS</li>
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
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
              href="https://nc-games1334.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  "
              >
                Deployed App
              </button>
            </a>

            <a
              href="https://github.com/Oliver1334/nc-games-feproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
              text-[#FCFFFC] group border-2 px-6 py-3 flex
              "
              >
                Frontend Repo
              </button>
            </a>

            <a
              href="https://github.com/Oliver1334/nc-games-beproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
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
