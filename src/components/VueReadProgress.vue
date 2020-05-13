<template>
  <div class="read-progress-container">
    <span
      class="read-progress-bar bg-primary-500"
      :style="{ width: readProgress + '%'}"
    ></span>
  </div>
</template>

<script>
export default {
  name: "VueReadProgress",
  data() {
    return {
      readProgress: 0
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.updateReadProgress);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("scroll", this.updateReadProgress);
    }
  },
  methods: {
    updateReadProgress() {
      if (process.browser) {
        this.readProgress = this.currentScrollPosition(window.scrollY);
      }
    },
    currentScrollPosition(position) {
      if (process.browser) {
        return (
          (position /
            (document.body.clientHeight -
              document.documentElement.clientHeight)) *
          100
        );
      } else {
        return 0;
      }
    }
  }
};
</script>

<style scoped>
.read-progress-bar {
  display: block;
  width: 0%;
  height: inherit;
}
.with-shadow {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
</style>