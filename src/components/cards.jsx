import React from 'react'
import '../styles/cards.css';

function Cards(props) {

    let background = {
        backgroundImage: `url(${props.rent.cover})`
    };

    let url = `/?id=${props.rent.id}`
    
    return (
        <a className = "card" href={url}>
            <div className="card-cover" style={background}></div>
            <span className="card-title">{props.rent.title}</span>
        </a>
    );
}

export default Cards