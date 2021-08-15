import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    behaviorList: [
      { id: 0, position: 1, label: "Habit no. 1", value: "wake up" },
      { id: 1, position: 2, label: "Habit no. 2", value: "kiss miti" },
      { id: 2, position: 3, label: "Habit no. 3", value: "kiss Victor" },
      { id: 3, position: 4, label: "Habit no. 4", value: "kiss Victor1" },
      { id: 4, position: 5, label: "Habit no. 5", value: "kiss Victor2" },
      { id: 5, position: 6, label: "Habit no. 6", value: "kiss Victor3" },
    ],
    chainedBehaviorList: [],
    editedChainedBehaviorList: [],
  },
  mutations: {
    updateBehaviorList(state, payload) {
      state.behaviorList.push(payload);
    },
    resetBehaviorList(state) {
      state.behaviorList = [];
    },
    replaceBehaviorList(state, payload) {
      state.behaviorList = payload.payload;
    },
    setChainedBehaviorList(state, payload) {
      state.chainedBehaviorList = payload.payload;
    },
  },
  actions: {
    doChainHabits(context) {
      let l = context.state.behaviorList.length;
      const result = [];
      for (let i = 0; i < l; i++) {
        result.push([
          context.state.behaviorList[i],
          context.state.behaviorList[i + 1],
        ]);
      }
      result.pop();
      context.commit({
        type: "setChainedBehaviorList",
        payload: result,
      });
    },
  },
  modules: {},
});
