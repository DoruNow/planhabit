<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        {{ Config.behavior.title }}
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in Config.behavior.tabs" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card color="basil" flat>
          <ListComponent
            :list="selectedBehaviorList.behaviorList"
            :title="title"
          />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import ListComponent from "./ListComponent.vue";
import Config from "../assets/Config.json";

export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      nextHabit: { value: "" },
      tab: null,
      Config,
    };
  },
  methods: {
    saveHabit() {
      if (this.nextHabit.value === "") return;
      this.$store.commit("updateBehaviorList", {
        id: this.behaviorListLength,
        position: this.behaviorListLength + 1,
        label: `Habit no. ${this.behaviorListLength + 1}`,
        value: this.nextHabit.value,
      });
      this.nextHabit.value = "";
    },
    selectBehaviorList(a) {
      console.log(this.a);
      let b = this.allBehaviorLists.filter((list) => list.listName === a);
      this.$store.commit({
        type: "setBehaviorList",
        payload: b[0].behaviorList,
      });
    },
  },
  computed: {
    ...mapGetters([
      "behaviorNamesList",
      "behaviorListLength",
      "isBehaviorList",
    ]),
    ...mapState(["allBehaviorLists", "selectedBehaviorList"]),
    label() {
      let label;
      this.isBehaviorList
        ? (label = `Habit no. ${this.behaviorListLength + 1}`)
        : (label = "Type in your habit then hit enter");
      return label;
    },
  },
};
</script>
