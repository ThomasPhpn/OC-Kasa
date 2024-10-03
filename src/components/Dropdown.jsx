import React, { useState } from "react";
import fleche from "../assets/fleche-dropdown.png";

function Dropdown({ title, content, className }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`dropdown-item ${className}`}>
      <div className="title flex flex-row bg-custom-red justify-between items-center h-12 rounded-xl">
        <h3 className="ml-4 text-white font-semibold">{title}</h3>
        <img
          src={fleche}
          alt="fleche dropdown"
          className={`block mr-4 h-3 transition-transform origin-center duration-200 cursor-pointer ${
            isVisible ? "-rotate-180" : ""
          }`}
          onClick={handleClick}
        />
      </div>
      {isVisible && (
        <div className=" bg-custom-grey mb-4 p-4 text-sm text-justify">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
