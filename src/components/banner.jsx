import React from 'react'
import '../styles/banner.css'

function Banner({text,backgroundUrl}) {
    return (
        <section className = "kasa-banner">
            {backgroundUrl && <div className="kasa-banner-background" style={{backgroundImage:`url(${backgroundUrl})`}}/>}
            {text  && <span className="kasa-banner-title">{text}</span> }
        </section>
    );
}

export default Banner