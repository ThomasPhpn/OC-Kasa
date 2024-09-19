import React, { useState } from "react";
import arrowL from "../assets/arrow-left.png";
import arrowR from "../assets/arrow-right.png";

function Gallery({ location }) {
  const slides = location.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-10 md:mx-20 lg:mx-36 h-[255px] md:h-[360px] lg:h-[415px] my-10 flex relative">
      <img
        alt={location.title}
        src={slides[currentIndex]}
        className="object-cover w-full rounded-3xl"
      />
      {slides.length > 1 && (
        <>
          <img
            src={arrowL}
            alt="fleche gauche"
            onClick={previousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
          <img
            src={arrowR}
            alt="fleche droite"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </>
      )}
    </div>
  );
}

export default Gallery;
