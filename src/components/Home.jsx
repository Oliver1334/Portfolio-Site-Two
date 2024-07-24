import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const shuffleArray = (array) => {
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;

  }
  return array;
};


export const Home = () => {

  const skills = [
    "JavaScript", "React JS", "PostgreSQL", "HTML", "CSS",
    "Tailwind CSS", "Node.js", "Jest", "RESTful API", "Git",
    "Express.js"
  ];

  // Shuffle the array of strings
  const shuffledSkills = shuffleArray([...skills]);

  return (
    <div name='home' className='w-full h-screen bg-[#040F0F]'>
        

  {/* container */}
  <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#FCFFFC]'></p>
    <h1 className=' my-2 text-4xl sm:text-7xl font-bold text-[#FCFFFC]'>Oliver Taylor</h1>
    <h2 className=' text-5xl sm:text-6xl font-bold text-[#2BA84A]'>Full Stack Software Developer.</h2>
    <ReactTyped
            className="mt-2 text-[#2BA84A] md:text-5xl sm:text-4xl text-xl font-bold"
            strings={shuffledSkills}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
            
    <p className='text-[#FCFFFC] py-4 max-w-[700px]'></p>
    <div>

    <Link to="projects" smooth={true} duration={500}>
    <button className='text-[#FCFFFC] group border-2  px-6 py-3 flex items-center hover:bg-[#2BA84A] hover:border-[#2BA84A]'>View Work 
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3' />
    </span>
    </button>
    </Link>
    


</div>
  </div>


    </div>
  )
}
