import React from "react"; // Ensure React is imported
import Gallery from "../components/Gallery";
import { BrowserRouter } from "react-router-dom";
import locationExample from "../data/logements.json";

export default {
  title: "Kasa/Gallery",
  component: Gallery,
};

const location = locationExample[0];

export const DefaultGallery = () => (
  <BrowserRouter>
    <Gallery location={location} />
  </BrowserRouter>
);
