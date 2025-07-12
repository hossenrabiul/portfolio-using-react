import React from "react";
// import "../styles/Quality.css";
import img1 from '../assets/images/1.webp'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'

import bulb from '../assets/images/bulb.png'
const Quality = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center p-6 bg-white">
        <div className="w-32 h-32 mb-8 rounded-full relative">
            <img src={img1} alt="" />
            <img className="absolute w-[70px] h-[70px] bottom-7 left-7 text-bold text-2xl" src={bulb} alt="" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Pixel Perfect</h3>
        <p className="text-[#6f6b80] text-sm leading-7 max-w-xs">
          Most common methods for designing websites that work well on desktop is responsive and adaptive design.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center p-6 bg-white  ">
        <div className="w-32 h-32 mb-8 rounded-full relative">
            <img src={img2} alt="" />
            <img className="absolute w-[70px] h-[70px] bottom-7 left-7 text-bold text-2xl" src={bulb} alt="" />
        </div>
        <h3 className="text-xl font-semibold mb-2">High Quality</h3>
        <p className="text-[#6f6b80] text-sm leading-7 max-w-xs">
          Most common methods for designing websites that work well on desktop is responsive and adaptive design.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl ">
        <div className="w-32 h-32 mb-8 rounded-full relative">
            <img src={img3} alt="" />
            <img className="absolute w-[70px] h-[70px] bottom-7 left-7 text-bold text-2xl" src={bulb} alt="" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Awesome Idea</h3>
        <p className="text-[#6f6b80] text-sm leading-7 max-w-xs">
         Most common methods for designing websites that work well on desktop is responsive and adaptive design.
        </p>
      </div>
    </div>
  );
};

export default Quality;
