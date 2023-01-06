import React from 'react';
import CatalogMenuItem from "./CatalogMenuItem";

function CatalogMenu({categories}) {
    return (
        <div>
            <div className="category-menu-heading"> Категории </div>
            <div className="category-menu-list">
                {
                    categories.map((category) =>
                        <CatalogMenuItem category={category} key={category.id}/>
                    )
                }
            </div>
        </div>
    );
}

export default CatalogMenu;