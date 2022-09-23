import { defineStore } from "pinia";
import { getDetailInfos } from "@/service/index";
const useDetailStore = defineStore("detail", {
  state: () => ({
    mainPart: [],
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId);
      this.mainPart = res.data;
    },
  },
});
export default useDetailStore;
