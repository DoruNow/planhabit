<template>
  <v-row>
    <v-col>
      <div>
        <v-card-text class="font-weight-medium text-subtitle-1">
          Planning the future is sometimes easier when we understand the
          present. Starting small is very important.
        </v-card-text>
        <v-card-text class="text-subtitle-1">
          Let's write down some habits we already have in place, in the order of
          their occurence.
        </v-card-text>
        <v-card-text class="text-subtitle-1">
          Let's start by focusing on a part of your day you want to improve.
          Choose a part of the day where your schedule is the most structured
          and can be improved. I guess for most of us mornings are a good
          candidate.
        </v-card-text>
        <v-card-text class="d-flex flex-column">
          <v-row>
            <v-col :md="isBehaviorList ? 12 : 6">
              <v-select
                :items="behaviorNamesList"
                label="Select an existing List"
                solo
                @change="selectBehaviorList"
                class="pt-6 pr-6"
                md="4"
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field
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
              >
                Reset
              </v-btn>
              <v-btn
                class="white--text"
                color="green darken-1"
                depressed
                @click="saveHabit(nextHabit)"
              >
                Continue
                <v-icon right> mdi-content-save </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-col>
    <v-col v-if="isBehaviorList">
      <ListComponent :list="selectedBehaviorList.behaviorList" :title="title" />
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import ListComponent from "./ListComponent.vue";
export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      nextHabit: { value: "" },
      title: "Current habit list",
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
      console.log(this.a);
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
