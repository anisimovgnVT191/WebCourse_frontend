import GoodItem from "./GoodItem";
import CatalogMenuItem from "./CatalogMenuItem";
import React from "react";

function CatalogGoodList({goods}) {
    return (
        <div>
            <div className="catalog-subcategories-row">
                {
                    goods.map((good) =>
                        <GoodItem good={good}/>
                    )
                }
            </div>
        </div>
    );

}

export default CatalogGoodList;