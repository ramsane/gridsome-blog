<template>
  <Layout class="bg-gray-100">
    
    <div class="bg-white">
      <!-- heading -->
      <rs-title>Articles</rs-title>
    </div>
    <!-- Articles -->
    <article-list :articles="loadedPosts" :per-page="$page.articles.pageInfo.perPage"/>
    <ClientOnly>
				<infinite-loading @infinite="infiniteHandler" 
        spinner="wavedots" :distance="0">
					<div slot="no-more"
           class="text-sm text-gray-600 select-none my-10">
						that's all for now. : )
					</div>
					<div slot="no-results">
						Sorry, no posts yet :(
					</div>
          <div slot="error" slot-scope="{ trigger }">
            Error message, click <a href="javascript:;" @click="trigger">here</a> to retry
          </div>
				</infinite-loading>
			</ClientOnly>
     <!-- <div class="text-center mt-5 mb-10 text-sm text-gray-600">
       {{$page.articles.pageInfo.totalItems}} articles in total.
      </div> -->
     
  </Layout>
</template>

<script>
import ArticleList from "~/components/ArticleList.vue";

export default {
  components: {
    ArticleList
  },
  computed: {
    minPages() {
      return Math.min(this.$page.articles.pageInfo.totalPages + 1, 3);
    }
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    };
  },
  created() {
    this.loadedPosts.push(...this.$page.articles.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.$page.articles.pageInfo.totalPages == 1) {
        // make the state loaded so that appopriate message will get displayed
        $state.loaded();
      }
      if (this.currentPage + 1 > this.$page.articles.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/articles/${this.currentPage + 1}`);
        if (data.articles.edges.length) {
          this.currentPage = data.articles.pageInfo.currentPage;
          this.loadedPosts.push(...data.articles.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    }
  }
};
</script>
<page-query>
query Articles($page: Int){
  articles: allArticle(perPage:2, page: $page) @paginate {
    pageInfo{
    	currentPage totalPages totalItems perPage
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