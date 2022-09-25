<template>
  <div class="detail page-top" ref="detailRef">
    <div class="detail-tab-control">
      <detail-tab-control
        v-if="showTabControl"
        :titles="['描述', '设施', '房东', '评论', '须知', '周边']"
      />
    </div>
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
    <div class="mianPart" v-if="mainPart" v-memo="[mainPart]">
      <div class="detail-facility" v-if="mainPart">
        <detail-section title="房屋设施" check="查看全部设施">
          <detail-facility
            :facilityData="
              mainPart?.dynamicModule?.facilityModule?.houseFacility
                .houseFacilitys
            "
            :facilityIconGroup="
              mainPart?.dynamicModule?.facilityModule?.houseFacility
                .facilitySort
            "
          />
        </detail-section>
      </div>
      <div class="detail-landLord" v-if="mainPart">
        <detail-section title="房东介绍" check="查看房东主页">
          <detail-land-lord
            :ref="getSectionRef"
            :landLordData="mainPart?.dynamicModule?.landlordModule"
          />
        </detail-section>
      </div>
      <div class="detail-comment" v-if="mainPart">
        <detail-comment
          :ref="getSectionRef"
          :comment="mainPart?.dynamicModule?.commentModule"
        />
      </div>
      <div class="detail-notice" v-if="mainPart">
        <detail-notice
          :ref="getSectionRef"
          :orderRules="mainPart?.dynamicModule?.rulesModule?.orderRules"
        />
      </div>
      <div class="detail-map" v-if="mainPart?.dynamicModule?.positionModule">
        <detail-section title="周围位置" check="查看更多周边信息">
          <detail-map
            :ref="getSectionRef"
            :position="mainPart?.dynamicModule?.positionModule"
          ></detail-map
        ></detail-section>
      </div>
      <div class="detail-price-intro" v-if="mainPart">
        <detail-price-intro
          :ref="getSectionRef"
          :priceIntro="mainPart.introductionModule"
        />
      </div>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/tq-ensure-icon.png" alt="" />
      <div class="text">飞猪旅途，让您的生活更加便利</div>
    </div>
  </div>
</template>

<script setup>
import detailSwipe from "./detail-cmp/detail-swipe.vue";
import detailInfos from "./detail-cmp/detail-infos.vue";
import detailSection from "@/components/detail/detail-section.vue";
import detailFacility from "./detail-cmp/detail-facility.vue";
import detailLandLord from "./detail-cmp/detail-landLord.vue";
import detailComment from "./detail-cmp/detail-comment.vue";
import detailNotice from "./detail-cmp/detail-notice.vue";
import detailMap from "./detail-cmp/detail-map.vue";
import detailPriceIntro from "./detail-cmp/detail-priceintro.vue";
import detailTabControl from "@/components/detail/tab-control.vue";

import useDetailStore from "@/stores/modules/detail/detail";
import { storeToRefs } from "pinia";
import userscroll from "@/hooks/userscroll";
import { ref, computed } from "vue";

import { useRoute, useRouter } from "vue-router";
import DetailLandLord from "./detail-cmp/detail-landLord.vue";
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

//tab-control的隐藏和显示
// let showTabControl = true;
// const detailRef = ref();
const { scrollTop } = userscroll();
// console.log(scrollTop.value);
const showTabControl = computed(() => {
  return scrollTop.value >= 296;
});

//点击滑动到指定区域
const sectionEls = [];
const getSectionRef = (value) => {
  if (!value) return;
  sectionEls.push(value.$el);
};

// const tabClick = (index) => {
//   window.scrollTo({
//     top: sectionEls[index].offsetTop - 44,
//     behavior: "smooth",
//   });
// };
</script>

<style scoped lang="less">
.detail {
  padding: 10px;
  .detail-tab-control {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }
  .footer {
    text-align: center;
    // height: 200px;
    padding: 50px;
    img {
      width: 123px;
      height: 17px;
    }
    .text {
      margin-top: 10px;
      color: var(--primary-color);
    }
  }
}
</style>
