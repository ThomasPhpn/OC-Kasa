import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerImage from "../assets/banner-homepage.jpg";
import Card from "../components/Card";
import logementsData from "../data/logements.json";

function Home() {
  const [visibleLogements, setVisibleLogements] = useState(6);

  function handleButtonClick() {
    setVisibleLogements((prev) => prev + 6);
  }

  return (
    <div>
      <Header />
      <Banner imageSrc={bannerImage} text="Chez vous, partout et ailleurs !" />
      <div className="p-0 md:p-10 lg:p-10 mx-10 md:mx-20 lg:mx-36 mt-10 mb-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-transparent md:bg-custom-grey">
        {logementsData.slice(0, visibleLogements).map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
      {visibleLogements < logementsData.length && (
        <div onClick={handleButtonClick} className="flex justify-center mb-4">
          <button className="text-custom-red underline font-semibold p-2 text-sm">
            Afficher plus
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
