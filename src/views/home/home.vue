<template>
  <div class="home">
    <home-nav-bar />
    <home-banner />
    <home-location />
  </div>
</template>

<script setup>
// the componentsName must be upperCase cannot use - - -
import HomeNavBar from "./components/home-nav-bar.vue";
import homeBanner from "./components/home-banner.vue";
import homeLocation from "./components/home-location.vue";
</script>

<style scoped lang="less">
// .home {
// }
</style>
