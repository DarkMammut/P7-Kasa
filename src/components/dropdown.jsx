import '../styles/dropdown.css';

let dropdowns = require('../assets/about.json')


function DropDowns() {

    dropdowns.forEach(DropDown => {
        return (
            <div className = "dropdown">
                <div className = "dropdown-wraper">
                    <div className="dropdown-title">{DropDown.title}</div>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="dropdown-text">
                    <p>{DropDown.text}</p>
                </div>

            </div>
        );
    });
}

export default DropDowns