<<template>
  <Layout>
    <!-- header with title, image and excerpt -->
    <div class="p-4 font-roboto max-w-screen-xl mx-auto">
      <!-- back -->
      <div class="my-2 tracking-widest text-gray-500 font-medium">
        ◀ Back
      </div>
      
      <div class="md:flex items-center md:space-x-4 justify-evenly">
        <!-- text  -->
        <div class="md:w-1/2 md:max-w-lg">
          <!-- date - category -->
          <div class='text-xs font-roboto font-medium text-gray-700'>
            <span>{{$formatDate($page.article.date)}}</span>
            <span class=" inline-block px-2">—</span>
            <g-link class="font-novaround text-primary-400 hover:text-primary-500">
              {{$page.article.category.title}}
            </g-link>
          </div>
          <!-- title -->
          <div class="leading-tight font-novaflat text-3xl text-gray-900">
            {{ $page.article.title }}
          </div>
          <!-- excerpt -->
          <div class="excerpt">{{$page.article.excerpt}}</div>
        </div>
        <!-- image -->
        <div class="md:w-1/2 md:max-w-screen-lg">
          <g-image :src="$page.article.image" 
          class="rounded-md w-full h-full object-cover" />        
        </div>
      </div>

    </div>
    <!-- content -->
    <VueRemarkContent  class="markdown p-4"/>
    <!-- Tags:
    < class="pl-4">
      <li v-for="tag in $page.article.tags" :key="tag.id">
        <g-link :to="tag.path" class="text-orange-500 hover:text-orange-800">{{
          tag.title
        }}</g-link>
      </li>
    <br/>
    Author:
        <g-link :to="$page.article.author.path" class="text-orange-500 hover:text-orange-800">
          {{$page.article.author.title}}
          </g-link>  -->
    <!-- <pre>
      {{$page.article}}
    </pre> -->
    <span class="block mt-64"></span>
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
export default {
  metaInfo() {
    return {
      title: this.$page.article.title
    };
  }
};
</script>
