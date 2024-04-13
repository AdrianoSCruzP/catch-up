<script>
import ArticleCard from "../../news/components/article-card.component.vue";
export default {
    name: "article-list",
    components: {ArticleCard},
    props: {
        articles: Array
    }
}
</script>

<template>
    <div v-for="article in articles">
        <article-card :article="article"></article-card>
    </div>
</template>