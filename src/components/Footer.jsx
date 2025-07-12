import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f2f5fb] mt-20">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between p-10 text-[#6f6b80]">
        <div>
          <p>Developed with loved by Rabiul @2025</p>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li>Terms & Condition</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
