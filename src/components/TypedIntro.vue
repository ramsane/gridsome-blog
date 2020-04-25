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
      .addActor('aboutme', { accuracy: 1, speed: 0.6 })
      .addScene(500, 'aboutme:Hi! I`m', 500, -2, "'m ")
      .addScene('<span class="text-primary">Ramana Reddy,</span> <br>')
      .addScene(500, 'an adept at ')
      .addScene('<span class="text-sklearn">Machine Learning.</span>')
      .addScene(1000, -17)
      .addScene('<span class="text-tensorflow">Computer Vision.</span>')
      .addScene(1000, -16)
      .addScene('<span class="text-vuejs">Front-end Development.</span>')
      .addScene(1000, -22)
      .addScene('<span class="text-django">Software Development.</span>')
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
