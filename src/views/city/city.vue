<template>
  <div class="city">
    <div class="city-top">
      <!-- 搜索栏 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        show-action
        shape="round"
        @cancel="cancelClick"
      />
      <!-- 切换栏 -->
      <!-- tabActive 默认绑定的是索引 name可以改变他的绑定 -->
      <van-tabs v-model:active="tabActive" color="var(--primary-color)">
        <template v-for="(value, key, index) in allCities">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="city-content">
      <!-- <city-group :currentGroup="currentGroup" /> -->
      <template v-for="(value, key, index) in allCities">
        <city-group
          v-show="key === tabActive"
          :currentGroup="value.cities"
          :hotCityData="value.hotCities"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import useCityStore from "@/stores/modules/city/city";
import { storeToRefs } from "pinia";
import CityGroup from "./city-components/city-group.vue";

//搜索栏
const searchValue = ref("");
// 取消
const router = useRouter();
const cancelClick = () => {
  router.back();
};
// 切换栏;
const tabActive = ref();

//网络请求 获取数据

const CityStore = useCityStore();
CityStore.fetchAllCityData();
const { allCities } = storeToRefs(CityStore);

// computed 中的数据 改变 会重新计算
const currentGroup = computed(() => allCities.value[tabActive.value]);
// console.log(currentGroup);
</script>

<style scoped lang="less">
.city {
  // 使用 vue提供的:deep 穿透 组件 局部修改样式
  :deep(.van-field__left-icon) {
    color: var(--primary-color);
  }
  .city-content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
