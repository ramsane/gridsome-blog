<template>
  <!-- body and header -->
  <div>
    <div class="transition duration-300 lg:translate-x-0 min-h-screen relative"
      :class="{ '-translate-x-2/3 transform sm:-translate-x-1/3': menuClicked }" >
      <!-- header -->
      <div :class="[bgColor, textColor]"> 
        <header class="flex justify-between items-center px-4 py-2 lg:max-w-screen-xl lg:mx-auto">
          <!-- link to home page with logo -->
          <g-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-primary-500 fill-current w-10 h-10">
              <path
                d="M22.2977 32.5146V40L20 38.874 17.7023 40v-7.4854c-2.4915-.8153-4.8299-1.9092-7.0152-3.2819L4.0901 40h-.21989L0 37.9119l6.97078-11.4214c-3.84089-3.371-5.76134-7.1865-5.76134-11.4465 0-4.1761 1.25342-7.6897 3.76026-10.54086C7.03674 2.15514 9.51426.654087 12.4022 0h.2199l5.0357 2.74214c-4.0462.9392-7.0367 2.39833-8.97182 4.37735C6.42836 9.4675 5.29955 12.1174 5.29955 15.0692c0 3.371 1.10681 6.2892 3.32046 8.7547l2.77069-4.5535h.2199l3.8702 2.1133-3.3644 5.5094c1.8415 1.3612 3.7034 2.3937 5.5859 3.0972l-.0445-27.24816V0L20 1.019 22.3422 0v2.74214l-.0445 27.24816c1.8825-.7035 3.7444-1.736 5.5859-3.0972l-3.3644-5.5094 3.8702-2.1133h.2199l2.7706 4.5535c2.2137-2.4655 3.3205-5.3837 3.3205-8.7547 0-2.9518-1.1288-5.6017-3.3864-7.94971-1.9351-1.97902-4.9258-3.43815-8.9718-4.37735L27.3778 0h.22c2.888.654087 5.3655 2.15514 7.4325 4.50314 2.5068 2.85116 3.7603 6.36476 3.7603 10.54086 0 4.26-1.9205 8.0755-5.7614 11.4465L40 37.9119 36.1298 40h-.2199l-6.597-10.7673c-2.1853 1.3727-4.5237 2.4666-7.0152 3.2819z" />
            </svg>
          </g-link>
          <nav class="hidden flex-grow lg:flex justify-end">
            <g-link
              v-for="category in categories"
              :key="category.name"
              :to="category.path"
              class="hover:text-primary-500 mx-5 text-xl tracking-wide font-roboto"
              exact-active-class="text-primary-500"
            >
              {{ category.name }}
            </g-link>
          </nav>
          <!-- hamberger menu -->
          <svg
            @click="menuClicked = !menuClicked"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-500 stroke-current stroke-2 h-10 w-12 cursor-pointer lg:hidden"
          >
            <path d="M5 20h40M5 30h40M5 10h40" />
          </svg>
        </header>
      </div>
      <!-- content -->
      <div class="pb-40">
        <slot />
      </div>
      <!-- footer -->
      <div class="bg-gray-900 text-gray-500 absolute w-full bottom-0">
        <div class="max-w-screen-lg mx-auto py-8 px-4 space-y-6 flex flex-col md:flex-row md:space-y-0 items-center justify-between">
          <!-- copy rights -->
          <div>
            &copy;2020 designed and coded by <a class="text-primary-500"  
            href="https://www.linkedin.com/in/ramanareddysane/" target="_blank">
            Ramana Reddy</a> using gridsome and Vue.js
          </div>
          <!-- social contacts -->
          <div class="flex space-x-3">
            <g-link to="https://github.com/ramsane" target="_blank" 
            class="fill-current bg-gray-200 h-full rounded-full p-2">
              <github class="text-gray-900 fill-current hover:text-black"/>
            </g-link>
            <g-link to="https://www.linkedin.com/in/ramanareddysane/" target="_blank" 
            class="fill-current bg-blue-700 h-full rounded-full p-2">
              <linkedin class="text-gray-400 stroke-1 fill-current hover:text-white"/>
            </g-link>
            <g-link to="mailto:ramsane20@gmail.com"  
            class="fill-current bg-red-700 h-full rounded-full p-2">
              <mail class="text-gray-400 stroke-3 hover:text-white"/>
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <!-- side nav -->
    <nav
      class="fixed top-0 right-0 h-full w-2/3 transition duration-300 transform  sm:w-1/3 lg:translate-x-full text-xl"
      :class="[{'translate-x-full': !menuClicked}, bgColor, textColor]"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        class="p-4 flex-col"
      >
        <g-link
          :to="category.path"
          class="hover:text-primary-500 block w-3/4 mx-auto font-roboto tracking-wide"
          active-class="text-primary-500"
        >
          {{ category.name }}
        </g-link>
      </div>
    </nav>
  </div>
</template>

<script>
// svgs
import mail from "~/assets/svgs/mail.svg";
import linkedin from "~/assets/svgs/linkedin.svg";
import github from "~/assets/svgs/github.svg";

export default {
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgColor() {
      return this.home ? "bg-gray-900" : "bg-white";
    },
    textColor() {
      return this.home ? "text-gray-300" : "text-gray-900";
    }
  },
  data() {
    return {
      menuClicked: false,
      categories: [
        {
          name: "Articles",
          path: "/articles"
        }
      ]
    };
  },
  components: {
    mail,
    linkedin,
    github
  }
};
</script>
<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
