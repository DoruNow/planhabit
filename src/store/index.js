import Vue from "vue"
import Vuex from "vuex"
import mockData from "../assets/mockData.json"
import Config from "../assets/Config.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allBehaviorLists: mockData,
    menuItems: [],
    selectedBehaviorList: mockData.behaviorLists[0],
    selectedStep: null,
    uniqueHabitBuildingBlocks: mockData.uniqueHabitBuildingBlocks,
  },
  getters: {
    behaviorNamesList: (state) => {
      return state.allBehaviorLists.map((list) => list.listName)
    },
    behaviorListLength: (state) => {
      return state.selectedBehaviorList.behaviorList.length
    },
    isBehaviorList: (state) => {
      return state.selectedBehaviorList.behaviorList.length ? true : false
    },
  },
  mutations: {
    updateBehaviorList(state, payload) {
      state.selectedBehaviorList.behaviorList.push(payload)
    },
    resetBehaviorList(state) {
      state.selectedBehaviorList.behaviorList = []
    },
    setBehaviorList(state, payload) {
      state.selectedBehaviorList.behaviorList = payload
    },
    setSelectedStep(state, payload) {
      state.selectedStep = payload
    },
    setMenuItems(state, payload) {
      state.menuItems = payload
    },
    setUniqueHabitBuildingBlocks(state, payload) {
      state.uniqueHabitBuildingBlocks = payload
    },
  },
  actions: {
    updateSelectedStep(context, payload) {
      context.commit("setSelectedStep", payload)
    },
    updateSelectedBehaviorList(context, { newList, index }) {
      newList.splice(index, 0, {
        prefix: "If I",
        firstEvent: "look at the sky",
        connection: "then I will",
        secondEvent: "count clouds",
      })
      newList.forEach((row, index) => {
        row.label = `Rule no. ${index}`
      })
      context.commit("setBehaviorList", { newList })
    },
    createMenuItems(context) {
      const result = []
      Config.map((item) => result.push(item.menuItem))
      context.commit("setMenuItems", result)
    },
  },
  modules: {},
})
