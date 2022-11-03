import React from 'react';
import '../styles/gallery.css';
import Cards from '../components/cards.jsx';
import rentals from '../assets/rentals.json';

function Gallery() {
  return (
    <section className="cards-wrapper">
      {Object.entries(rentals).map(([key, value]) => (
        <Cards key={key} rent={value} />
      ))}
    </section>
  );
}

export default Gallery;
