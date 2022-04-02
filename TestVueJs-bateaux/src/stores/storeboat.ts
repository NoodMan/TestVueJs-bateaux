import { defineStore } from "pinia";


export const useBoatsStore = defineStore({
  id: "boatId",
  state: () => ({
     boats: [],
    }
    ),
    persist: true, // pour percister les datas dans le store

  getters: {
    getBoats: (state) => state.boats,
  },
  actions: {},
});