<template>
  <div class="home-list">
    <h2 class="title">热门精选</h2>
    <div class="content-list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <home-house-type9
          v-if="item.discoveryContentType === 9"
          :houseData="item.data"
          @click="toDetail(item.data)"
        />

        <home-house-type3
          v-else-if="item.discoveryContentType === 3"
          :houseData="item.data"
          @click="toDetail"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import homeHouseType9 from "@/components/home-cmp/home-house-type9/home-house-type9.vue";
import homeHouseType3 from "@/components/home-cmp/home-house-type3/home-house-type3.vue";

import { useRouter } from "vue-router";

import useHomeStore from "@/stores/modules/home/home";
const homeStore = useHomeStore();
const { houseList } = homeStore;

//点击去详情
// 事件绑在组件身上会到组件的里面的根元素身上 属于 $attr

const router = useRouter();
const toDetail = (data) => {
  // console.log(data.houseId);
  // 动态路由 可以下url栏显示对应的id 属于params 参数
  router.push("/detail/" + data.houseId);
};
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
