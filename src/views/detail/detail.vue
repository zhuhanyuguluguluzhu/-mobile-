<template>
  <div class="detail page-top" ref="detailRef">
    <!-- <div class="detail-tab-control" ref="tabControlRef">
      <detail-tab-control
        v-if="showTabControl"
        :titles="['设施', '房东', '评论', '须知', '周边']"
        @tabItemClick="tabClick"
      />
    </div> -->
    <van-tabs
      v-model:active="currentIndex"
      scrollspy
      sticky
      color="var(--primary-color)"
    >
      <van-tab title="描述">
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
      </van-tab>

      <div class="detail-infos" v-if="mainPart">
        <detail-infos :detailInfos="mainPart?.topModule" />
      </div>

      <div class="mianPart" v-if="mainPart" v-memo="[mainPart]">
        <van-tab title="设施">
          <!-- detail-facility -->
          <detail-facility
            :facilityData="
              mainPart?.dynamicModule?.facilityModule?.houseFacility
                .houseFacilitys
            "
            :facilityIconGroup="
              mainPart?.dynamicModule?.facilityModule?.houseFacility
                .facilitySort
            "
            :ref="getSectionRef"
          />
        </van-tab>
        <van-tab title="房东">
          <!-- detail-land-lord -->
          <detail-land-lord
            :landLordData="mainPart?.dynamicModule?.landlordModule"
            :ref="getSectionRef"
          />
        </van-tab>

        <van-tab title="评论">
          <!-- detail-comment -->
          <detail-comment
            :comment="mainPart?.dynamicModule?.commentModule"
            :ref="getSectionRef"
          />
        </van-tab>

        <van-tab title="须知">
          <!-- detail-notice -->
          <detail-notice
            :orderRules="mainPart?.dynamicModule?.rulesModule?.orderRules"
            :ref="getSectionRef"
          />
        </van-tab>

        <van-tab title="周边">
          <!-- detail-map -->
          <div
            class="detail-map"
            v-if="mainPart?.dynamicModule?.positionModule"
          >
            <detail-map
              :position="mainPart?.dynamicModule?.positionModule"
              :ref="getSectionRef"
            /></div
        ></van-tab>

        <van-tab title="价格说明">
          <detail-price-intro
            :priceIntro="mainPart.introductionModule"
            :ref="getSectionRef"
        /></van-tab>
        <!-- detail-price-intro -->
      </div>
    </van-tabs>

    <div class="footer">
      <img src="@/assets/img/detail/tq-ensure-icon.png" alt="" />
      <div class="text">飞猪旅途，让您的生活更加便利</div>
    </div>
  </div>
</template>

<script setup>
import detailSwipe from "./detail-cmp/detail-swipe.vue";
import detailInfos from "./detail-cmp/detail-infos.vue";
// import detailSection from "@/components/detail/detail-section.vue";
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
import { ref, computed, onMounted, watch } from "vue";

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
  return scrollTop.value >= 500;
});

let currentIndex = ref(0);

// let active = null;
//点击滑动到指定区域
const sectionEls = [];
const getSectionRef = (value) => {
  //绑定组件 value 是响应式的组件
  // console.log(value.$el);

  if (!value) return;
  // $el 拿到组件内部的根元素
  sectionEls.push(value.$el);
  // active = sectionEls.length;
};
// console.log(active);
// console.log(sectionEls.length);
//tabControl的高度
// const tabControlRef = ref();

// let tabControlHeight = 0;

// onMounted(() => {
//   console.log(tabControlRef);
//   console.log(tabControlRef.value);
//   // 需要挂载的
//   // tabControlHeight = tabControlRef.value.clientHeight;
// });
// console.log(tabControlHeight);
const tabClick = (index) => {
  window.scrollTo({
    top: sectionEls[index]?.offsetTop - 44,
    behavior: "smooth",
  });
};

//页面滚动时 匹配 tabbarcontrol 的索引

// watch(scrollTop, (newValue) => {
//   let elOffsetTop = sectionEls.map((item) => item.offsetTop);
//   console.log(elOffsetTop);
//   let index = elOffsetTop.length - 1;
//   console.log(index);

//   for (let i = 0; i < elOffsetTop.length; i++) {
//     if (elOffsetTop[i] >= newValue) {
//       index = i - 1;
//       break;
//     }
//   }
// });
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
