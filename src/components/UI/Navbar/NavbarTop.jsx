import React from 'react';
import NavbarInfo from "./NavbarInfo";
import NavbarIcon from "./NavbarIcon";
import NavbarCart from "./NavbarCart";

function NavbarTop(props) {
    return (
        <div className="navbar-top">
            <NavbarInfo/>
            <NavbarIcon/>
            <NavbarCart price={props.cartGoodsPrice}/>
        </div>
    );
}

export default NavbarTop;