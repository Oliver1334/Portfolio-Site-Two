import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";


export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#040F0F]'>
        

  {/* container */}
  <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#FCFFFC]'></p>
    <h1 className=' my-2 text-4xl sm:text-7xl font-bold text-[#FCFFFC]'>Oliver Taylor</h1>
    <h2 className=' text-5xl sm:text-6xl font-bold text-[#2BA84A]'>Full Stack Software Developer.</h2>
    <ReactTyped
            className="mt-2 text-[#2BA84A] md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["Javascript", "React JS", "SQL",  "HTML", "CSS", "TailwindCSS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
            
    <p className='text-[#FCFFFC] py-4 max-w-[700px]'></p>
    <div>

    <Link to="work" smooth={true} duration={500}>
    <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-[#2BA84A] hover:border-[#2BA84A]'>View Work 
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
