import Vue from "vue";
import Vuex from "vuex";
import mockData from "../assets/mockData.json"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allBehaviorLists: mockData,
    selectedBehaviorList: mockData[0],
    chainedBehaviorList: [],
    editedChainedBehaviorLists: [],
  },
  getters: {
    behaviorNamesList: state => {
      return state.allBehaviorLists.map(list => list.listName)
    },
    editedChainedBehaviorNamesList: state => {
      return state.editedChainedBehaviorLists.map(list => list.listName)
    },
    behaviorListLength: state => {
      return state.selectedBehaviorList.behaviorList.length;
    },
    isBehaviorList: state => {
      return state.selectedBehaviorList.behaviorList.length ? true : false;
    }
  },
  mutations: {
    updateBehaviorList(state, payload) {
      state.selectedBehaviorList.behaviorList.push(payload);
    },
    resetBehaviorList(state) {
      state.selectedBehaviorList.behaviorList = [];
    },
    setBehaviorList(state, payload) {
      state.selectedBehaviorList.behaviorList = payload.payload;
    },
    setChainedBehaviorList(state, payload) {
      state.chainedBehaviorList = payload.payload;
    },
  },
  actions: {
    doChainHabits(context) {
      let l = context.state.selectedBehaviorList.behaviorList.length;
      const result = [];
      for (let i = 0; i < l; i++) {
        result.push([
          context.state.selectedBehaviorList.behaviorList[i],
          context.state.selectedBehaviorList.behaviorList[i + 1],
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
