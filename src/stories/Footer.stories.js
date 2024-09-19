import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

export default {
  title: "Kasa/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    bgColor: {
      control: { type: "select" },
      options: ["bg-black", "bg-white", "bg-custom-red", "bg-blue-500"],
    },
  },
};

export const MyFooter = (args) => (
  <BrowserRouter>
    <Footer {...args} />
  </BrowserRouter>
);

MyFooter.args = {
  bgColor: "bg-black",
};
