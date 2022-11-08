import React from "react";
import "../../styles/index.css";
import Banner from "../../components/banner.jsx";
import Gallery from "../../components/gallery.jsx";

function Home() {
  return (
    <main>
      <Banner
        text="Chez vous, partout et ailleurs"
        backgroundUrl={"/Index_background.png"}
        mHeight="mobile-banner"
      />
      <Gallery />
    </main>
  );
}

export default Home;
