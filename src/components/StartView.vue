<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <h2>PlanHabits.com</h2>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="category in categories"
          :key="category.name"
          link
          @click="selected = category"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ category.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col cols="12">
            <transition name="component-fade" mode="out-in" :appear="true">
              <v-container>
                <v-card>
                  <v-card-title class="indigo white--text text-h4">
                    {{ selected.title }}
                  </v-card-title>
                  <component :is="selected.component"></component>
                  <v-row>
                    <v-col
                      md="4"
                      offset-md="8"
                      class="d-flex justify-space-around"
                    >
                      <v-btn
                        elevation="4"
                        large
                        rounded
                        color="success"
                        @click="nextStep(0)"
                        v-if="showPreviousButton"
                      >
                        prev
                      </v-btn>
                      <v-btn
                        elevation="4"
                        large
                        rounded
                        color="success"
                        @click="nextStep()"
                        v-if="showNextButton"
                      >
                        next
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
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
import categories from "./Categories";

export default {
  components: { Start, Behavior, Listing },
  data: () => ({
    drawer: null,
    selected: categories[2],
    categories,
  }),
  methods: {
    nextStep(next = true) {
      if (next) this.selected = this.nextCategory;
      if (!next) this.selected = this.previousCategory;
    },
  },
  computed: {
    nextCategory() {
      let pos = 0;
      for (let category of this.categories) {
        pos++;
        if (category.component === this.selected.component) break;
      }
      return this.categories[pos];
    },
    previousCategory() {
      let pos = 0;
      for (let category of this.categories) {
        pos++;
        if (category.component === this.selected.component) break;
      }
      return this.categories[pos - 2];
    },
    showNextButton() {
      let show = true;
      if (this.selected.component === "Reward") show = false;
      return show;
    },
    showPreviousButton() {
      let show = true;
      if (this.selected.component === "Start") show = false;
      return show;
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
