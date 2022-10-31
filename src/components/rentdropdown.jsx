import React from 'react'
import '../styles/rentdropdown.css';

function RentDropDowns({title, text}) {

    const [collapse, setCollapse] = React.useState(0);

    return (

            <div className ="RentDropDowns-Wrapper">
                <div className="RentDropDowns-Header">
                    <span className="RentDropDowns-Header-Title">{title}</span>
                    <svg 
                        className ="RentDropDowns-Header-Chevron" 
                        width="26.4" 
                        height="15.56" 
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
                {(Array.isArray(text)) ? (<ul className="RentDropDowns-Text">{text.map( equipment=> <li>{equipment}</li> )}</ul>): (<p className="RentDropDowns-Text" collapse={collapse}>{text}</p> )}
                
            </div>
    );
};

export default RentDropDowns