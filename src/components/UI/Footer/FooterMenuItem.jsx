import React from 'react';
import {Link} from "react-router-dom";

function FooterMenuItem(props) {
    return (
        <li className="footer-menu-item">
            <Link className="footer-menu-item-link" to={props.item.link}> { props.item.title } </Link>
        </li>
    );
}

export default FooterMenuItem;