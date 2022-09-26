import { defineStore } from "pinia";

import { getCityAll } from "@/service/index";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    chooseCity: { cityName: "杭州" },
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll();
      this.allCities = res?.data;
    },
  },
});

export default useCityStore;
