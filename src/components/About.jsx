import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#410c0c] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Oliver, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              voluptates sequi placeat ad pariatur nesciunt odit recusandae
              laudantium, excepturi aspernatur facilis corrupti doloribus neque,
              aperiam adipisci eum libero assumenda perspiciatis fugit rem odio
              esse praesentium. Harum earum similique cupiditate fuga?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
