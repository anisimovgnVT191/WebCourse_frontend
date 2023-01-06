import CatalogMenu from "../components/CatalogMenu";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ServiceNetwork from "../service/ServiceNetwork";
import ServiceCatalog from "../service/catalog/ServiceCatalog";
import CatalogGoodList from "../components/CatalogGoodList";

function GoodsCatalog(props) {
    const [catalogGoods, setCatalogGoods] = useState([])
    const [catalogItems, setCatalogItems] = useState([])
    const [pageTitle, setPageTitle] = useState("")
    const {id} = useParams()
    let breadcrumb = {
        prevItem: { link: "/main", title: "Главная" },
        currentItem: { link: "", title: pageTitle }
    }

    const [fetchCatalogGoods] = useFetching(async () => {
            let serviceNetwork = new ServiceNetwork()
            let serviceCatalog = new ServiceCatalog(serviceNetwork)
            const catalogGoods = await serviceCatalog.getCatalogGoods(id)
            setCatalogGoods(catalogGoods.data.goods)
            setPageTitle(catalogGoods.data.title)
        }
    )
    const [fetchCatalogItems] = useFetching(async () => {
            let serviceNetwork = new ServiceNetwork()
            let serviceCatalog = new ServiceCatalog(serviceNetwork)
            const catalogItems = await serviceCatalog.getCatalogItems()
            setCatalogItems(catalogItems.data)
        }
    )

    useEffect( () => {
        fetchCatalogGoods()
    }, [id]
    )

    useEffect( () => {
        fetchCatalogItems()
    }, [id]
    )
    return (
        <div className="main-content-wrapper wrapper">
            <div className="main-content-wrapper-row">
                <div className="left-side-bar-wrapper">
                    <CatalogMenu categories={catalogItems}/>
                </div>
                <div className="main-content-wrapper-right-side">
                    <Breadcrumb breadcrumb={breadcrumb}/>
                    <div className="page-header">
                        <h1 className="page-header-text"> { pageTitle }</h1>
                    </div>
                    <CatalogGoodList goods={catalogGoods} />
                </div>
            </div>
        </div>
    );
}

export default GoodsCatalog;