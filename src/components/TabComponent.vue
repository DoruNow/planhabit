<template>
  <v-card color="primary">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2">
        {{ config.title }}
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
      color="white"
      slider-color="white"
    >
      <v-tab v-for="tab in config.tabs" :key="tab.id">
        {{ tab.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="component in config.tabs" :key="component.id">
        <component :is="component.component"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import BehaviorListComponent from "./BehaviorListComponent.vue";
import ExplanationComponent from "./ExplanationComponent.vue";
import CreateNewConnections from "./CreateNewConnections.vue";

import TODO from "./TODO.vue";
import TODO1 from "./TODO1.vue";
import TODO2 from "./TODO2.vue";

import { mapState } from "vuex";
import Config from "../assets/Config";

export default {
  components: {
    BehaviorListComponent,
    ExplanationComponent,
    CreateNewConnections,
    TODO,
    TODO1,
    TODO2,
  },
  data() {
    return {
      tab: null,
    };
  },
  computed: {
    ...mapState(["selectedStep"]),
    config() {
      return Config[this.selectedStep];
    },
  },
};
</script>

<style lang="scss" scoped></style>
