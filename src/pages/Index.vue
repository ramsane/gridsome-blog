<template>
  <Layout>
    <!-- Intro section -->
  <div class="bg-gray-900 text-white lg:pb-32">
    <div class="space-y-2 md:flex flex-row-reverse mx-auto lg:max-w-screen-lg items-center" >
      <app-avatar class="w-full max-w-md mx-auto lg:max-w-lg" />
      <app-typed-intro class="text-center w-full max-w-md mx-auto h-16" />
    </div>
  </div>

    <!-- latest articles -->
    <div class="bg-white max-w-screen-xl mx-auto lg:-mt-24 rounded-t-md shadow">
      <span class="font-novaflat text-2xl block text-center p-4 lg:border-b md:text-left">
        Latest Articles
      </span>
      <!-- Article Card -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <app-article-card  v-for="edge in $page.articles.edges" :key="edge.node.id"
         :article="edge.node" class="p-4 m-2 max-w-sm mx-auto" />
      </div>
      <!-- all articles link -->
      <div class="text-center my-4 text-xl font-novaround">
        <g-link to="/" class="text-primary-400 hover:text-primary-600 inline-block py-4 px-2">
          see all articles
        </g-link>
      </div>
    </div>
    <!-- <pre class="block mt-64">
      {{$page.articles}}
    </pre> -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<script>
// typed intro
import TypedIntro from "~/components/TypedIntro.vue";
import Avatar from "~/components/Avatar.vue";
import ArticleCard from "~/components/ArticleCard.vue";
export default {
  components: {
    "app-typed-intro": TypedIntro,
    "app-avatar": Avatar,
    "app-article-card": ArticleCard
  }
};
</script>


<page-query>
query LatestArticles {
  articles: allArticle(limit: 6){
    edges{ node {
      id, category{title path} image(width: 800)
      title date author{title path} excerpt tags {id title path} 
      path
    }}
  }
}
</page-query>