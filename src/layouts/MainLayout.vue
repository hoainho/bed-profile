<template>
  <div class="w-full bg-secondary">
    <q-layout view="lhr lpr lfr" class="mx-auto">
      <navbar-layout />
      <q-page-container class="no-padding">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavbarLayout from "./NavbarLayout.vue";
export default defineComponent({
  components: { NavbarLayout },
  name: "MainLayout",
  setup() {
    return {};
  },
});
</script>
