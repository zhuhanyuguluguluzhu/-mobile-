<template>
  <div class="city-content">
    <van-index-bar :index-list="indexList">
      <div class="hot-city">
        <van-index-anchor index="热门" />
        <div class="hot-city-list">
          <template
            v-for="(hotCity, index) in hotCityData"
            :key="hotCity.cityId"
          >
            <div class="city-name" @click="chooseCity(hotCity)">
              {{ hotCity.cityName }}
            </div>
          </template>
        </div>
      </div>
      <div class="city-list">
        <template v-for="(group, index) in currentGroup" :key="index">
          <div class="group-item">
            <van-index-anchor :index="group.group" />
            <div class="cities-list">
              <template
                v-for="(city, index1) in group.cities"
                :key="city.cityId"
              >
                <van-cell :title="city.cityName" @click="chooseCity(city)" />
              </template>
            </div>
          </div>
        </template>
      </div>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city/city";
// 定义prop
const props = defineProps({
  currentGroup: {
    type: Array,
    default: () => [],
  },
  hotCityData: {
    type: Array,
    default: () => [],
  },
});
// console.log(props.currentGroup);

//动态索引
const indexList = computed(() => {
  const list = props.currentGroup.map((item) => item.group);
  list.unshift("#");
  return list;
});

//选择城市在首页显示
const cityStore = useCityStore();
const router = useRouter();
const chooseCity = (city) => {
  // console.log(city);
  // 传给 cityStore
  cityStore.chooseCity.cityName = city.cityName;
  router.back();
};
</script>

<style scoped lang="less">
.hot-city-list {
  display: flex;
  flex-wrap: wrap;
  .city-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff3ec;
    margin: 5px;
  }
}
</style>
