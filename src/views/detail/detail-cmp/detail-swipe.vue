<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <template v-for="(pic, index) in swipePicData" :key="index">
        <van-swipe-item class="pic">
          <img :src="pic.url" />
        </van-swipe-item>
      </template>
      <!-- 作用域插槽 传过来一个props-->
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup">
            <span
              class="item"
              :class="{
                //当前的active索引
                active: swipePicData[active]?.enumPictureCategory == key,
              }"
            >
              {{ formatData(value[0].title) }}
            </span>
            <span
              class="count"
              v-if="swipePicData[active]?.enumPictureCategory == key"
            >
              {{ getIndexCategory(swipePicData[active]) }} / {{ value.length }}
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  swipePicData: {
    type: Array,
    default: () => [],
  },
});

// 取消[]:
function formatData(data) {
  return data.replace("【", "").replace("】", "").replace("：", "");
}
//获取当前分类的索引
function getIndexCategory(item) {
  const valueArray = swipeGroup[item.enumPictureCategory];
  return valueArray.findIndex((data) => data === item) + 1;
}

//对数据进行转换
const swipeGroup = {};
for (const item of props.swipePicData) {
  // 拿key 对应的数组
  let valueArray = swipeGroup[item.enumPictureCategory];
  // 第一次valueArray 是没有值的 因为swipegroup没有属性
  if (!valueArray) {
    // valueArray = [];
    // key --> value
    swipeGroup[item.enumPictureCategory] = valueArray = [];
  }
  valueArray.push(item);
}
// console.log(swipeGroup);
// for (const item of props.swipePicData) {
//   swipeGroup[item.enumPictureCategory] = [];
// }
// for (const item of props.swipePicData) {
//   // 2分类是key value是数组
//   const valueArray = swipeGroup[item.enumPictureCategory];
//   valueArray.push(item);
</script>

<style scoped lang="less">
.swipe {
  // margin-top: 10px;
  .pic {
    img {
      width: 100%;
    }
  }
  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 10px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    .item {
      margin: 0 3px;

      &.active {
        background-color: #fff;
        color: #000;
        padding: 2px 5px;
        border-radius: 10px;
      }
      span {
        padding: 2px 0;
      }
    }
  }
}
</style>
