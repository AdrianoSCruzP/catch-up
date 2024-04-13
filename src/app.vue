<script>
import {NewsApiService} from "@/news/services/news-api.service.js";
import SideMenu from "@/news/components/side-menu.component.vue";
import ArticleList from "@/news/components/article-list.component.vue";
import UnavailableContent from "@/news/components/unavailable-content.component.vue";
import FooterContent from "@/public/components/footer-content.component.vue";
import {Article} from "@/news/model/article.entity.js";
export default {
    name: 'App',
    components: {ArticleList, FooterContent, UnavailableContent, SideMenu},
    data() {
        return {
            sidebarVisible: false,
            articles: [],
            errors: [],
            newsApi: new NewsApiService()
        }
    },
    created() {
        this.getArticlesForSource('bbc-news');
    },
    methods: {
        // Build article list from response data
        buildArticleListFromResponseData(articles) {
            return articles.map(article =>
                new Article(article.title, article.description, article.url, article.urlToImage, article.source));
        },
        // Fetch articles for selected Source
        getArticlesForSource(sourceId) {
            this.newsApi.getArticlesForSource(sourceId)
                .then(response => {
                    let articles = response.data.articles;
                    this.articles = this.buildArticleListFromResponseData(articles);
                    console.log(response.data.articles);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
        // Fetch articles for selected Source with Logo URL
        getArticlesForSourceWithLogo(source) {
            this.newsApi.getArticlesForSource(source.id)
                .then(response => {
                    let articles = response.data.articles;
                    this.articles = this.buildArticleListFromResponseData(articles);
                    this.articles.forEach(article => {
                        article.source.urlToLogo = source.urlToLogo;
                    });
                    console.log(response.data.articles);
                })
                .catch(e => this.errors.push(e));
        },
        // Toggle Sidebar
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        },
        // On Source Selected
        setSource(source) {
            this.getArticlesForSourceWithLogo(source);
            this.toggleSidebar();
        },
    }
}
</script>

<template>
    <div class="w-full">
        <div>
            <pv-menubar class="sticky bg-primary">
                <template #start>
                    <pv-button icon="pi pi-bars" label="CatchUp"
                               text @click="toggleSidebar"></pv-button>
                    <side-menu v-model:visible="sidebarVisible" v-on:sidebar-closed="toggleSidebar"
                               v-on:source-selected="setSource"></side-menu>
                </template>
            </pv-menubar>
        </div>
    </div>
    <div>
        <article-list v-if="!errors.length" :articles="articles"></article-list>
        <unavailable-content v-else :errors="errors"></unavailable-content>
    </div>
    <footer-content></footer-content>
</template>