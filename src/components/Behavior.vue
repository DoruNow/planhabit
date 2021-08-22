<template>
  <TabComponent :config="Config[1]" :tabComponents="tabComponents" />
</template>

<script>
import TabComponent from "./TabComponent.vue";
import Config from "../assets/Config";

export default {
  components: {
    TabComponent,
  },
  data() {
    return {
      Config,
      tabComponents: [
        "BehaviorListComponent",
        "ExplanationComponent",
        "TODO",
        "TODO1",
      ],
    };
  },
};
</script>
