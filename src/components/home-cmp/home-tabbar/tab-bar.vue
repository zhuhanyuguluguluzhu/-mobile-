<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="index !== currentIndex"
              :src="getAssetsURL(item.image)"
              alt=""
            />
            <img
              v-else="index === currentIndex"
              :src="getAssetsURL(item.imageActive)"
              alt=""
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import getAssetsURL from "@/utils/get_assets_img";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";

//监听路由的变化 改变图标
const currentIndex = ref(0);
const route = useRoute();

watch(route, (newRoute) => {
  console.log(newRoute.path);
  const index = tabbarData.findIndex((item) => item.path);
  // console.log(currentIndex.value);
  if (index === newRoute) {
    if (currentIndex === -1) return; //why
    currentIndex.value = index;
  }
});
</script>

<style scoped lang="less">
.tab-bar {
  img {
    height: 30px;
  }
}
</style>
