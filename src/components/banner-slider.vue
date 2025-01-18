<template>
  <div
      class="h-screen bg-cover bg-center absolute inset-0 sm:bg-left -z-10 ease-in-out transition-all duration-1000"
      :style="'background-image: url('+imageSrc+');'"
  >
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "banner",
  data() {
    return {
      currentImage: 1,
      maxImages: 4
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