import axios from "axios";
import {LogoApiService} from "@/shared/services/logo-api.service.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class NewsApiService {
    apiKey = '0373a6eee3d24da39cd849499db85fb1';
    logoApi = new LogoApiService();

    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }

}