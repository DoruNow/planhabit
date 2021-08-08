import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    behaviorList: [],
  },
  mutations: {
    updateBehaviorList(state, payload) {
      state.behaviorList.push(payload);
    },
  },
  actions: {},
  modules: {},
});
