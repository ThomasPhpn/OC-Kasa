import React from "react";
import LogementDetails from "../components/LogementDetails";
import { MemoryRouter } from "react-router-dom";
import locationExample from "../data/logements.json";

export default {
  title: "Kasa/LogementDetails",
  component: LogementDetails,
};

const locationData = locationExample[0];

export const DefaultLogementDetails = () => (
  <MemoryRouter>
    <LogementDetails location={locationData} />
  </MemoryRouter>
);
