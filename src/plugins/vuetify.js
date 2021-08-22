import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#00695C",
        secondary: "#1F2833",
        accent: "#004269",
        success: "#006928",
        warning: "#692800",
      },
    },
  },
});
