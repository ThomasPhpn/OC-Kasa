import React from "react";

const Banner = ({ imageSrc, text }) => {
  return (
    <div className="relative mx-10 md:mx-20 lg:mx-36 h-36 mt-6 mb-10">
      <img
        src={imageSrc}
        alt={text}
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-2xl">
        <h1 className="text-2xl font-bold px-3 text-white">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
