<template>
  <TabComponent :config="Config[0]" :tabComponents="tabComponents" />
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
      tabComponents: ["TODO", "ExplanationComponent", "TODO1", "TODO2"],
    };
  },
};
</script>
