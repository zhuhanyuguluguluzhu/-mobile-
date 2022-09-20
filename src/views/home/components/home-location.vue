<template>
  <div class="location">
    <div class="city" @click="cityClick">{{ chooseCity.cityName }}</div>
    <div class="myLocation" @click="getMyPosition">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
//it be something wrong
const getMyPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功", res);
    },
    (err) => {
      console.log("获取位置失败", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};
//点击去city页面
const router = useRouter();
const cityClick = () => {
  router.push("/city");
};
// 显示 选择的城市
const cityStore = useCityStore();
const { chooseCity } = storeToRefs(cityStore);
</script>

<style scoped lang="less">
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 44px;
  .city {
    font-size: 15px;
    margin-left: 10px;
    color: #333;
  }
  .myLocation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #666;
    span {
      margin-right: 10px;
    }
    img {
      width: 20px;
    }
  }
}
</style>
