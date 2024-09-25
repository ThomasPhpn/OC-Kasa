import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Image from "../assets/banner-about.jpg";
import Dropdown from "../components/Dropdown";
import aboutUs from "../data/about.json";

function About() {
  return (
    <div>
      <Header />
      <Banner imageSrc={Image} />
      <div className="about-details mx-10 md:mx-20 lg:mx-48 flex flex-col gap-6 mb-8">
        {aboutUs.map((item, index) => (
          <Dropdown key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
