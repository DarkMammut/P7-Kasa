import background from '../assets/Background.png';
import '../styles/Banner.css'

function Banner() {
    return (
        <div classname = "banner">
            <img src={background} className="kasa-banner" alt="kasa-banner" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
}

export default Banner