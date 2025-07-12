import React from "react";
import img from "../assets/images/1 (1).webp";
const About = () => {
  return (
    <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 gap-5 items-center max-w-[1000px] mx-auto">
      <div>
        <img className="w-[400px] h-[400px]" src={img} alt="" />
      </div>
      <div>
        <p className="text-[#f75023] font-semibold mb-3 text-lg jost-font">
          I, Am a Software Developer
        </p>
        <h3 className="text-[#000000] font-extrabold text-4xl jost-font ">
          I Can Develop Anything You Want
        </h3>
        <p className="text-[#6f6b80] text-base font-semibold mt-4 max-w[490px] leading-7">
          Hello there! I'm a Software Developer, I Am very passionate and
          dedicated to my work. With 2 Years of experience as a professional
          Software Developer, I have aquired the skills and Knowledge neccessary
          to turn your idea into real world product.I enjoy the every step in
          this journey.
        </p>
        <div className="mt-10">
          <button className="bg-[#f75023] font-bold text-[#fff] hover:bg-transparent hover:text-[#000000] border-2 border-[#f75023] hover:duration-700 transition-colors px-12 py-4 rounded-full">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
