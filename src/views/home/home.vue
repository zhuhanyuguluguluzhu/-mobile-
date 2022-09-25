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

<script>
export default {
  name: "home",
};
</script>
<script setup>
//components
import homeNavBar from "./components/home-nav-bar.vue";
import homeBanner from "./components/home-banner.vue";
import homeSearch from "./components/home-search.vue";
import homeSearchNav from "@/components/home-cmp/home-search-nav/home-search-nav.vue";
import homeCategory from "@/components/home-cmp/home-category/home-category.vue";
import homeList from "@/components/home-cmp/home-list/home-list.vue";

import userScroll from "@/hooks/userscroll";
import { computed, watch } from "vue";

import useHomeStore from "@/stores/modules/home/home";
import { storeToRefs } from "pinia";
const HomeStore = useHomeStore();
//发送网络请求 获取categories 数据

HomeStore.fetchcateGories();
HomeStore.fetchHouseList();

const { isReachBottom, scrollTop } = userScroll();

//实现加载更多
watch(isReachBottom, (newValue) => {
  // 到达底部加载数据
  if (newValue) {
    // 数据返回结果在 到达底部为false
    // async 是一个修饰符，async 定义的函数会默认的返回一个Promise对象resolve的值，
    // 因此对async函数可以直接进行then操作,返回的值即为then方法的传入函数
    HomeStore.fetchHouseList().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 监听用户滑动的距离  控制搜索框的出现
const isShowSearchBar = computed(() => {
  // scrollTop.value >= 520一开始返回的false
  return scrollTop.value >= 520 ? true : false;
});
// computed的运用：一个响应式的数据 依赖另一个响应式的数据
</script>

<style scoped lang="less">
.home {
  padding-bottom: 50px;
  .search-nav {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
