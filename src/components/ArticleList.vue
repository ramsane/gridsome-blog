
<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>

<page-query>
query Articles {
  articles: allArticle(limit: 6){
    edges{ node {
      id, category{title path} image(width: 800)
      title date author{title path} excerpt tags {id title path} 
      path
    }}
  }
}
</page-query>