import React from "react";

function Tags({ tags }) {
  return (
    <ul className="flex flex-row gap-2">
      {tags.map((tag, index) => (
        <li
          key={index}
          className="bg-custom-red rounded-2xl text-white font-semibold px-4 py-1 text-[10px] md:text-xs lg:text-sm"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
