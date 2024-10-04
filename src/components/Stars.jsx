import React from "react";

function Stars({ rating }) {
  return (
    <div className="flex flex-row justify-end gap-2 mt-3">
      {Array(5)
        .fill(0)
        .map((_, index) =>
          index < rating ? (
            <i key={index} className="fas fa-star text-custom-red"></i>
          ) : (
            <i key={index} className="fas fa-star text-custom-star"></i>
          )
        )}
    </div>
  );
}

export default Stars;
