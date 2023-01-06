import React from "react";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import ServiceNetwork from "../service/ServiceNetwork";
import ServiceGood from "../service/good/ServiceGood";
import {useParams} from "react-router-dom";
import ServiceCatalog from "../service/catalog/ServiceCatalog";
import CatalogMenu from "./CatalogMenu";
import Breadcrumb from "./UI/Breadcrumb/Breadcrumb";
import GoodDetailedInfo from "./GoodDetailedInfo";

function GoodDetailed() {
    const [catalogItems, setCatalogItems] = useState([])
    const [goodDetailed, setGoodDetailed] = useState(null)
    const [pageTitle, setPageTitle] = useState("")
    const [pageLink, setPageLink] = useState("")
    const [goodTitle, setGoodTitle] = useState("")
    const {id} = useParams()
    let breadcrumb = {
        prevItem: { link: "/main", title: "Главная" },
        currentItem: { link: `/catalog/${pageLink}`, title: pageTitle}
    }

    const [fetchGoodDetailed] = useFetching(async () => {
        let serviceNetwork = new ServiceNetwork()
        let serviceGood = new ServiceGood(serviceNetwork)
        const goodDetailed = await serviceGood.getGoodDetailed(id)
        setGoodDetailed(goodDetailed.data.good)
        setPageTitle(goodDetailed.data.catalogItem.title)
        setPageLink(goodDetailed.data.catalogItem.id)
        setGoodTitle(goodDetailed.data.good.title)
    })
    const [fetchCatalogItems] = useFetching(async () => {
        let serviceNetwork = new ServiceNetwork()
        let serviceCatalog = new ServiceCatalog(serviceNetwork)
        const catalogItems = await serviceCatalog.getCatalogItems()
        setCatalogItems(catalogItems.data)
    })

    useEffect(() => {
        fetchCatalogItems()
    }, [id])
    useEffect(() => {
        fetchGoodDetailed()
    }, [id])

    return (
        <div className="main-content-wrapper">
            <div className="main-content-wrapper-row">
                <div className="left-side-bar-wrapper">
                    <CatalogMenu categories={catalogItems} />
                </div>
                <div className="main-content-wrapper-right-side">
                    <Breadcrumb breadcrumb={breadcrumb}/>
                    <div className="page-header">
                        <h1 className="page-header-text"> { goodTitle } </h1>
                    </div>
                    {goodDetailed != null ? <GoodDetailedInfo good={goodDetailed} /> : <div/>}
                </div>
            </div>

        </div>
    )
}

export default GoodDetailed;