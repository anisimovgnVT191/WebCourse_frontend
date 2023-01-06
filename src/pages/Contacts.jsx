import React from 'react';
import CatalogMenu from "../components/CatalogMenu";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";

function Contacts(props) {
    let breadcrumb = {
        prevItem: { link: "/main", title: "Главная" },
        currentItem: { link: "/contacts", title: "Контакты"}
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
                        <h1 className="page-header-text"> Контакты </h1>
                    </div>
                    <div className="page-list">
                        <p>
                            <a href="http://www.pustoshit.com"> www.pustoshit.com </a>
                        </p>
                        <p>
                            <a href="https://www.facebook.com/pustoshit"> https://www.facebook.com/pustoshit </a>
                        </p>
                        <p>
                            <a href="mailto:pustoshit@gmail.com">pustoshit@gmail.com</a>
                        </p>
                        <p>
                            +7 (916) 825 6419
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contacts;