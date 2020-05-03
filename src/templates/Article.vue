<<template>
  <Layout>
    <div class="bg-white p-2 pt-6">
      <!-- back -->
      <div class="capitalize tracking-widest text-gray-500 font-roboto font-medium">◀ back</div>
      
      <!-- date - category -title - excerpt -->
      <div class="bg-white  my-4">
        <div class='text-xs font-roboto font-medium text-gray-700'>
          <span>{{$formatDate($page.article.date)}}</span>
          <span class="inline-block px-2">—</span>
          <g-link class="font-novaround text-primary-400 hover:text-primary-500">
            {{$page.article.category.title}}
          </g-link>
          <div class="leading-tight font-novaflat text-3xl text-gray-900">{{ $page.article.title }}</div>
        </div>
      </div>
      <!-- excerpt -->
      <div class="excerpt">{{$page.article.excerpt}}</div>
      <!-- image -->
      <g-image :src="$page.article.image" class="my-4 rounded-sm w-full h-full bg-red-400 shadow"></g-image>        
    </div>
    <!-- content -->
    <VueRemarkContent  class="markdown bg-white p-2"/>
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
