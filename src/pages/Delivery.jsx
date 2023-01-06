import React from 'react';
import CatalogMenu from "../components/CatalogMenu";
import PageList from "../components/UI/PageList/PageList";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";

function Delivery(props) {
    let deliveryPageInfo = {
        title: "Варианты доставки", list: [
            "Встреча по договоренности в Москве в пределах кольцевой линии метро – бесплатно.",
            "Курьерская доставка в Москве в пределах Садового кольца — 250 руб.",
            "Почтой России по предоплате (Сбербанк, Яндекс.деньги и др.) - от 200 руб."
        ]
    }

    let breadcrumb = {
        prevItem: { link: "/main", title: "Главная" },
        currentItem: { link: "/delivery", title: "Варианты доставки" }
    }
    return (
        <div className="main-content-wrapper wrapper">
            <div className="main-content-wrapper-row">
                <div className="left-side-bar-wrapper">
                    <CatalogMenu categories={props.catalogItems}/>
                </div>
                <div className="main-content-wrapper-right-side">
                    <Breadcrumb breadcrumb={breadcrumb}/>
                    <PageList pageItem={deliveryPageInfo}/>
                </div>
            </div>
        </div>
    );
}

export default Delivery;