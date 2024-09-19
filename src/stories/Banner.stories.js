import React from "react";
import Banner from "../components/Banner";
import Image from "../assets/banner-homepage.jpg";

export default {
  title: "Kasa/Banner",
  component: Banner,
};

export const MyBanner = () => (
  <Banner imageSrc={Image} text="Chez vous, partout et ailleurs !" />
);
