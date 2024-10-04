import React from "react";
import Stars from "../components/Stars";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Kasa/Stars",
  component: Stars,
};

export const MyStars = () => (
  <MemoryRouter>
    <Stars rating={3} />
  </MemoryRouter>
);
