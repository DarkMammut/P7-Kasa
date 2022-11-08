import React from "react";
import "../styles/cards.css";

function Cards({ rent }) {
  let background = {
    backgroundImage: `url(${rent.cover})`,
  };

  let url = `/${rent.id}`;

  return (
    <a className="card" href={url}>
      <div className="card-cover" style={background}></div>
      <span className="card-title">{rent.title}</span>
    </a>
  );
}

export default Cards;
