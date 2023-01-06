import React from 'react';
import CatalogMenu from "../components/CatalogMenu";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";
import PageList from "../components/UI/PageList/PageList";
import CatalogSubcategories from "../components/CatalogSubcategories";

function Catalog(props) {
    let breadcrumb = {
        prevItem: { link: "/main", title: "Главная" },
        currentItem: { link: "/catalog", title: "Каталог" }
    }
    return (
        <div className="main-content-wrapper wrapper">
            <div className="main-content-wrapper-row">
                <div className="left-side-bar-wrapper">
                    <CatalogMenu categories={props.catalogItems}/>
                </div>
                <div className="main-content-wrapper-right-side">
                    <Breadcrumb breadcrumb={breadcrumb}/>
                    <div className="page-header">
                        <h1 className="page-header-text"> Каталог  </h1>
                    </div>
                    <CatalogSubcategories subcategories={props.catalogItems}/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;