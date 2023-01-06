
export default class ServiceGood {
    constructor(serviceNetwork) {
        this.serviceNetwork = serviceNetwork
    }

    getGoodDetailed(id) {
        const endpoint = `/good/${id}`
        return this.serviceNetwork.get(endpoint)
    }
}