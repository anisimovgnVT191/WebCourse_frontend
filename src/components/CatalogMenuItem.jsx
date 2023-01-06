import React from 'react';
import {useNavigate} from "react-router-dom";

function CatalogMenuItem(props) {
    const navigate = useNavigate();

    return (
        <div className="category-menu-item" onClick={ () => navigate(`/catalog/${props.category.id}`, {replace: true}) }>
            <a className="category-menu-item-link"> { props.category.title }</a>
        </div>
    );
}

export default CatalogMenuItem;