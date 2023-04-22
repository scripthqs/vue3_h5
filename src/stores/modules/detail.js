import { defineStore } from "pinia";
import { getDetailInfos } from "@/services";
const useDetailStore = defineStore("detail", {
  state: () => ({
    detailInfos: [],
  }),
  actions: {
    async fetchDetailInfo(id) {
      const res = await getDetailInfos(id);
      this.detailInfos = res.data;
    },
  },
});

export default useDetailStore;
