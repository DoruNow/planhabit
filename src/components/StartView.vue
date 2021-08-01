<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link  @click="selected = text">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
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
                <component :is="selected"></component>
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
export default {
  components: {Start, Behavior},
  data: () => ({
    drawer: null,
    selected: 'Start',
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
    ],
    icons: ["mdi-inbox-arrow-down"],
  }),
  computed: {
    links() {
      const links = [];
      this.categories.forEach((category) => {
        links.push([this.icons[0], category]);
      });
      return links;
    },
  },
};
</script>

<style lang="sass" scoped>
.v-main
  padding: 0px 10px!important
.more
  margin-right: 20px
.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .3s ease
.component-fade-enter, .component-fade-leave-to
  opacity: 0
</style>
