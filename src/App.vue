<template>
  <v-app>
    <v-main>
      <StartView />
    </v-main>
  </v-app>
</template>

<script>
import StartView from "./components/StartView";

export default {
  name: "App",

  components: {
    StartView,
  },

  data: () => ({
    //
  }),
};
</script>
