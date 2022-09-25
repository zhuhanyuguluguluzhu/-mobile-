<template>
  <!-- 对首页进行缓存 -->
  <!-- <keep-alive include="home">
    <router-view />
  </keep-alive> -->

  <router-view v-slot="{ Component }">
    <keep-alive include="home">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <tab-bar v-show="!route.meta.hiddenTabbar" />
  <isLoading />
</template>

<script setup>
import isLoading from "./components/home-cmp/loading/loading.vue";
import TabBar from "./components/home-cmp/home-tabbar/tab-bar.vue";
import { useRoute } from "vue-router";

//当前响应的路由对象 route 是响应式的
const route = useRoute();
</script>

<style scoped lang="less"></style>
