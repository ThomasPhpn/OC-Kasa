import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import LogementDetails from "../components/LogementDetails";
import Footer from "../components/Footer";
import logementsData from "../data/logements.json";

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((l) => l.id === id);

  return (
    <div>
      <Header />
      <Gallery location={logement} />
      <LogementDetails location={logement} />
      <Footer />
    </div>
  );
}

export default Logement;
