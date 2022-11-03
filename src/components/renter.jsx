import React from 'react';
import '../styles/renter.css';

function Renter({ host }) {
  let background = {
    backgroundImage: `url(${host.picture})`,
  };

  return (
    <div className="Renter">
      <span className="Renter-Name">{host.name}</span>
      <div className="Renter-Picture" style={background}></div>
    </div>
  );
}

export default Renter;
