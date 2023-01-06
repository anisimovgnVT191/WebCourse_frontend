import React from 'react';
import "../../../styles/App.css"
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

function Navbar(props) {
    return (
        <div className="navbar">
            <NavbarTop cartGoodsPrice={props.price}/>
            <NavbarBottom/>
        </div>
    );
}

export default Navbar;