<template>
  <div class="clickToSearch" @click="toSearch">开始搜索</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import emitter from "@/utils/eventBus/eventBus";

//接受数据
const stayTime = ref();
const leaveTime = ref();

emitter.on("clickToSearch", (data) => {
  // console.log(data);
  stayTime.value = data[0].value;
  leaveTime.value = data[1].value;
  // console.log(stayTime);
});

const router = useRouter();
const toSearch = () => {
  router.push({
    path: "/search",
    query: {
      stayTime: stayTime.value,
      leaveTime: leaveTime.value,
    },
  });
};
</script>

<style scoped>
.clickToSearch {
  width: 342px;
  height: 38px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background-image: var(--theme-linear-gradient);
  margin-top: 20px;
}
</style>
