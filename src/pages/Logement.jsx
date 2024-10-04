import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Dropdown from "../components/Dropdown";
import Tags from "../components/Tags";
import Stars from "../components/Stars";

import logementsData from "../data/logements.json";

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((l) => l.id === id);
  console.log(logement);

  return logement ? (
    <div>
      <Header />
      <Gallery location={logement} />

      <div className="locaation-details-container mx-10 md:mx-20 lg:mx-36 pb-10">
        <div className="title-tag-host-container flex flex-col md:flex-row lg:flex-row justify-start md:justify-between pb-3">
          <div className="title-tag-container flex flex-col gap-3">
            <h1 className="text-custom-red text-lg md:text-2xl lg:text-4xl">
              {logement.title}
            </h1>
            <p className="font-semibold text-sm md:text-lg">
              {logement.location}
            </p>
            <Tags tags={logement.tags} />
          </div>
          <div className="host-ratings-container flex flex-row-reverse md:flex-col lg:flex-col justify-between md:justify-center items-center">
            <div className="flex flex-row justify-start items-center gap-6">
              <p className="text-custom-red md:text-right font-semibold">
                {logement.host.name}
              </p>
              <img
                className="rounded-full w-[64px]"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
            <Stars rating={logement.rating} />
          </div>
        </div>
        <div className="dropdown-location w-full flex flex-col gap-4 mt-3 lg:flex-row">
          <Dropdown
            className="w-full"
            title="Description"
            content={logement.description}
          />
          <Dropdown
            className="w-full"
            title="Equipements"
            content={logement.equipments.map((equip, index) => (
              <p key={index}>- {equip}</p>
            ))}
          />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/notfound" />
  );
}

export default Logement;
