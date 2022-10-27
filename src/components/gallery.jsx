import '../styles/gallery.css'
import Cards from '../components/cards.jsx'

let rentals = require('../assets/rentals.json')

function Gallery() {
    console.log(rentals)
    return (
        <div className = "cards-wrapper">
            {rentals.map(rent => <Cards rent={rent}/> )}
        </div>
    );
}

export default Gallery