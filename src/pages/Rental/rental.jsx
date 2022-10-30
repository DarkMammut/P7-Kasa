import React from 'react'
import ImageSlider from '../../components/slider.jsx'
const rentals = require('../../assets/rentals.json')

let params = new URLSearchParams(window.location.pathname);
let idRent = params.get("id");

function Rental() {
    let rent = rentals.find(id => id === idRent);
    return(
        <main>
            <ImageSlider slides={rent.pictures}/>
        </main>
    )
}

export default Rental