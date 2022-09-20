<template>
  <router-view />
  <tab-bar v-show="!route.meta.hiddenTabbar" />
</template>

<script setup>
import TabBar from "./components/tab-bar.vue";
import { useRoute } from "vue-router";

//当前响应的路由对象 route 是响应式的
const route = useRoute();
</script>

<style scoped></style>
