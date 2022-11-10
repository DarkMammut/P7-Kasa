import React from "react";
import "../styles/renter.css";

function Renter({ host }) {
  let background = {
    backgroundImage: `url(${host.picture})`,
  };

  const renterName = host.name
  const nameArray = renterName.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray[1];

  return (
    <div className="Renter">
      <div className="Renter-Name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <div className="Renter-Picture" style={background}></div>
    </div>
  );
}

export default Renter;
