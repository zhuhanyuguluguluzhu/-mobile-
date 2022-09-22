<template>
  <div class="home-list">
    <h2 class="title">热门精选</h2>
    <div class="content-list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <home-house-type9
          v-if="item.discoveryContentType === 9"
          :houseData="item.data"
        />

        <home-house-type3
          v-else-if="item.discoveryContentType === 3"
          :houseData="item.data"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import homeHouseType9 from "@/components/home-cmp/home-house-type9/home-house-type9.vue";
import homeHouseType3 from "@/components/home-cmp/home-house-type3/home-house-type3.vue";

import useHomeStore from "@/stores/modules/home/home";
const homeStore = useHomeStore();
const { houseList } = homeStore;
</script>

<style scoped lang="less">
.home-list {
  padding: 10px;

  .title {
    color: #444;
    margin-bottom: 15px;
  }
  .content-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
