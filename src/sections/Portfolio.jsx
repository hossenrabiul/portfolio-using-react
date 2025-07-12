import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { BsBoxArrowUpRight } from "react-icons/bs";
import img1 from "../assets/images/Portfolio-img/portfolio-2.png";
import img2 from "../assets/images/Portfolio-img/portfolio-3.png";
const Portfolio = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#f75023] text-2xl font-semibold mb-3">Portfolio</p>
        <h3 className="jost-font font-extrabold text-4xl mb-4">
          My Amazing Projects
        </h3>
        <p className="text-[#6f6b80] text-base font-semibold text-center">
          Explore my journey through Projects, Certifications, and Technical
          expertise. Each section represents <br /> a milestone in my continous
          learning path
        </p>
      </div>

      <div className="flex gap-5 mt-10 justify-center items-center rounded-2xl ">
        <div className="p-6 rounded-2xl bg-[#000033]">
          <img className="w-full h-[220px] object-cover rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:brightness-110" src={img2} alt="" />
          <div className="mt-5 space-y-3">
            <h3 className="text-white text-2xl font-bold">
              OpenAI Interview Bot
            </h3>
            <p className="text-[#c0c0d1] text-sm leading-relaxed">
              An intelligent mock interview platform powered by OpenAI. <br />{" "}
              Engage in natural conversations without forms or clicks.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            >
              <BsBoxArrowUpRight className="text-lg" />
              Live Demo
            </a>
            <button className="flex items-center gap-2 border border-[#6f6b80] text-[#d1d1e0] hover:text-white hover:border-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200">
              <LuArrowRight className="text-lg" />
              View Details
            </button>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-[#000033]">
          <img className="w-full h-[220px] object-cover rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:brightness-110" src={img1} alt="" />
          <div className="mt-5 space-y-3">
            <h3 className="text-white text-2xl font-bold">
              OpenAI Interview Bot
            </h3>
            <p className="text-[#c0c0d1] text-sm leading-relaxed">
              An intelligent mock interview platform powered by OpenAI. <br />{" "}
              Engage in natural conversations without forms or clicks.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            >
              <BsBoxArrowUpRight className="text-lg" />
              Live Demo
            </a>
            <button className="flex items-center gap-2 border border-[#6f6b80] text-[#d1d1e0] hover:text-white hover:border-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200">
              <LuArrowRight className="text-lg" />
              View Details
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;
