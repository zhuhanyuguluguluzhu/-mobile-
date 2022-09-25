<template>
  <div class="detail-map">
    <div class="baidu" ref="mapRef"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  position: {
    type: Object,
    defualt: () => ({}),
  },
});
// console.log(props.position);
// 获取baidu的dom
const mapRef = ref();
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);
  const point = new BMapGL.Point(
    props.position.longitude,
    props.position.latitude
  );
  map.centerAndZoom(point, 15);
  var marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker);
});
</script>

<style scoped lang="less">
.baidu {
  margin-top: 20px;
  width: 100%;
  height: 250px;
}
</style>
