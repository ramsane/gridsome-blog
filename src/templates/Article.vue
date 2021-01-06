<template>
  <Layout class="text-default bg-content">
    <!-- header with title, image and excerpt -->
    <ClientOnly>
      <read-progress
        class="w-full bg-transparent fixed z-50 top-0 left-0 h-1"
      />
    </ClientOnly>

    <!-- back -->
    <rs-back-button class="sticky top-0 z-10"></rs-back-button>

    <!-- title, excerpt and image -->
    <div class="p-4 font-roboto max-w-screen-xl mx-auto">
      <div class="lg:flex items-center lg:space-x-4">
        <!-- text  -->
        <div
          class="max-w-screen-md mx-auto lg:max-w-md lg:mr-4 animation-fadeIn-from-Bottom lg:animation-fadeIn-from-Left"
        >
          <!-- date - category -->
          <div class="text-sm font-roboto font-medium text-secondary">
            <span>{{ $page.article.date }}</span>
            <span class=" inline-block px-2">—</span>
            <g-link
              class="font-novaround text-primary-600 hover:text-red-700"
              :to="$page.article.category.path"
            >
              {{ $page.article.category.title }}
            </g-link>
          </div>
          <!-- title -->
          <div
            class="leading-tight font-novaflat text-3xl lg:text-4xl opacity-0 animation-fadeIn"
          >
            {{ $page.article.title }}
          </div>
          <!-- excerpt -->
          <div class="excerpt text-sm lg:text-base">
            {{ $page.article.excerpt }}
          </div>
        </div>

        <!-- image -->
        <div class="mx-auto lg:w-1/2">
          <g-image
            :src="$page.article.image"
            :alt="$page.article.title"
            class="rounded-md w-full h-full object-cover animation-fadeIn-from-Bottom lg:animation-fadeIn-from-Right"
          />
        </div>
      </div>
    </div>

    <!-- content -->
    <div
      class="p-4 mt-8 max-w-screen-xl mx-auto animation-fadeIn-from-Bottom lg:animation-fadeIn-from-Top"
    >
      <VueRemarkContent class="markdown" />
      <!-- tags -->
      <!-- TODO: use slots for this tags and use it in the markdown file -->
      <div class="mt-4 mt-8 max-w-screen-md mx-auto">
        <span v-for="tag in $page.article.tags" :key="tag.id" class="tag">
          <g-link
            :to="tag.path"
            class="inline-block px-2 text-primary-600 hover:text-primary-700"
            >#{{ tag.title }}</g-link
          >
          <!-- <span class="saperator text-gray-500">&#x25CF;</span> -->
        </span>
      </div>
    </div>
    <span class="block mt-16"></span>
  </Layout>
</template>

<style>
/* for markdown content */
@import url("../assets/markdown.css");
</style>

<script>
import mediumZoom from "medium-zoom";
import VueReadProgress from "~/components/VueReadProgress.vue";

export default {
  components: {
    "read-progress": VueReadProgress,
  },
  metaInfo() {
    return {
      title: this.$page.article.title,
      meta: [
        { key: "og:type", property: "og:type", content: "article" },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.article.title,
        },
        {
          key: "description",
          name: "description",
          content: this.$page.article.excerpt,
        },
        {
          property: "og:image",
          content: this.$page.article.image.src || "",
        },
        {
          name: "twitter:card",
          content: this.$page.article.image ? "summary_large_image" : "summary",
        },
        { key: "og:url", property: "og:url", content: this.postUrl },
        {
          key: "article:published_time",
          property: "article:published_time",
          content: this.$page.article.date,
        },
        {
          name: "twitter:creator",
          content: "@ramansane",
        },
      ],
    };
  },
  computed: {
    postUrl() {
      let siteUrl = this.$static.metadata.siteUrl;
      let postPath = this.$page.article.path;

      return postPath ? `${siteUrl}${postPath}` : `${siteUrl}`;
    },
  },
  mounted() {
    // when we revisit the page, we need to register it
    mediumZoom(".markdown img", { background: "#000000bb", margin: 48 });
  },
  updated() {
    // register everytime we refresh the page..
    mediumZoom(".markdown img", { background: "#000000bb", margin: 48 });
  },
};
</script>

<page-query>
query Article($id: ID!){
  article(id: $id){
    date (format: "D MMMM Y")
    category{ title, path} title excerpt image path
    author {title path}
    content
    tags { id title path}
    headings {
      depth
      value
      # anchor
    }
  }
}
</page-query>

<static-query>
    query {
        metadata {
            siteUrl
        }
    }
</static-query>
