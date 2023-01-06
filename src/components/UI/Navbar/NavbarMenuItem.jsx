import React from 'react';
import {Link} from "react-router-dom";

function NavbarMenuItem(props) {
    return (
        <li className="navbar-menu-item" >
            <Link className="navbar-menu-item-ref" to={props.menuItem.destination}> { props.menuItem.title}</Link>
        </li>
    );
}

export default NavbarMenuItem;