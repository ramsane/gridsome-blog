<template>
  <Layout>
  <!-- heading -->
    <rs-title>Articles</rs-title>

    <!-- Articles -->
    <article-list :articles="$page.articles.edges" />
    <Pager :info="$page.articles.pageInfo"
    linkClass="link" activeLinkClass="currentPage"
     class="pager mt-10 flex items-center justify-center space-x-2 h-12"
     :range="minPages"  
     :showNavigation="$page.articles.pageInfo.totalPages>3"
     ariaNextLabel="next"/>
     <div class="text-center mt-5 mb-10 text-sm text-gray-600">
       {{$page.articles.pageInfo.totalItems}} articles in total.
      </div>
     
  </Layout>
</template>

<script>
import ArticleList from "~/components/ArticleList.vue";
import { Pager } from "gridsome";

export default {
  components: {
    ArticleList,
    Pager
  },
  computed: {
    minPages() {
      return Math.min(this.$page.articles.pageInfo.totalPages + 1, 3);
    }
  }
};
</script>

<style>
.pager {
  & .link {
    @apply text-lg shadow-md  px-4 py-2 text-center rounded-t-md rounded-b-md transition-all duration-200;
  }
  & .link:hover:not(.currentPage) {
    @apply bg-gray-100;
  }
  & .link:active:not(.currentPage) {
    @apply bg-gray-200 shadow-inner;
  }

  & .link.currentPage {
    @apply border-b-4 border-primary-400;
  }

  /* & :hover:not(.active) {
      background-color: var(--bg-content-color);
      border-radius: 5px;
      color: var(--link-color);
    } */
}
</style>

<page-query>
query Articles($page: Int){
  articles: allArticle(perPage:3, page: $page) @paginate {
    pageInfo{
    	currentPage totalPages totalItems
    }
    edges {
      node {
      id, category{title path} image(width: 800)
      title date author{title path} excerpt tags {id title path} 
      path
    }
    }
  }
}
</page-query>