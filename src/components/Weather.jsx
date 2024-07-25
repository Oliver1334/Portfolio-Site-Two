import React, { useState, useEffect, useRef, useCallback } from "react";
import ncgamesimg from "../assets/ncgames.png";
import realEstate from "../assets/realestate.jpg";
import workImg from "../assets/workImg.jpeg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdSquare } from "react-icons/md";

export const Weather = () => {
  const slides = [
    { src: ncgamesimg },
    { src: realEstate },
    { src: workImg },
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
          <div className="flex flex-col md:flex-row items-center md:items-center pb-4 pt-4">
            <p className="md:w-1/2 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, soluta officiis porro at, saepe incidunt possimus
              impedit consequatur delectus minus dolorem! Quia fugiat quidem ab
              sit ipsa at rerum, veritatis neque illo debitis, facilis
              necessitatibus blanditiis, placeat labore architecto consequuntur.
            </p>

            {/* image div */}
            <div className="max-w-[600px] h-[400px] w-full m-auto relative px-8 group pt-6">
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
          <div className="flex flex-row justify-center md:justify-start space-x-4 md:gap-6 pt-8">
            <button
              className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  "
            >
              Deployed App
            </button>
            <button
              className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  "
            >
              Frontend Repo
            </button>
            <button
              className="text-center mb-2 hover:bg-[#2BA84A] hover:border-[#2BA84A] 
                  text-[#FCFFFC] group border-2 px-6 py-3 flex
                  "
            >
              Backend Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
