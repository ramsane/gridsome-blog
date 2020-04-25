<template>
  <div>
    <div
      id="aboutme"
      class="is-typing text-xl w-full text-center font-semibold"
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const theater = require('theaterjs/dist/theater.min.js')()
    theater
      .on('type:start, erase:start', function() {
        // add a class to actor's dom element when he starts typing/erasing
        theater.getCurrentActor().$element.classList.add('is-typing')
      })
      .on('type:end, erase:end', function() {
        // and then remove it when he's done
        theater.getCurrentActor().$element.classList.remove('is-typing')
      })

    theater
      .addActor('aboutme', { accuracy: 1, speed: 0.6 })
      .addScene('aboutme:Hi! I`m', 500, -2, "'m ")
      .addScene('<span class="text-primary">Ramana Reddy</span> <br>and I\'m')
      .addScene(' good at <span class="text-sklearn">Machine Learning.</span>')
      .addScene(500, -17)
      .addScene('<span class="text-tensorflow">Computer Vision.</span>')
      .addScene(500, -16)
      .addScene('<span class="text-vuejs">Vue JS.</span>')
      .addScene(500, -7)
      .addScene('<span class="text-django">Django.</span>')
      .addScene(1000, theater.replay)
  }
}
</script>

<style scoped>
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.is-typing::after {
  content: '|';
  animation: blink 500ms infinite;
}
</style>
