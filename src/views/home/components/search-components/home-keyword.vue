<template>
  <!-- 价格和人数 -->
  <div class="description bottom-gary-line">
    <div>价格不限</div>
    <div>人数不限</div>
  </div>
  <!-- 关键词 -->
  <div class="keyWord bottom-gary-line">
    <span>关键字</span>/ <span>位置</span>/
    <span>民宿名</span>
  </div>
  <!-- 显示区域和热门景点 -->
  <div class="showHotPlace">
    <template v-for="(item, index) in allKeyPlace" :key="index">
      <div
        class="itemPlace"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
      >
        {{ item.tagText.text }}
      </div>
    </template>
  </div>
</template>

<script setup>
//引入home仓库
import useHomeStore from "@/stores/modules/home/home";
import { storeToRefs } from "pinia";

//发送网络请求
const homeStore = useHomeStore();

homeStore.fetchHotSuggests();
const { allKeyPlace } = storeToRefs(homeStore);

// console.log(allKeyPlace);
</script>

<style scoped lang="less">
.description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 22px 0 0;
  font-size: 15px;
  color: #555;
}
.keyWord {
  margin-top: 20px;
  color: #666;
  font-size: 15.5px;
}
.showHotPlace {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .itemPlace {
    margin: 10px 20px 0 0;
    font-size: 15px;
    border-radius: 14px;
    border: 1px solid #ccc;
    font-weight: 450;
  }
}
</style>
