import React from "react";
import Dropdown from "../components/Dropdown";

export default {
  title: "Kasa/Dropdown",
  component: Dropdown,
};

export const MyDropdown = () => (
  <Dropdown title="Simple titre" content="Voici le contenu du Dropdown" />
);
