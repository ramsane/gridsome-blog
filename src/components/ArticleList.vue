<template>
        <div class="max-w-screen-xl mx-auto justify-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 duration-200 mt-2">
          <app-article-card  v-for="(article, index) in articles" :key="article.id"
            :article="article.node"
             class="bg-white p-4 m-2 max-w-sm mx-auto opacity-0 animation-fadeIn-from-Bottom"
             :style="{'animation-delay': animationDelay(index)}"/>
      </div>
</template>
<script>
import ArticleCard from "~/components/ArticleCard.vue";

export default {
  components: {
    "app-article-card": ArticleCard
  },
  props: {
    articles: Array,
    perPage: {
      type: Number,
      default: 6
    },
    baseDelay: {
      type: Number,
      default: 70
    },
    initialDelay: {
      type: Number,
      default: 100
    }
  },
  methods: {
    animationDelay(index) {
      // delay should start from
      return `${this.initialDelay + (index % this.perPage) * this.baseDelay}ms`;
      // return "100ms";
    }
  }
};
</script>