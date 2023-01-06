import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb(props) {
    return (
        <div className="breadcrumb-wrapper">
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link className="breadcrumb-link breadcrumb-item" to={props.breadcrumb.prevItem.link}> { props.breadcrumb.prevItem.title} </Link>
                </li>
                <li className="breadcrumb-separator"> / </li>
                <li className="breadcrumb-item">
                    <Link className="breadcrumb-link breadcrumb-item" to={props.breadcrumb.currentItem.link}> { props.breadcrumb.currentItem.title}</Link>
                </li>
            </ul>
        </div>
    );
}

export default Breadcrumb;