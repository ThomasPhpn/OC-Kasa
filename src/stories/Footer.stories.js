import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

export default {
  title: "Kasa/Footer",
  component: Footer,
};

// Story sans args
export const MyFooter = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);
