import React from "react";

export const FormImage = () => {
  return (
    <div className="">
      <div className="md:w-72 md:h-72 w-28 h-28 rounded-full bg-blue-500 absolute left-4 hidden md:block md:left-[55%] md:right-[31%] z-0 md:top-24 "></div>
      <div className=" z-10 relative md:top-24 top-4  md:right-6">
        <div className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-orange-400 absolute hidden md:block  -z-10 left-[60%] top-[87%]"></div>
        <div className="md:w-24 md:h-24 md:block hidden w-16 h-16 rounded-full bg-green-400 absolute  z-0 left-[66%]  top-[92%]"></div>
        <img
          src="./images/Mockup.png"
          alt="dashboard image"
          className="z-10 hidden md:block"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
