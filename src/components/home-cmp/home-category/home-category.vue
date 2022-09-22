<template>
  <div class="category">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home/home";
import { storeToRefs } from "pinia";
const HomeStore = useHomeStore();
const { categories } = storeToRefs(HomeStore);
</script>

<style scoped lang="less">
.category {
  display: flex;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1px 5px 5px 5px;
    img {
      width: 34px;
      height: 34px;
    }
    span {
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
