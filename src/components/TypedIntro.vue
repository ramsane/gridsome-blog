<template>
  <div
    id="aboutme"
    class="is-typing text-lg font-semibold sm:text-lg md:text-xl lg:text-3xl"
  ></div>
</template>

<script>
export default {
  mounted() {
    const theater = require('theaterjs/dist/theater.min.js')({
      minSpeed: 20,
      maxSpeed: 450
    })
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
      .addActor('aboutme', { accuracy: 1, speed: 0.75 })
      .addScene(500, 'aboutme:Hi!', 500, ' I`m', 750, -2, "'m ")
      .addScene('<span class="text-primary">Ramana Reddy,</span>')
      .addScene(500, '<br>an adept at ')
      .addScene('<span class="text-sklearn">Machine Learning.</span>')
      .addScene(1000, -17)
      .addScene('<span class="text-tensorflow">Computer Vision.</span>')
      .addScene(1000, -28)
      .addScene('a decent <span class="text-django">Software Developer.</span>')
      .addScene(1000, -19)
      .addScene('<span class="text-vuejs">Front-end developer</span>')
      .addScene(1000, 'aboutme:', theater.replay)
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
