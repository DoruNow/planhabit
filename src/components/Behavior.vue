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
          <v-text-field
            :label="label"
            v-model="nextHabit.value"
            v-on:keyup.enter="saveHabit(nextHabit)"
            autocomplete="off"
          ></v-text-field>
          <v-row>
            <v-col md="8" offset-md="2" class="d-flex justify-space-around">
              <v-btn
                elevation="4"
                large
                rounded
                color="secondary"
                @click="$store.commit('resetBehaviorList')"
                v-if="isBehaviorList"
              >
                Reset
              </v-btn>
              <!-- <v-btn
                elevation="4"
                large
                rounded
                color="success"
                @click="saveHabit(nextHabit)"
              >
                Save
              </v-btn> -->
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-col>
    <BheaviorListComponent />
  </v-row>
</template>
<script>
import BheaviorListComponent from './BehaviorListComponent.vue'
export default {
  components: {
    BheaviorListComponent
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
        id: this.behaviorList.length + 1,
        postion: this.behaviorList.length,
        label: `Habit no. ${this.behaviorList.length}`,
        value: this.nextHabit.value,
      });
      this.nextHabit.value = "";
    },
  },
  computed: {
    label() {
      let label = `Habit no. ${this.behaviorList.length + 1}`;
      if (!this.isBehaviorList) label = "Type in your habit then hit enter";
      return label;
    },
    behaviorList() {
      return this.$store.state.behaviorList;
    },
    isBehaviorList() {
      return this.behaviorList.length ? true : false;
    },
  },
};
</script>
