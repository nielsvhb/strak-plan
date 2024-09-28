<template>
  <div
      class="h-[120vh] bg-cover absolute inset-0 bg-[left_-4rem_top_3rem] sm:bg-left -z-10"
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