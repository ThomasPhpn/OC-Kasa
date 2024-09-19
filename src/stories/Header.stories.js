import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

export default {
  title: "Kasa/Header",
  component: Header,
};

export const MyHeader = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);
