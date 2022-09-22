<template>
  <div class="home">
    <home-nav-bar />
    <home-banner />
    <!-- 搜索住宿的box -->
    <home-search />
    <!-- 滚动出现的搜索框 -->
    <div class="search-nav" v-if="isShowSearchBar">
      <home-search-nav :start-date="'09.19'" :end-date="'09.20'" />
    </div>
    <!-- 图标分类组件 -->
    <homeCategory />
    <!-- 热门精选组件 -->
    <home-list />
  </div>
</template>

<script setup>
//components
import homeNavBar from "./components/home-nav-bar.vue";
import homeBanner from "./components/home-banner.vue";
import homeSearch from "./components/home-search.vue";
import homeSearchNav from "@/components/home-cmp/home-search-nav/home-search-nav.vue";
import homeCategory from "@/components/home-cmp/home-category/home-category.vue";
import homeList from "@/components/home-cmp/home-list/home-list.vue";

import userScroll from "@/hooks/userscroll";
import { computed } from "vue";

import useHomeStore from "@/stores/modules/home/home";
import { storeToRefs } from "pinia";
const HomeStore = useHomeStore();
//发送网络请求 获取categories 数据
// const { fetchcateGories } = storeToRefs(HomeStore);
HomeStore.fetchcateGories();
HomeStore.fetchHouseList();

const { isReachBottom, scrollTop } = userScroll();

// 监听用户滑动的距离  控制搜索框的出现
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});
</script>

<style scoped lang="less">
.search-nar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
