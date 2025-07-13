import React from "react";
import img from "../assets/images/Portfolio-img/profile.jpg";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrPowerForceShutdown } from "react-icons/gr";
// import '../styles/Header.css'
const Header = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="grid lg:grid-cols-2 ms-35 lg:ms-0 gap-6">
        <div className="content-container mt-8">
          <h3 className="text-[#f75023] font-semibold text-lg mb-3 tracking-wider">
            Hello, I'm
          </h3>
          <h1 className="text-[#000000] text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Rabiul Hosen
          </h1>
          <p className="font-medium text-2xl  mb-6">
            A <span className="text-[#1cbe59]">Creative Software Developer</span> From{" "}
            <span className="text-[#8067f0]">Bangladesh</span>
          </p>
          <p className="text-[#6f6b80] font-medium text-base md:text-lg leading-relaxed">
            I'm a creative designer based in New York, and I'm very passionate
            and dedicated to my work.
          </p>
          <div className="flex items-center gap-10 mt-10">
            <div>
              <button className="bg-[#f75023] font-bold text-[#fff] hover:bg-transparent hover:text-[#000000] border-2 border-[#f75023] hover:duration-700 transition-colors  px-12 py-4 rounded-full">
                About Me
              </button>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <a href="https://web.facebook.com/robiul.hossen.457326/">
                <FaFacebookF className="text-[#363636] text-[19px]" />
                </a>
                
              </div>
              <div>
                <a href="https://github.com/hossenrabiul">
                <FaGithub className="text-[#363636] text-[19px]" />
                </a>
                
              </div>
              <div>
                <a href="https://www.linkedin.com/in/rabiul-hossen-8249b5297/">
                <FaLinkedinIn className="text-[#363636] text-[19px]" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div className="img-container">
          <div className="w-[400px] h-[400px] rounded-full bg-[#e3e8e4]">
            <img className="max-w-[400px]" src={img} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10" >
        
        <GrPowerForceShutdown className="text-4xl"/>
      </div>
    </div>
  );
};

export default Header;
