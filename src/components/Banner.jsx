import React from "react";

function Banner({ imageSrc, text }) {
  return (
    <div className="relative mx-10 md:mx-20 lg:mx-36 h-36 my-10">
      <img
        src={imageSrc}
        alt={text}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
        <h1 className="text-white text-2xl font-bold px-3">{text}</h1>
      </div>
    </div>
  );
}

export default Banner;
