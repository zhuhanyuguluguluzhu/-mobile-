<template>
  <div class="detail toPage">
    <div class="detail-top-nav">
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
      <div class="detail-swipe" v-if="mainPart">
        <detail-swipe
          :swipePicData="mainPart?.topModule?.housePicture?.housePics"
        />
      </div>
    </div>
    <div class="detail-infos" v-if="mainPart">
      <detail-infos :detailInfos="mainPart?.topModule" />
    </div>
    <div class="detail-facility" v-if="mainPart">
      <detail-section title="房屋设施" check="查看全部设施">
        <detail-facility
          :facilityData="
            mainPart?.dynamicModule?.facilityModule?.houseFacility
              .houseFacilitys
          "
          :facilityIconGroup="
            mainPart?.dynamicModule?.facilityModule?.houseFacility.facilitySort
          "
        />
      </detail-section>
    </div>
  </div>
</template>

<script setup>
import detailSwipe from "./detail-cmp/detail-swipe.vue";
import detailInfos from "./detail-cmp/detail-infos.vue";
import detailSection from "@/components/detail/detail-section.vue";
import detailFacility from "./detail-cmp/detail-facility.vue";

import useDetailStore from "@/stores/modules/detail/detail";
import { storeToRefs } from "pinia";

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
// console.log(route.params.id);

const back = () => {
  router.back();
};

//发送网络请求
const detailStore = useDetailStore();
// 这是响应式数据ref 在setup中要.value 但是在模板里是不用value的
detailStore.fetchDetailInfos(route.params.id);

const { mainPart } = storeToRefs(detailStore);
</script>

<style scoped lang="less">
.detail {
  padding: 10px;
}
</style>
