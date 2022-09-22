import { defineStore } from "pinia";
const useIsloading = defineStore("search", {
  state: () => ({
    isLoading: true,
  }),
  getters: {},
  actions: {},
});
export default useIsloading;
