import React from 'react';
import {useNavigate} from "react-router-dom";

function GoodItem(props) {
    const navigate = useNavigate();

    return (
        <div className="catalog-subcategories-cell">
            <div className="good-item" onClick={() => navigate(`/good/${props.good.id}`)}>
                <div className="catalog-subcategory-image-wrapper">
                    <img className="catalog-subcategory-image" src={props.good.imageUrl}></img>
                </div>
                <div className="good-item-title"> {props.good.title}</div>
            </div>
        </div>
    );
}

export default GoodItem;