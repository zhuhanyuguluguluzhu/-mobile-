<template>
  <div class="tab-bar">
    <!-- 这里的v-model 是组件的双向绑定 绑定值 和 监听值的变化 -->
    <!-- 子组件想要使用父组件的值,又想去改父组件的值 -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <van-tabbar-item
        v-for="(item, index) in tabbarData"
        :key="index"
        :to="item.path"
      >
        <!-- 这里的van-tabbar 是一个外部组件  给我们放置了卡槽  -->
        <!-- 插槽 是 父组件中 在 这个标签体 比如（<nav-bar >）中 防止了一些 元素 -->
        <!-- 然后在我们的 nav-bar 组件中 放置了 slot  -->
        <!-- span 是默认的默认的插槽   ico是vant的具名插槽 -->

        <span>{{ item.text }}</span>
        <template #icon>
          <img
            v-if="index !== currentIndex"
            :src="getAssetsURL(item.image)"
            alt=""
          />
          <img
            v-else="index === currentIndex"
            :src="getAssetsURL(item.imageActive)"
            alt=""
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>

  <!-- 在vite 环境下 动态图片的地址是解析不了的 -->
  <!-- 图片索引和当前的索引不相等 显示 无 active的图片 -->
  <!-- 点击了 使 图片索引和当前的索引相等 
         显示  active的图片 -->
  <!-- #region tabbar
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index, item)"
      >
        <img
          v-if="index !== currentIndex"
          :src="getAssetsURL(item.image)"
          alt=""
        />
        <img
          v-else="index === currentIndex"
          :src="getAssetsURL(item.imageActive)"
          alt=""
        />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
  #enregion -->
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import getAssetsURL from "@/utils/get_assets_img";

import { ref } from "vue";
// import { useRouter } from "vue-router";
const currentIndex = ref(0);

// const router = useRouter();
// const itemClick = (index, item) => {
//   currentIndex.value = index;
//   router.push(item.path);
// };
</script>

<style scoped lang="less">
.tab-bar {
  img {
    height: 30px;
  }
}

// .tab-bar {
//   position: fixed;
//   bottom: 5px;
//   left: 0;
//   display: flex;
//   width: 100%;
//   height: 50px;
//   border-top: 1px solid #ccc;

//   .tab-bar-item {
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;

//     //&.active ===  .tab-bar-item.active
//     &.active {
//       color: var(--primary-color);
//     }
//     img {
//       width: 35px;
//     }
//     .text {
//       font-size: 15px;
//     }
//   }
// }
</style>
