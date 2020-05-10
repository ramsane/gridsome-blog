<template>
  <Layout class="bg-gray-100">
    <div class="bg-white">
      <!-- back -->
      <rs-back-button></rs-back-button>
      <!-- heading -->
      <rs-title>{{ $page.tag.title }}</rs-title>
      <!-- Articles -->
    </div>
    <article-list :articles="loadedPosts" :per-page="pageInfo.perPage"/>
    <ClientOnly>
      <infinite-loading @infinite="infiniteHandler" 
      spinner="wavedots" :distance="100">
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
      return Math.min(this.pageInfo.totalPages + 1, 3);
    },
    articles() {
      return this.$page.tag.belongsTo.edges;
      return this.$page.tag.belongsTo.edges;
    },
    pageInfo() {
      return this.$page.tag.belongsTo.pageInfo;
      return this.$page.tag.belongsTo.pageInfo;
    }
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    };
  },
  created() {
    this.loadedPosts.push(...this.$page.tag.belongsTo.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.pageInfo.totalPages == 1) {
        // make the state loaded so that appopriate message will get displayed
        $state.loaded();
      }
      if (this.currentPage + 1 > this.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(
          `${this.$page.tag.path}${this.currentPage + 1}``${
            this.$page.tag.path
          }${this.currentPage + 1}`
        );

        if (data.tag.belongsTo.edges.length) {
          if (data.tag.belongsTo.edges.length) {
            this.currentPage = data.tag.belongsTo.pageInfo.currentPage;
            this.loadedPosts.push(...data.tag.belongsTo.edges);
            $state.loaded();
          } else {
            $state.complete();
          }
        }
      }
    }
  }
};
</script>

<page-query>
query($id: ID!, $page: Int){
  tag(id: $id){
    id title path
    belongsTo(perPage:6, page: $page) @paginate {
      pageInfo{
        currentPage totalPages totalItems perPage
      }
      edges{
        node{
          ... on Article{
            id, category{title path} image(width: 800)
        title date author{title path} excerpt tags {id title path} 
        path
          }
        }
      }
    }
  }
}

</page-query>
