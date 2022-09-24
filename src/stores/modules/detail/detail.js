import { defineStore } from "pinia";
import { getDetailInfos } from "@/service/index";
const useDetailStore = defineStore("detail", {
  state: () => ({
    allData: {},
    mainPart: [],
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId);
      this.allData = res?.data;
      this.mainPart = res?.data?.mainPart;
    },
  },
});
export default useDetailStore;
