<script>
import { ref } from "vue";

export default {
  setup() {
    const navbars = ref([
      {
        label: "Home",
        path: "/",
      },
      {
        label: "About",
        path: "/about",
      },
      {
        label: "Service",
        path: "/service",
      },
      {
        label: "Resume",
        path: "/resume",
      },
      {
        label: "Portfolio",
        path: "/portfolio",
      },
      {
        label: "Contact",
        path: "/contact",
      },
    ]);
    return {
      navbars,
      tab: ref(""),
    };
  },
};
</script>

<template>
  <q-header style="background-color: transparent" class="container absolute">
    <div class="q-pa-md">
      <q-toolbar class="transparent text-white rounded">
        <q-btn color="white" size="24px" flat label="BED" />
        <q-space />
        <q-tabs
          v-model="tab"
          indicator-color="primary"
          narrow-indicator
          dense
          align="justify"
          color="text"
          class="rounded"
          v-for="nav in navbars"
          shrink
          :key="nav.label"
        >
          <q-route-tab
            :to="nav.path"
            exact
            :name="nav.label"
            :label="nav.label"
          />
        </q-tabs>
      </q-toolbar>
    </div>
  </q-header>
</template>
