import React from "react";
import "../../styles/about.css";
import Banner from "../../components/banner.jsx";
import Collapse from "../../components/collapse.jsx";
import dropdowns from "../../assets/about.json";

function About() {
  return (
    <main>
      <Banner backgroundUrl={"/About_background.png"} mHeight="about-mobile-banner"/>
      {Object.entries(dropdowns).map(([key, value]) => (
        <Collapse key={key} title={value.title} text={value.text} />
      ))}
    </main>
  );
}

export default About;
