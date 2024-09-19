import React from "react";
import Card from "../components/Card";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Kasa/Card",
  component: Card,
};

export const MyCard = () => (
  <MemoryRouter>
    <Card
      logement={{
        id: "1",
        cover:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        title: "Titre de logement exemple",
      }}
    />
  </MemoryRouter>
);
