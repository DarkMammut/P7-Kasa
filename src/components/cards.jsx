import '../styles/cards.css';

function Cards(props) {
    console.log(props.rent)
    return (
        <div className = "card">
            {/* <image src={props.cover} className="card-cover" alt={rent.title}></image> */}
            <span className="card-title">{props.rent.title}</span>
        </div>
    );
}

export default Cards