<template>
  <div class="clickToSearch" @click="toSearch">开始搜索</div>
</template>

<script setup>
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "vue-router";
import { computed } from "vue";
import useMainStore from "@/stores/mainStore/mainStore";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { nowDay, newDay } = storeToRefs(mainStore);
const stayTime = computed(() => formatDate(nowDay.value));
// console.log(stayTime);
const leaveTime = computed(() => formatDate(newDay.value));
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
