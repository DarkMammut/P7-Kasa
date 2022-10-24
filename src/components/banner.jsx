import background from '../assets/Background.png';
import '../styles/banner.css'

function Banner() {
    return (
        <div classname = "kasa-banner">
            <img src={background} className="kasa-banner-background" alt="kasa-banner" />
            <span className="kasa-banner-title">Chez vous, partout et ailleurs</span>
        </div>
    );
}

export default Banner