function handleCardClick(id) {
  window.location.href = `/logement/${id}`;
}

function Card({ logement }) {
  const cardId = logement.id;
  return (
    <div onClick={() => handleCardClick(cardId)} 
    className="rounded-xl relative cursor-pointer">
      <img
        src={logement.cover}
        alt={logement.title}
        className="rounded-lg object-cover min-h-[200px]"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/4 md:h-1/3 rounded-b-lg flex justify-between items-center bg-custom-red">
        <h3 className="text-white text-sm font-semibold p-5 w-full">
          {logement.title}
        </h3>
      </div>
    </div>
  );
}

export default Card;
