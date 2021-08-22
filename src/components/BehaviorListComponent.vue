<template>
  <v-container grid-list-xs>
    <v-row class="pt-6">
      <v-col>
        <v-row>
          <v-col :md="isBehaviorList ? 12 : 6">
            <v-select
              v-if="allBehaviorLists"
              :items="behaviorNamesList"
              label="Select an existing List"
              outlined
              solo
              @change="selectBehaviorList"
              md="4"
            ></v-select>
          </v-col>
        </v-row>
        <ListComponent :list="selectedBehaviorList.behaviorList" />
        <v-text-field
          outlined
          :label="label"
          v-model="nextHabit.value"
          v-on:keyup.enter="saveHabit(nextHabit)"
          autocomplete="off"
        ></v-text-field>
        <!-- refactor to component? 2buttons -->
        <v-row>
          <v-col class="d-flex justify-space-between">
            <v-btn
              large
              text
              @click="$store.commit('resetBehaviorList')"
              v-if="isBehaviorList"
              color="warning"
            >
              Reset
            </v-btn>
            <v-btn
              color="primary"
              @click="saveHabit(nextHabit)"
              v-if="isBehaviorList || behaviorListLength"
            >
              I'm happy with my list
              <v-icon right color="accent"> mdi-content-save </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListComponent from "./ListComponent.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      nextHabit: { value: "" },
    };
  },
  methods: {
    saveHabit() {
      if (this.nextHabit.value === "") return;
      this.$store.commit("updateBehaviorList", {
        id: this.behaviorListLength,
        position: this.behaviorListLength + 1,
        label: `Habit no. ${this.behaviorListLength + 1}`,
        value: this.nextHabit.value,
      });
      this.nextHabit.value = "";
    },
    selectBehaviorList(a) {
      let b = this.allBehaviorLists.filter((list) => list.listName === a);
      this.$store.commit({
        type: "setBehaviorList",
        payload: b[0].behaviorList,
      });
    },
  },
  computed: {
    ...mapGetters([
      "behaviorNamesList",
      "behaviorListLength",
      "isBehaviorList",
    ]),
    ...mapState(["allBehaviorLists", "selectedBehaviorList"]),
    label() {
      let label;
      this.isBehaviorList
        ? (label = `Habit no. ${this.behaviorListLength + 1}`)
        : (label = "Type in your habit then hit enter");
      return label;
    },
  },
};
</script>

<style lang="scss" scoped></style>
