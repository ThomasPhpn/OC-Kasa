import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import LogementDetails from "../components/LogementDetails";
import logementsData from "../data/logements.json";

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((l) => l.id === id);
  console.log(logement);

  return logement ? (
    <div>
      <Header />
      <Gallery location={logement} />
      <LogementDetails location={logement} />
    </div>
  ) : (
    <Navigate to="/notfound" />
  );
}

export default Logement;
