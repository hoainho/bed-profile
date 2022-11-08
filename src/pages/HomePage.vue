<script>
import { defineComponent } from "vue";
import DividerHero from "components/BackgroundHero/DividerHero.vue";

export default defineComponent({
  components: { DividerHero },
  name: "HomePage",
});
</script>

<template>
  <div class="flex items-center">
    <q-parallax
      src="src/assets/images/bg-hero.JPG"
      :height="1200"
      speed="0.8"
      class="backdrop-blur-xl brightness-50"
    >
    </q-parallax>

    <div
      class="container absolute-full text-subtitle2 flex flex-col items-center justify-center"
    >
      <div class="flex flex-col">
        <h5 class="text-2xl text-white w-full text-left font-bold">Hi! I'm</h5>
        <h1
          class="text-9xl text-white text-weight-bolder text-uppercase font-extrabold tracking-wider"
        >
          MILO
        </h1>
        <h5 class="text-2xl text-white w-full text-left font-bold block">
          I'm a
          <span class="text-primary text-bold">Web designer</span>
        </h5>
      </div>
    </div>
    <divider-hero class="absolute fixed-bottom" />
  </div>
</template>
