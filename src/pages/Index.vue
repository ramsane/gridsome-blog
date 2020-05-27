<template>
  <Layout :home="true" class="bg-page">
    <!-- Intro section -->
  <div class="bg-dark lg:pb-32">
    <div class="space-y-2 md:flex flex-row-reverse mx-auto lg:max-w-screen-lg items-center" >
      <app-avatar class="w-full max-w-md mx-auto lg:max-w-lg animation-fadeIn-from-Right" />
      <app-typed-intro class="text-gray-300 text-center w-full max-w-md mx-auto h-16" />
    </div>
  </div>

    <!-- latest articles -->
    <div class="bg-content max-w-screen-xl mx-auto lg:-mt-24 rounded-t-md">
      <!-- title with below border -->
      <rs-title class="animation-delay-200ms">Latest Articles</rs-title>
      <!-- Article Card -->
      <article-list :articles="$page.articles.edges" :initial-delay="200"/>
      <!-- all articles link -->
      <div class="text-center my-4 text-xl font-novaround"
       v-if="$page.articles.totalCount>6">
        <g-link to="/articles"
         class="inline-block text-primary-500 transition-all duration-200
          p-2 m-3  active:text-primary-600 rounded-t-md
          border-primary-500 active:bg-gray-100 active:shadow-inner">
          see all articles
        </g-link>
      </div>
    </div>
    <!-- <pre class="block mt-64">
      {{$page.articles}}
    </pre> -->
  </Layout>
</template>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<script>
// typed intro
import TypedIntro from "~/components/TypedIntro.vue";
// import Avatar from "~/components/Avatar.vue";
import Avatar from "~/assets/svgs/newavatar.svg";

import ArticleCard from "~/components/ArticleCard.vue";
import ArticleList from "~/components/ArticleList.vue";

export default {
  components: {
    "app-typed-intro": TypedIntro,
    "app-avatar": Avatar,
    "app-article-card": ArticleCard,
    "article-list": ArticleList
  },
  metaInfo: {
    title: "Portfolio"
  }
};
</script>


<page-query>
query LatestArticles {
  articles: allArticle(limit: 6){
    totalCount
    edges{ node {
     id, category{title path} image(width: 800)
        title date (format: "D MMM Y") author{title path} excerpt tags {id title path} 
        path
    }}
  }
}
</page-query>