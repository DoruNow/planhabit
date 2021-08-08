import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    behaviorList: [
      { id: 1, postion: 0, label: "Habit no. 0", value: "wake up" },
      { id: 2, postion: 1, label: "Habit no. 1", value: "kiss miti" },
      { id: 3, postion: 2, label: "Habit no. 2", value: "kiss Victor" },
    ],
  },
  mutations: {
    updateBehaviorList(state, payload) {
      state.behaviorList.push(payload);
    },
    resetBehaviorList(state) {
      state.behaviorList = [];
    },
  },
  actions: {},
  modules: {},
});
