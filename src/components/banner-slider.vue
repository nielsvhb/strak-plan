<template>
  <div class="h-screen absolute inset-0 -z-10 ">
      <div class="h-full w-full bg-cover bg-center sm:bg-left absolute ease-in-out transition-all duration-1000" v-for="imgIndex in maxImages" 
           :class="{'opacity-100': imgIndex === currentImage, 'opacity-0': imgIndex !== currentImage}" :style="'background-image: url(images/banner/'+imgIndex+'.jpg);'"></div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "banner",
  data() {
    return {
      currentImage: 1,
      maxImages: 7
    };
  },
  computed: {
    imageSrc(): string {
      return `/images/banner/${this.currentImage}.jpg`;
    }
  },
  mounted() {
    setInterval(() => {
        if(this.currentImage === this.maxImages)
          this.currentImage = 1;
        else 
          this.currentImage++;
    }, 7500)
  }
});
</script>