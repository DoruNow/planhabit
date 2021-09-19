<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <h2>PlanHabits.com</h2>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(menuItem, index) in menuItems"
          :key="menuItem"
          link
          @click="updateSelectedStep(index)"
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
            <TabComponent />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  components: { TabComponent: () => import("./TabComponent.vue") },
  data: () => ({
    drawer: null,
    selected: 2,
  }),
  methods: {
    step(next = true) {
      if (next) this.selected++
      if (!next) this.selected--
      this.updateSelectedStep(this.selected)
    },
    ...mapActions(["updateSelectedStep", "createMenuItems"]),
  },
  computed: {
    ...mapState(["menuItems", "selectedStep"]),
  },
  mounted() {
    this.createMenuItems()
    this.updateSelectedStep(this.selected)
  },
}
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
