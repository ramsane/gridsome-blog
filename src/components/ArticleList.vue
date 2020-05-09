<template>
        <div class="max-w-screen-xl mx-auto justify-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 duration-200">
          <app-article-card  v-for="(article, index) in articles" :key="article.id"
            :article="article.node"
             class="p-4 m-2 max-w-sm mx-auto opacity-0 animation-entranceFromBottom animation-500ms animation-fill-forwards"
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
      default: 1
    }
  },
  data() {
    return {
      baseDelay: 100 // in ms
    };
  },
  methods: {
    animationDelay(index) {
      // delay should start from
      return `${(index % this.perPage) * this.baseDelay}ms`;
      // return "100ms";
    }
  }
};
</script>