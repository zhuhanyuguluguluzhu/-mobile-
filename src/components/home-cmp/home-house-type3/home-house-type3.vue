<template>
  <div class="home-house-type3">
    <div class="inner">
      <div class="cover">
        <img :src="houseData.image.url" alt="" />
      </div>

      <div class="info">
        <div class="position">
          <img src="@/assets/img/home/location.png" alt="" />
          <span class="text">{{ houseData.location }}</span>
        </div>
        <div class="houseName">{{ houseData.houseName }}</div>
        <div class="summaryText">{{ houseData.summaryText }}</div>
        <div class="priceInfo">
          <h2 class="price">￥{{ houseData.finalPrice }}</h2>
          <div class="productPrice">￥{{ houseData.productPrice }}</div>
          <div class="priceTipBadge-bargin">
            {{ houseData.priceTipBadge.text }}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  houseData: {
    type: Object,
    default: () => ({}),
  },
});
// console.log(props.houseData);
</script>

<style scoped lang="less">
.home-house-type3 {
  width: 50%;
  .inner {
    padding: 5px;
    .cover {
      img {
        width: 100%;
        height: 50%;
        border-radius: 15px;
      }
    }
    .info {
      .position {
        margin-bottom: 5px;
        img {
          width: 15px;
          height: 15px;
        }
      }
      color: #555;
      font-weight: 700;
      padding: 10px;
      .summaryText {
        font-size: 14px;
        margin-top: 2px;
      }
      .houseName {
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        //多行省略
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .priceInfo {
        display: flex;
        margin-top: 5px;
        .price {
          color: var(--primary-color);
          font-size: 15px;
        }
      }
    }
  }
}
</style>
