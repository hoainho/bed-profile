<template>
  <!-- Add position: relative to parent component -->
  <div class="bulleted" :class="isCenter ? 'isCenter' : 'isLeft'"></div>
</template>
<script>
export default {
  props: ["isCenter"],
};
</script>
<style>
.bulleted::after {
  content: "";
  position: absolute;
  background-color: var(--q-primary);
  width: 5px;
  height: 5px;
  bottom: 0;
  box-shadow: 0px 0px 0px 4px #191919;
}
.isLeft::after {
  transform: rotate(45deg) translate(100%, 100%);
  left: 0;
  top: 0;
}
.isCenter::after {
  transform: rotate(45deg) translate(-20%, 60%);
  left: 50%;
}
</style>
