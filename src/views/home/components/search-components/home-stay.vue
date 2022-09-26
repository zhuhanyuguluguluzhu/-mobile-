<template>
  <!-- 选择日期 -->
  <div class="search-stay bottom-gary-line" @click="showCalendar = true">
    <div class="stayTime">
      <span>入住</span>
      <div class="dateStay">{{ stayTime }}</div>
    </div>
    <div class="totalTime">共 {{ stayDays }} 晚</div>
    <div class="leaveTime">
      <span>离店</span>
      <div class="dateStay">{{ leaveTime }}</div>
    </div>
  </div>
  <!-- 日历 -->
  <van-calendar
    v-model:show="showCalendar"
    type="range"
    @confirm="onConfirm"
    color="var(--primary-color)"
  />
</template>

<script setup>
import { ref } from "vue";
import { formatDate, getIntervalDate } from "@/utils/formatDate";
import useMainStore from "@/stores/mainStore/mainStore";
import { storeToRefs } from "pinia";
import { computed } from "@vue/reactivity";
const mainStore = useMainStore();
const { nowDay, newDay } = storeToRefs(mainStore);
// console.log(nowDay, newDay);
//获取格式化入住时间和离店时间
const stayTime = computed(() => formatDate(nowDay.value));

const leaveTime = computed(() => formatDate(newDay.value));

// 计算天数
const stayDays = ref(getIntervalDate(nowDay.value, newDay.value));

//日历功能
const showCalendar = ref(false);
const onConfirm = (dates) => {
  // console.log(dates); //数组
  const selectDateStart = dates[0];
  const selectDateEnd = dates[1];
  // console.log(selectDateEnd);
  mainStore.nowDay = selectDateStart;
  mainStore.newDay = selectDateEnd;
  // 关闭日历
  showCalendar.value = false;

  // 计算选择后天数
  stayDays.value = getIntervalDate(selectDateStart, selectDateEnd);
};
</script>

<style scoped lang="less">
.search-stay {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  .stayTime {
    span {
      font-size: 14px;
      color: #666;
    }
    .dateStay {
      font-size: 16px;
      font-weight: 600;
      color: #444;
      margin-top: 5px;
    }
  }
  .leaveTime {
    span {
      font-size: 14px;
      color: #666;
    }
    .dateStay {
      font-size: 16px;
      font-weight: 600;
      color: #444;
      margin: 5px 20px 0 0;
    }
  }
  .totalTime {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
