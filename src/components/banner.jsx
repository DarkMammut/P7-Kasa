import React from "react";
import "../styles/banner.css";

function Banner({ text, backgroundUrl, mHeight }) {
  let backgroundAttr = {
    className: "kasa-banner-background",
    style: { backgroundImage: `url(${backgroundUrl})` },
  };

  let bannerAttr = {
    className: `kasa-banner ${mHeight}`,
    style: { backgroundImage: `url(${backgroundUrl})` },
  };

  return (
    <section {...bannerAttr}>
      {backgroundUrl && <div {...backgroundAttr} />}
      {text && <span className="kasa-banner-title">{text}</span>}
    </section>
  );
}

export default Banner;
