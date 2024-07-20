import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#040F0F] text-[#FCFFFC]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#248232]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-7 px-5 divide-x-2 divide-[#248232]">
          <div className="sm:text-right text-4xl font-bold sm:pt-10">
            <p>Hi, I'm Oliver, nice to meet you. Take a look around.</p>
          </div>
          <div className="pl-6">
            <p className="pb-1">
              I am a creative, patient and resourceful individual striving to
              start a career in software development.
            </p>
            <p className="pb-1">
              I pick up new concepts quickly and relish in the discomfort that
              complex problems generate.
            </p>
            <p>
              Adopting a growth mindset encourages me to embrace blockages in my
              solutions as the most vital opportunities to learn and develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
