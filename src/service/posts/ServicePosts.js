
export default class ServicePosts {
    constructor(serviceNetwork) {
        this.serviceNetwork = serviceNetwork
    }

    getPosts() {
        let endpoint = "/blogs"

        return this.serviceNetwork.get(endpoint)
    }
}