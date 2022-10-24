import '../styles/dropdown.css';

let dropdowns = require('../assets/about.json')


function DropDowns() {

    dropdowns.forEach(DropDown => {
        return (
            <div classname = "dropdown">
                <div classname = "dropdown-wraper">
                    <div classname="dropdown-title">{DropDown.title}</div>
                    <i classname="fa-solid fa-chevron-down"></i>
                </div>
                <div classname="dropdown-text">
                    <p>{DropDown.text}</p>
                </div>

            </div>
        );
    });
}

export default DropDowns