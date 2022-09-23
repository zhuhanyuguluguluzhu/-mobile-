import { defineStore } from "pinia";
import { getHotSuggests, getCategories, getHouseList } from "@/service/index";
const useHomeStore = defineStore("home", {
  state: () => ({
    allKeyPlace: [],
    categories: [],
    // 积累当前的房屋数据列表的页数
    currentPage: 1,
    houseList: [],
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests();
      this.allKeyPlace = res?.data;
    },
    async fetchcateGories() {
      const res = await getCategories();
      this.categories = res?.data;
    },
    async fetchHouseList() {
      const res = await getHouseList(this.currentPage);
      this.houseList.push(...res?.data);
      this.currentPage++;
      // console.log(this.houseList);
      // async 定义的函数会默认的返回一个Promise对象resolve的值
    },
  },
});

export default useHomeStore;
