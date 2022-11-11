<template>
  <div class="q-mt-2xl container flex items-center justify-center">
    <title-component title="About Me" />

    <div class="row">
      <div class="col-5">
        <q-img
          src="src/assets/images/IMG_6634.JPG"
          spinner-color="white"
          style="height: 490px; max-width: 410px"
          class="about-image relative overflow-visible rounded-lg brightness-50"
        />
      </div>
      <div class="col-7">
        <h2 class="text-lg font-bold text-primary">I'm Milo</h2>
        <h1 class="text-2xl text-white font-bold pb-5">
          I'm Creative Ui/Ux Designer And Web Developer
        </h1>
        <div class="my-5">
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          class="py-10 px-5 box-shadow w-full h-auto shadow-bg rounded relative"
        >
          <ul class="row">
            <li
              class="w-1/2 relative my-2"
              v-for="(item, index) in basicInfo"
              :key="index"
            >
              <diamond-bulleted :isCenter="false" />
              <div class="row pl-5">
                <p class="text-white font-bold pr-2">
                  {{ `${item.name}: ` }}
                </p>
                <p class="text-white">{{ `${item.value}` }}</p>
              </div>
            </li>
          </ul>
          <ul
            class="flex flex-col justify-center items-center absolute top-1/2 right-0 translate-x-2/4 translate-y-50-"
          >
            <li
              class="rounded-full flex justify-center items-center p-1 bg-zinc-900 m-1 w-7 h-7 cursor-pointer"
              :class="item.color ? item.color : ''"
              v-for="(item, index) in socialLinks"
              :key="index"
            >
              <router-link :to="item.link"
                ><q-icon :name="item.icon" color="white"
              /></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "src/components/Title/TitleComponent.vue";
import DiamondBulleted from "src/components/Bulleted/DiamondBulleted.vue";
import { reactive } from "vue";
import {
  fabFacebookF,
  fabGooglePlusG,
  fabInstagram,
  fabSkype,
  fabYoutube,
  fasPhone,
} from "@quasar/extras/fontawesome-v6";
export default {
  components: { TitleComponent, DiamondBulleted },
  setup() {
    const basicInfo = reactive([
      {
        name: "Full Name",
        value: "Milo",
      },
      {
        name: "Birthday",
        value: "21 February 2000",
      },
      {
        name: "Address",
        value: "Ho Chi Minh, VietNam",
      },
      {
        name: "Email",
        value: "milo@gmail.com",
      },
      {
        name: "Phone",
        value: "(84) 090-115-0222",
      },
      {
        name: "Nationality",
        value: "VietNam",
      },
    ]);
    const socialLinks = reactive([
      {
        icon: fabFacebookF,
        link: "/",
        color: "hover:bg-facebook",
      },
      {
        icon: fabInstagram,
        link: "/",
        color: "hover:bg-instagram",
      },
      {
        icon: fabSkype,
        link: "/",
        color: "hover:bg-skype",
      },
      {
        icon: fabGooglePlusG,
        link: "/",
        color: "hover:bg-google",
      },
    ]);
    return { basicInfo, socialLinks };
  },
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
