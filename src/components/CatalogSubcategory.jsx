import React from 'react';
import {useNavigate} from 'react-router-dom';

function CatalogSubcategory(props) {
    const navigate = useNavigate();

    return (
        <div className="catalog-subcategories-cell">
            <div onClick={() => navigate(`/catalog/${props.subcategory.id}`)}>
                <span className="catalog-subcategory-image-wrapper">
                    <img className="catalog-subcategory-image" src= { props.subcategory.imageUrl }/>
                </span>
            </div>
            <div className="catalog-subcategory-title"> { props.subcategory.title } </div>
        </div>
    );
}

export default CatalogSubcategory;