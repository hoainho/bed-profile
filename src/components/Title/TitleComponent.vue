<template>
  <div class="q-my-lg flex items-center justify-center w-full pb-20">
    <h1
      class="q-py-lg relative title-section text-center text-white text-2xl text-bold uppercase w-fit tracking-sm"
    >
      {{ title }}
      <diamond-bulleted :isCenter="true" />
    </h1>
  </div>
</template>

<script>
import DiamondBulleted from "../Bulleted/DiamondBulleted.vue";

export default {
  props: ["title"],
  components: { DiamondBulleted },
};
</script>

<style lang="css">
.title-section::before {
  content: "";
  position: absolute;
  width: 35%;
  height: 2px;
  background-color: #191919;
  left: 0;
  bottom: 0;
}
.title-section::after {
  content: "";
  position: absolute;
  width: 35%;
  height: 2px;
  background-color: #191919;
  right: 0;
  bottom: 0;
}
/* .title-section span::after {
  content: "";
  position: absolute;
  background-color: var(--q-primary);
  width: 10px;
  height: 10px;
  transform: rotate(45deg) translate(-20%, 60%);
  left: 50%;
  bottom: 0;
  box-shadow: 0px 0px 0px 4px #191919;
} */
</style>
