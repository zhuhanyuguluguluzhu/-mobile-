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
import { ref, onMounted } from "vue";
import { formatDate, getIntervalDate } from "@/utils/formatDate";
import emitter from "@/utils/eventBus/eventBus";
//获取入住时间和离店时间
const nowDay = new Date();
const stayTime = ref(formatDate(nowDay));
// console.log(stayTime.value);
const newDay = new Date().setDate(nowDay.getDate() + 1);
const leaveTime = ref(formatDate(newDay));

//日历功能
const showCalendar = ref(false);
const onConfirm = (dates) => {
  // console.log(dates); //数组
  const selectDateStart = dates[0];
  const selectDateEnd = dates[1];
  // console.log(selectDateEnd);
  stayTime.value = formatDate(selectDateStart);
  leaveTime.value = formatDate(selectDateEnd);
  showCalendar.value = false;

  // 计算选择后天数
  stayDays.value = ref(getIntervalDate(selectDateStart, selectDateEnd));
};
// 计算天数
const stayDays = ref(getIntervalDate(nowDay, newDay));

//事件总线给home-search 发送数据
onMounted(() => {
  emitter.emit("clickToSearch", [stayTime, leaveTime]);
});
// defineEmits()
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
