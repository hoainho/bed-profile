<template>
  <div class="q-mt-2xl container flex items-center justify-center">
    <title-component title="About Me" />
    <div class="row">
      <div class="col-5">
        <q-img
          src="src/assets/images/IMG_6634.JPG"
          spinner-color="white"
          style="height: 450px; max-width: 350px"
          class="about-image relative overflow-visible rounded-lg"
        />
      </div>
      <div class="col-7">
        <q-card dark bordered class="bg-grey-9 my-card">
          <q-card-section>
            <h2 class="text-lg text-primary">I'm Milo</h2>
            <h1 class="text-2xl text-white font-bold">
              I'm Creative Ui/Ux Designer And Web Developer
            </h1>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </q-card-section>
          <q-img src="src/assets/images/IMG_6635.JPG" />

          <q-card-section>
            <div class="text-overline text-orange-9">Overline</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="Share" />
            <q-btn flat color="primary" label="Book" />

            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "src/components/Title/TitleComponent.vue";
export default {
  components: { TitleComponent },
};
</script>

<style>
.about-image::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(207, 156, 99, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  top: 0;
  left: 0;
  transform: translate(-8%, -8%);
  border-radius: inherit;
}
</style>
