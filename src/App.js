import React, {useEffect, useState} from "react";
import "./styles/App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Navbar from "./components/UI/Navbar/Navbar";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Payment from "./pages/Payment";
import Footer from "./components/UI/Footer/Footer";
import {useFetching} from "./hooks/useFetching";
import ServiceCatalog from "./service/catalog/ServiceCatalog";
import ServiceNetwork from "./service/ServiceNetwork";
import GoodsCatalog from "./pages/GoodsCatalog";
import GoodDetailed from "./components/GoodDetailed";

function App() {
    const [catalogItems, setCatalogItems] = useState([])
    const [fetchCatalogItems] = useFetching(async () => {
        let serviceNetwork = new ServiceNetwork()
        let serviceCatalog = new ServiceCatalog(serviceNetwork)
        const catalogItems = await serviceCatalog.getCatalogItems()
        setCatalogItems(catalogItems.data)
        }
    )

    useEffect( () => {
            fetchCatalogItems()
        }, []
    )

  return (
    <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/catalog" element={ <Catalog catalogItems={catalogItems}/> }/>
                <Route path="/catalog/:id" element={ <GoodsCatalog catalogItems={catalogItems}/> }/>
                <Route path="/contacts" element={ <Contacts catalogItems={catalogItems}/> }/>
                <Route path="/delivery" element={ <Delivery catalogItems={catalogItems}/> }/>
                <Route path="/payment" element={ <Payment catalogItems={catalogItems}/>}/>
                <Route path="/main" element={ <Main catalogItems={catalogItems}/> }/>
                <Route path="/good/:id" element={<GoodDetailed /> }/>
            </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
