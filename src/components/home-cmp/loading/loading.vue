<template>
  <div class="isLoading" v-show="mainStore.isLoading" @click="close">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/mainStore/mainStore";

const mainStore = useMainStore();
const close = () => {
  mainStore.isLoading = false;
};
</script>

<style scoped lang="less">
.isLoading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) no-repeat 100% / 100%;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
