import React from 'react';
import CatalogSubcategory from "./CatalogSubcategory";

function CatalogSubcategories({subcategories}) {
    return (
        <div className="catalog-subcategories">
            <div className="catalog-subcategories-row">
                {
                    subcategories.map((subcategory) =>
                        <CatalogSubcategory subcategory={subcategory} key={subcategory.id}/>
                    )
                }
            </div>
        </div>
    );
}

export default CatalogSubcategories;