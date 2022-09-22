import { defineStore } from "pinia";
import { formatDate } from "@/utils/formatDate";
// import { ref } from "vue";
const nowDay = new Date();
const stayTime = formatDate(nowDay);

const newDay = new Date().setDate(nowDay.getDate() + 1);
const leaveTime = formatDate(newDay);

const useSearch = defineStore("search", {
  state: () => ({
    nowDay,
    newDay,
    stayTime,
    leaveTime,
  }),
  getters: {},
  actions: {},
});
export default useSearch;
