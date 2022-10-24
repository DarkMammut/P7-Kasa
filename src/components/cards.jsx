import '../styles/cards.css';

let rentals = require('../assets/rentals.json')


function Cards() {

    rentals.forEach(rent => {
        return (
            <div classname = "card">
                <image src={rent.cover} className="card-cover" alt={rent.title}></image>
                <span classname="card-title">{rent.title}</span>
            </div>
        );
    });
}

export default Cards