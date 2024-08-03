import React, { useState, useEffect, useRef, useCallback } from "react";
import weatherappimg1 from "../assets/weatherapp2.png";
import weatherappimg2 from "../assets/weatherapp3.png";
import weatherappimg3 from "../assets/weatherapp4.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdSquare } from "react-icons/md";

export const Weather = () => {
  const slides = [
    { src: weatherappimg1 },
    { src: weatherappimg2 },
    { src: weatherappimg3 },
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
      name="weather"
      className="w-full md:h-screen text-[#FCFFFC] bg-[#040F0F] pt-12"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-12">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#FCFFFC] border-[#248232] ">
            Weather App
          </p>

          {/* body and img div */}
          <div className="flex flex-col md:flex-row md:items-center pb-4 pt-4 md:py-6 ">
            <div className="flex flex-col w-full md:w-1/2">
              <p className="md:pb-12 pb-4">
                This Weather Forecast Application provides real-time weather
                data, including current temperature, humidity, wind speed, and
                forecasts for various locations. It features a responsive design
                with a modern interface, including search functionality for
                users to find weather information by city.
              </p>

              <p className="pb-2 font-bold inline  text-[#2BA84A]">Technologies used:</p>
              <footer>
              <ul className="grid grid-cols-4 gap-2 lg:grid-cols-3 md:grid-cols-3">
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>TailwindCSS</li>
                <li>OpenWeatherAPI</li>
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
              href="https://weather-app-virid-alpha.vercel.app/"
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
              href="https://github.com/Oliver1334/WeatherApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  "
              >
                Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
