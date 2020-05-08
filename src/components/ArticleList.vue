<template>
        <div class="max-w-screen-xl mx-auto justify-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <app-article-card  v-for="article in articles" :key="article.id"
         :article="article.node" class="p-4 m-2 max-w-sm mx-auto" />
      </div>
</template>
<script>
import ArticleCard from "~/components/ArticleCard.vue";

export default {
  components: {
    "app-article-card": ArticleCard
  },
  props: ["articles"]
};
</script>