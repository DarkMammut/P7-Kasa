import React from 'react'
import '../styles/gallery.css'
import Cards from '../components/cards.jsx'

let rentals = require('../assets/rentals.json')

function Gallery() {
    return (
        <section className = "cards-wrapper">
            {rentals.map(rent => <Cards rent={rent}/> )}
        </section>
    );
}

export default Gallery