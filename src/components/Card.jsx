import React from "react";

function handleCardClick(id) {
  window.location.href = `/logement/${id}`;
}

function Card({ logement }) {
  const cardId = logement.id;
  return (
    <div
      onClick={() => handleCardClick(cardId)}
      className="rounded-xl relative cursor-pointer max-w-[687px]"
    >
      <img
        src={logement.cover}
        alt={logement.title}
        className="rounded-lg object-cover min-h-[200px] h-full w-full"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent p-3 flex items-end">
        <h3 className="text-white text-sm font-semibold pb-3">
          {logement.title}
        </h3>
      </div>
    </div>
  );
}

export default Card;
