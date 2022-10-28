import React from 'react'
import '../styles/cards.css';

function Cards(props) {
    console.log(props.rent)

    let background = {
        backgroundimage: `url(${props.rent.cover})`
    };
    
    return (
        <div id={props.rent.id} className = "card">
            <div className="card-cover" style={background}></div>
            <span className="card-title">{props.rent.title}</span>
        </div>
    );
}

export default Cards