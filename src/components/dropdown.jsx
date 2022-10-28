import React from 'react'
import '../styles/dropdown.css';

let dropdowns = require('../assets/about.json')


function DropDowns() {

    return (

        dropdowns.map(dropdown =>
            <div className ="dropdowns-wrapper">
                <div className="dropdowns-header">
                    <span className="dropdowns-header-title">{dropdown.title}</span>
                    <img className="dropdowns-header-chevron" src='../assets/Arrow_dropdown.png' alt="chevron-up"/>
                </div>
                <p clasName="dropdowns-text">{dropdown.text}</p> 
            </div>
        )


    );
};

export default DropDowns