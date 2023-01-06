import React from 'react';
import CatalogMenu from "../components/CatalogMenu";
import PageList from "../components/UI/PageList/PageList";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";

function Payment(props) {
    let paymentPageInfo = {
        title: "Варианты оплаты", list: [
            "Наличными курьеру.",
            "Предоплата возможна на карту Сбербанка, Яндекс.деньги, Western Union, Unistream, Migom и пр. В случае предоплаты дождитесь письма с точной суммой и вариантами перевода."
        ]
    }

    let breadcrumb = {
        prevItem: { link: "/main", title: "Главная" },
        currentItem: { link: "/payment", title: "Варианты оплаты"}
    }

    return (
        <div className="main-content-wrapper wrapper">
            <div className="main-content-wrapper-row">
                <div className="left-side-bar-wrapper">
                    <CatalogMenu categories={props.catalogItems}/>
                </div>
                <div className="main-content-wrapper-right-side">
                    <Breadcrumb breadcrumb={breadcrumb}/>
                    <PageList pageItem={paymentPageInfo}/>
                </div>
            </div>
        </div>
    );
}

export default Payment;