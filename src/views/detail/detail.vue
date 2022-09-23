<template>
  <div class="detail toPage">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="back"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import useDetailStore from "@/stores/modules/detail/detail";
import { storeToRefs } from "pinia";

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
console.log(route.params.id);

const back = () => {
  router.back();
};

//发送网络请求
const detailStore = useDetailStore();

detailStore.fetchDetailInfos(route.params.id);
console.log(detailStore.fetchDetailInfos);
// const { fetchDetailInfos } = storeToRefs(detailStore);
// console.log(fetchDetailInfos);
// fetchDetailInfos.value(route.params.id);
</script>

<style scoped></style>
<!-- // 这是响应式数据ref 在setup中要.value 但是在模板里是不用value的 -->
