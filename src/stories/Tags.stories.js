import React from "react";
import Tags from "../components/Tags";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Kasa/Tags",
  component: Tags,
};

export const MyTags = () => (
  <MemoryRouter>
    <Tags tags={["C'est un test", "Un exemple"]} />
  </MemoryRouter>
);
