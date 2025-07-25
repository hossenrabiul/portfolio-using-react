import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { number } from "framer-motion";
const Contact = () => {
  const [showMsg, setShowMsg] = useState("");
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    number: "",
    subj: "",
    message: "",
  });
  const onHandleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata)
    try {
      const res = await axios.post("", formdata);
      setShowMsg("Your message has been sent successfully");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="text-center">
        <p className="font-semibold text-[#f75023] text-2xl mb-3">Contact Me</p>
        <h3 className="jost-font text-5xl font-extrabold mb-6">
          I want to hear from you
        </h3>
        <p className="font-semibold mb-4 text-[#6f6b80] text-base">
          Please fill out the section to contact with me. Or call between 9:00
          am to 6:pm, Monday through Friday
        </p>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start mt-20">
        <div>
          <div className="flex gap-5 items-center mb-3">
            <div className="w-24 h-24 rounded-full bg-[#f4bdb9] relative">
              <IoLocationSharp className="absolute top-8 left-8 font-extralight text-3xl" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">Address</h2>
              <p className="text-[#6f6b80] text-base font-semibold">
                20, somewhere in the world
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center mb-3">
            <div className="w-24 h-24 rounded-full bg-[#609779] relative">
              <CgMail className="absolute top-8 left-8 font-extralight text-3xl" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">Email</h2>
              <p className="text-[#6f6b80] text-base font-semibold">
                robiulhossen0081@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center mb-3">
            <div className="w-24 h-24 rounded-full bg-[#746dd7] relative">
              <FaPhoneAlt className="absolute top-8 left-8 font-extralight text-3xl" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">Phone</h2>
              <p className="text-[#6f6b80] text-base font-semibold">
                +01823780816
              </p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <input
                className="me-3 mb-4 border-1 border-[#809493] ps-6 py-4 rounded-2xl"
                type="text"
                placeholder="Your name"
                name="name"
                onChange={onHandleChange}
              />
              <input
                className="me-3 mb-4 border-1 border-[#809493] ps-6 py-4 rounded-2xl"
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                onChange={onHandleChange}
              />{" "}
              <br />
              <input
                className="me-3 mb-4 border-1 border-[#809493] ps-6 py-4 rounded-2xl"
                type="number"
                placeholder="Your phone"
                name="number"
                onChange={onHandleChange}
              />
              <input
                className="me-3 mb-4 border-1 border-[#809493] ps-6 py-4 rounded-2xl"
                type="text"
                name="subj"
                id=""
                placeholder="Your Subject"
                onChange={onHandleChange}
              />{" "}
              <br />
              <textarea
                className="me-3 border-1 border-[#809493] ps-6 py-4 rounded-2xl"
                name="message"
                id=""
                cols="45"
                rows="7"
                placeholder="Write your messages here"
                onChange={onHandleChange}
              ></textarea>
              <div className="mt-6">
                <button type="submit" className="bg-[#f75023] font-bold text-[#fff] hover:bg-transparent hover:text-[#000000] border-2 border-[#f75023] hover:duration-700 transition-colors px-12 py-4 rounded-full">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
