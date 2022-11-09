<template>
  <vue-writer
    :array="['Web Designer', 'Content Creator']"
    :type-speed="100"
    :erase-speed="100"
  />
</template>

<script>
import VueWriter from "vue-writer";
export default {
  components: { VueWriter },
};
</script>

<style lang="css">
.is-typed span.typed {
  /* color: orange; */
  color: var(--q-primary);
}
</style>
