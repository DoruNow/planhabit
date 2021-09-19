<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <h2>PlanHabits.com</h2>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="menuItem in menuItems"
          :key="menuItem"
          link
          @click="selectMenuItem(menuItem)"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menuItem }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6">
        <v-row>
          <v-col cols="12">
            <TabComponent
              :config="Config[$store.state.selectedStep]"
              v-on:selectStep="selected = $event"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Config from "../assets/Config";

export default {
  components: { TabComponent: () => import("./TabComponent.vue") },
  data: () => ({
    Config,
    drawer: null,
    selected: 1,
  }),
  methods: {
    step(next = true) {
      if (next) this.selected++;
      if (!next) this.selected--;
      this.$store.commit("setSelectedStep", this.selected);
    },
    selectMenuItem(menuItem) {
      let index = this.menuItems.findIndex((item) => item === menuItem);
      this.$store.commit("setSelectedStep", {
        payload: index,
      });
    },
  },
  computed: {
    ...mapState(["menuItems", "selectedStep"]),
  },
  mounted() {
    this.$store.commit("setSelectedStep", { payload: this.selected });
    this.$store.commit("setMenuItems");
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
