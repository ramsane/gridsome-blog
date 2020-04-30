<template>
  <Layout>
    <div
      class="space-y-2 md:flex flex-row-reverse items-center container mx-auto"
    >
      <app-avatar class="w-full max-w-md mx-auto" />
      <app-typed-intro
        class="text-center w-full max-w-md mx-auto my-auto border h-16 md:h-auto"
      />
    </div>
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
import Avatar from '~/components/Avatar.vue'
export default {
  components: {
    'app-typed-intro': TypedIntro,
    'app-avatar': Avatar
  }
}
</script>
