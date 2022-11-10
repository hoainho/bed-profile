<script>
import { defineComponent } from "vue";
import DividerHero from "components/BackgroundHero/DividerHero.vue";
import TyperComponent from "components/Typer/TyperComponent.vue";
import AboutPage from "./AboutPage.vue";
export default defineComponent({
  components: { DividerHero, TyperComponent, AboutPage },
  name: "HomePage",
});
</script>

<template>
  <div class="flex items-center relative">
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
          class="text-9xl text-white text-weight-bolder text-uppercase font-extrabold tracking-lg"
        >
          MILO
        </h1>
        <div class="flex justify-left">
          <h5 class="text-2xl text-left font-bold text-white q-mr-sm">I'm a</h5>
          <h5 class="text-2xl font-bold">
            <typer-component />
          </h5>
        </div>
        <q-btn color="primary" no-caps style="width: 100px" class="q-mt-xl">
          <h6 class="text-white text-bold">Hire Me</h6>
        </q-btn>
      </div>
    </div>
    <divider-hero class="absolute fixed-bottom" />

    <!-- About Section -->
  </div>
  <about-page />
</template>
