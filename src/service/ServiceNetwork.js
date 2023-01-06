import axios from "axios";
import * as AxiosLogger from 'axios-logger';

export default class ServiceNetwork {
    static baseEndpoint = "http://0.0.0.0:8080";

    constructor() {
        this.client = axios.create()
        this.client.interceptors.request.use(AxiosLogger.requestLogger);
        this.client.interceptors.response.use(AxiosLogger.responseLogger);
        this.client.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
        this.client.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
    }

    get(endpoint, params) {
        if (params != null) {
            return axios.get(ServiceNetwork.baseEndpoint + endpoint, params)
        } else {
            return axios.get(ServiceNetwork.baseEndpoint + endpoint)
        }
    }

    post(endpoint, params) {
        if (params != null) {
            return axios.post(endpoint, params)
        } else {
            return axios.post(endpoint)
        }
    }
}