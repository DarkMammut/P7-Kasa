import React from 'react'
import '../../styles/about.css'
import Banner from '../../components/banner.jsx';
import DropDowns from '../../components/dropdown.jsx'

function About() {
    return (
        <main>
            <Banner backgroundUrl={"/About_background.png"}/>
            <DropDowns/>
        </main>);

}

export default About;