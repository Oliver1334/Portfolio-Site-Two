import React from "react";
import project1 from "../assets/projectPH1.png"
import project2 from "../assets/projectPH2.png"

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#410c0c]"
    >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">Work</p>
                <p className="py-6">// Check out some of my recent work</p>
            </div>

            <div style={{backgroundImage: `url(${project1})`}} className="grid sm:grid-cols-2 md-grid-cols-3 gap-4">
                <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/* hover effects */}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  );
};

export default Work;
