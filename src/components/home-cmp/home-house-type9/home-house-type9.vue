<template>
  <div class="home-house-type9">
    <div class="inner">
      <div class="cover">
        <img :src="houseData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summaryText">{{ houseData.summaryText }}</div>
        <div class="houseName">{{ houseData.houseName }}</div>
        <div class="priceAndRate">
          <van-rate
            :modelValue="rate"
            readonly
            allow-half
            color="#fff"
            void-color="#eee"
            :size="15"
          />
          <h2 class="price">￥{{ houseData.finalPrice }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  houseData: {
    type: Object,
    default: () => ({}),
  },
});
// console.log(props.houseData);

const rate = computed(() => {
  return Number(props.houseData.commentScore);
});
</script>

<style scoped lang="less">
.home-house-type9 {
  width: 50%;
  border-radius: 20px;
  .inner {
    position: relative;
    padding: 5px;
    .cover {
      img {
        width: 100%;
        border-radius: 15px;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      color: #fff;
      font-weight: 700;
      padding: 10px;
      .summaryText {
        font-size: 14px;
      }
      .houseName {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        //多行省略
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .priceAndRate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .price {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
