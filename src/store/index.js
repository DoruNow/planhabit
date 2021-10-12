import Vue from 'vue'
import Vuex from 'vuex'
import mockData from '../assets/mockData.json'
import Config from '../assets/Config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    behaviorListsIndexed: mockData.behaviorLists,
    behaviorListRaw: mockData.behaviorListRaw,
    uniqueHabitBuildingBlocks: mockData.uniqueHabitBuildingBlocks,
    menuItems: [],
    selectedBehaviorList: { behaviorList: [] },
    selectedStep: 1,
    raw: null
  },
  getters: {
    behaviorNamesList: (state) => {
      const names = []
      state.behaviorListsIndexed.forEach((list) => names.push(list.listName))
      return names
    },
    behaviorListsIndexedLength: (state) => {
      return state.behaviorListsIndexed.length
    },

    behaviorListLength: (state) => {
      return state.selectedBehaviorList.behaviorList.length
    },
    isBehaviorList: (state) => {
      return state.selectedBehaviorList.behaviorList.length ? true : false
    },

    behaviorListRawLength: (state) => {
      return state.behaviorListRaw.length
    },
    isBehaviorListRaw: (state) => {
      return state.behaviorListRaw.length ? true : false
    },
  },
  mutations: {
    updateBehaviorListRaw(state, payload) {
      state.behaviorListRaw.push(payload)
    },
    addToBehaviorListRaw(state, payload) {
      state.behaviorListRaw.push(payload)
    },
    undoBehaviorListRaw(state) {
      state.behaviorListRaw.pop()
    },
    resetBehaviorList(state) {
      state.behaviorListRaw = []
    },
    setBehaviorList(state, payload) {
      state.selectedBehaviorList = state.behaviorListsIndexed[payload]
    },
    setRaw(state, payload) {
      state.raw = payload
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
    setSelectedBehaviorListName(state, payload) {
      state.selectedBehaviorList.listName = payload.listName
    },
    updateAppData(state, payload) {
      Object.assign(state.data, payload)
    }
  },
  actions: {
    updateSelectedStep(context, payload) {
      context.commit('setSelectedStep', payload)
    },
    updateSelectedBehaviorList(context, { newList, index }) {
      newList.splice(index, 0, {
        prefix: 'If I',
        firstEvent: 'look at the sky',
        connection: 'then I will',
        secondEvent: 'count clouds',
      })
      newList.forEach((row, index) => {
        row.label = `Rule no. ${index}`
      })
      context.commit('setBehaviorList', { newList })
    },
    createMenuItems(context) {
      const result = []
      Config.map((item) => result.push(item.menuItem))
      context.commit('setMenuItems', result)
    },
  },
  modules: {},
})
