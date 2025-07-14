import React from "react";
import logo from "../assets/images/logo.webp";
const Navbar = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="navbar">
        <div className="navbar-start pt-6">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                  href=""
                >
                  Portfolio
                </a>
              </li>
              {/* <li>
                <a
                  className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                  href="#"
                >
                  Service
                </a>
              </li> */}
              {/* <li>
                <a
                  className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                  href="#"
                >
                  Blog
                </a>
              </li> */}
              <li>
                <button className="font-medium text-lg jost-font btn hover:bg-[#f75023] hover:text-white transition-colors duration-700 py-5 px-10 rounded-3xl ms-3 border-2 border-[#f75023] text-[#000000]">
                  <a
                    href="https://drive.google.com/file/d/1PwHafigni9yBd3gUP4f6DZ8bUvk_aN24/view?usp=drive_link
                 "
                  >
                    Download CV
                  </a>
                </button>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img className="max-w-[150px]" src={logo} alt="fjuf" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                href=""
              >
                Portfolio
              </a>
            </li>
            {/* <li>
              <a
                className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                href="#"
              >
                Service
              </a>
            </li> */}
            {/* <li>
              <a
                className="font-medium text-lg jost-font ease-in-out duration-300 text-[#000000] hover:text-[#f75023]"
                href="#"
              >
                Blog
              </a>
            </li> */}
            <li>
              <button className="font-medium text-lg jost-font btn hover:bg-[#f75023] hover:text-white transition-colors duration-700 py-5 px-10 rounded-3xl ms-3 border-2 border-[#f75023] text-[#000000]">
                <a
                  href="https://drive.google.com/file/d/1PwHafigni9yBd3gUP4f6DZ8bUvk_aN24/view?usp=drive_link
                 "
                >
                  Download CV
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
