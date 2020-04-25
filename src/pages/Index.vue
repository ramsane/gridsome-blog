<template>
  <Layout>
    <app-typed-intro />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<script>
// typed intro
import TypedIntro from '~/components/TypedIntro.vue'
export default {
  components: {
    'app-typed-intro': TypedIntro
  }
}
</script>
