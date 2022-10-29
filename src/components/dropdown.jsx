import React from 'react'
import '../styles/dropdown.css';

let dropdowns = require('../assets/about.json')

function DropDowns() {

    const [collapse, setCollapse] = React.useState(0)

    return (

        dropdowns.map(dropdown =>
            <div className ="dropdowns-wrapper">
                <div className="dropdowns-header">
                    <span className="dropdowns-header-title">{dropdown.title}</span>
                    <svg 
                        className ="dropdowns-header-chevron" 
                        width="23.86" 
                        height="14.06" 
                        viewBox="0 0 24 15" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setCollapse(1)}
                        onAnimationEnd={() => setCollapse(0)}
                        collapse={collapse}
                    >
            <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
        </svg>
                </div>
                <p className="dropdowns-text" collapse={collapse}>{dropdown.text}</p> 
            </div>
        )
    );
};

export default DropDowns