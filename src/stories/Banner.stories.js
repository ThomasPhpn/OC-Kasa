import React from "react";
import Banner from "../components/Banner";
import Image from "../assets/banner-homepage.jpg";

export default {
  title: "Kasa/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    text: { control: "text" },
  },
};

export const MyBanner = (args) => <Banner {...args} />;

MyBanner.args = {
  imageSrc: Image,
  text: "Chez vous, partout et ailleurs !",
};
