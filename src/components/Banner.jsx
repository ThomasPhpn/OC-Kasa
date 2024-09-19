import React from "react";
import PropTypes from "prop-types";

const Banner = ({ imageSrc, text }) => {
  return (
    <div className="relative mx-10 md:mx-20 lg:mx-36 h-36 my-10">
      <img
        src={imageSrc}
        alt={text}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
        <h1 className="text-2xl font-bold px-3 text-white">{text}</h1>
      </div>
    </div>
  );
};
Banner.displayName = "Banner";

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
