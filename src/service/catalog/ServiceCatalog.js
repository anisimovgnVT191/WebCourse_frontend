import ServiceNetwork from "../ServiceNetwork";

export default class ServiceCatalog {
    constructor(serviceNetwork) {
        this.serviceNetwork = serviceNetwork
    }

    getCatalogItems() {
        const endpoint = "/catalog"
        return this.serviceNetwork.get(endpoint)
    }

    getCatalogGoods(id) {
        const endpoint = `/catalog/${id}`
        return this.serviceNetwork.get(endpoint)
    }
}