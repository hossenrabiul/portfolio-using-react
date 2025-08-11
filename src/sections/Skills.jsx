import React from "react";
import { DiHtml5, DiDjango, DiReact } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMysql } from "react-icons/si";
import { FaTerminal } from "react-icons/fa"; // For Git Bash
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
const Skills = () => {
  const frontend = [
    { name: "HTML", icon: <DiHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <IoLogoCss3 className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "React", icon: <DiReact className="text-cyan-400 text-3xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-teal-400 text-3xl" />,
    },
  ];
  const backend = [
    { name: "Node.js", icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: "Express.js", icon: <DiDjango className="text-green-800 text-3xl" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700 text-3xl" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-[#00758F] text-3xl" /> },
  ];
  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
    {
      name: "Git Bash",
      icon: <FaTerminal className="text-gray-700 text-3xl" />,
    },
    {
      name: "VS Code",
      icon: <VscVscodeInsiders className="text-[#007ACC] text-3xl" />,
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-extrabold mb-12 jost-font">
        My Skills
      </h1>

      <div>
        <h3 className=" text-4xl font-extrabold jost-font mb-5 text-teal-400">
          Frontend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frontend.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {skill.icon}
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-15">
        <h3 className=" text-4xl font-extrabold jost-font mb-5 text-teal-400">
          Backend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {backend.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {skill.icon}
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-15">
        <h3 className=" text-4xl font-extrabold jost-font mb-5 text-teal-400">
          Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {skill.icon}
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-extrabold mt-16 text-center jost-font">
          Data Structures And Algorithms
        </h2>

        <div className="mt-15">
          <h1 className="text-teal-400 font-extrabold mb-5 text-4xl jost-font">Data Structures</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Array</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Linked Lists</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Trees</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Graphs</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Heaps</span>
            </div>
          
          </div>
        </div>
        <div className="mt-15">
          <h1 className="text-teal-400 font-extrabold mb-5 text-4xl jost-font">Algorithms</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Sorting</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Searching</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Graph</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Recursion</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Dynamic Prgraming</span>
            </div>
            <div className="bg-white p-4 text-lg font-semibold shadow-md rounded-2xl text-center">
              <span>Greedy</span>
            </div>

          </div>
        </div>
        <div className="mt-15">
          <h1 className="text-teal-400 font-extrabold mb-5 text-4xl jost-font">Platforms</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex  items-center gap-2 bg-white p-4 text-lg font-semibold shadow-md rounded-2xl">
              <SiLeetcode className="text-3xl"/>
              <a href="https://leetcode.com/u/robiulhossen/"><span>Leedcode</span></a>
              
            </div>
            <div className="flex items-center gap-2 bg-white p-4 text-lg font-semibold shadow-md rounded-2xl">
              <SiCodeforces className="text-3xl"/>
              <a href="https://codeforces.com/profile/im_rabiul"><span>Codeforces</span></a>
              
            </div>
            <div className="flex items-center gap-2 bg-white p-4 text-lg font-semibold shadow-md rounded-2xl">
              <SiCodechef className="text-3xl"/>
              <a href="https://www.codechef.com/users/robiulhossen"><span>CodeChef</span></a>
              
            </div>
           
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
