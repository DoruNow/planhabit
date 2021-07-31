<template>
  <v-app>
    <v-main>
      <StartComponent />
    </v-main>
  </v-app>
</template>

<script>
import StartComponent from "./components/StartComponent";

export default {
  name: "App",

  components: {
    StartComponent,
  },

  data: () => ({
    //
  }),
};
</script>
