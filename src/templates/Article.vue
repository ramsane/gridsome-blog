<<template>
  <Layout>
    <!-- header with title, image and excerpt -->
    <div class="p-4 font-roboto max-w-screen-xl mx-auto">
      <!-- back -->
      <div class="my-2 tracking-widest text-gray-500 font-medium">
        ◀ Back
      </div>
      
      <div class="lg:flex items-center lg:space-x-4">
        <!-- text  -->
        <div class="max-w-screen-md mx-auto lg:max-w-md lg:mr-4">
          <!-- date - category -->
          <div class='text-sm font-roboto font-medium text-gray-700'>
            <span>{{$formatDate($page.article.date)}}</span>
            <span class=" inline-block px-2">—</span>
            <g-link class="font-novaround text-primary-400 hover:text-primary-500">
              {{$page.article.category.title}}
            </g-link>
          </div>
          <!-- title -->
          <div class="leading-tight font-novaflat text-3xl text-gray-900 lg:text-4xl">
            {{ $page.article.title }}
          </div>
          <!-- excerpt -->
          <div class="excerpt text-sm lg:text-base">{{$page.article.excerpt}}</div>
        </div>
        <!-- image -->
        <div class="mx-auto lg:w-1/2">
          <g-image :src="$page.article.image" 
          class="rounded-md w-full h-full object-cover" />        
        </div>
      </div>

    </div>
    <!-- content -->
    
    <div class="p-4 mt-8 max-w-screen-xl mx-auto">
      <VueRemarkContent  class="markdown"/>
      <!-- tags -->
      <!-- TODO: use slots for this tags and use it in the markdown file -->
      <div class="mt-4 text-gray-700 mt-8 max-w-screen-md mx-auto">
        <span v-for="tag in $page.article.tags" :key="tag.id" class="tag">
          <g-link :to="tag.path" class="inline-block px-2 text-primary-400 hover:text-primary-600">{{tag.title}}</g-link>
          <!-- <span class="saperator text-gray-500">&#x25CF;</span> -->
        </span>
      </div>
    </div>
    <!-- Tags:
    < class="pl-4">
    <br/>
    Author:
        <g-link :to="$page.article.author.path" class="text-orange-500 hover:text-orange-800">
          {{$page.article.author.title}}
          </g-link>  -->
    <!-- <pre>
      {{$page.article}}
    </pre> -->
    <span class="block mt-16"></span>
  </Layout>
</template>

<style src='~/assets/markdown.css'>
</style>

<page-query>
query Article($id: ID!){
  article(id: $id){
    date category{ title, path} title excerpt image
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

<script>
import mediumZoom from "medium-zoom";
export default {
  metaInfo() {
    return {
      title: this.$page.article.title
    };
  },
  mounted() {
    // when we revisit the page, we need to register it
    mediumZoom(".markdown img");
  },
  updated() {
    // register everytime we refresh the page..
    mediumZoom(".markdown img");
  }
};
</script>
