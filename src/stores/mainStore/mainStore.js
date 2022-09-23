import { defineStore } from "pinia";

const nowDay = new Date();

const newDay = new Date();
newDay.setDate(nowDay.getDate() + 1);

const useMainStore = defineStore("main", {
  state: () => ({
    //日期
    nowDay,
    newDay,
    //加载中
    isLoading: false,
  }),
  getters: {},
  actions: {},
});
export default useMainStore;
