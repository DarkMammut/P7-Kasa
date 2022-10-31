import React from 'react'

import ImageSlider from '../../components/slider.jsx'
import Tags from '../../components/tags.jsx'
import RentDropDowns from '../../components/rentdropdown.jsx'
import Rating from '../../components/rating.jsx'
import Renter from '../../components/renter.jsx'

import '../../styles/rental.css'




const rentals = require('../../assets/rentals.json');

let url = window.location.pathname;
let idRent = url.replace('/','');

function Rental() {

    let rent = rentals.find(rent => rent.id === idRent);

    return(
        <main>
            <ImageSlider slides={rent.pictures}/>
            <h1 className="Rental-Title">{rent.title}</h1>
            <h2 className="Rental-Location">{rent.location}</h2>
            <Tags tags={rent.tags}/>
            <Rating rate={rent.rating}/>
            <div className="Rental-RentDropDowns">
                <RentDropDowns title="Description" text={rent.description}/>
                <RentDropDowns title="Équipements" text={rent.equipments}/>
            </div>

            <Renter host={rent.host}/>
        </main>
    );
};

export default Rental