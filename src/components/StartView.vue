<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <h2>PlanHabits.com</h2>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="text in categories"
          :key="text"
          link
          @click="selected = text"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col cols="12">
            <transition name="component-fade" mode="out-in" :appear="true">
              <component
                :is="selected"
                v-on:nextStep="nextStep($event)"
              ></component>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Start from "./Start";
import Behavior from "./Behavior";
import Listing from "./Listing";
export default {
  components: { Start, Behavior, Listing },
  data: () => ({
    drawer: null,
    selected: "Start",
    categories: [
      "Start",
      "Behavior",
      "Listing",
      "Environment",
      "Tweak for dopamine",
      "Who's around me",
      "Downscale",
      "Reward",
      "Track",
      "Repeat",
      "End",
      "Settings",
      "Feedback",
    ],
  }),
  methods: {
    nextStep(step) {
      this.selected = step;
    },
  },
};
</script>

<style lang="sass" scoped>
.v-list-item__icon
  margin: 0!important
.v-main
  padding: 0px 10px!important
.more
  margin-right: 20px
.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .3s ease
.component-fade-enter, .component-fade-leave-to
  opacity: 0
</style>
