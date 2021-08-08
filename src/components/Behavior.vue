<template>
  <v-container>
    <v-card>
      <v-card-title class="indigo white--text text-h4">
        Where are we at right now?
      </v-card-title>
      <v-row>
        <v-col>
          <div>
            <v-card-text class="font-weight-medium text-subtitle-1">
              Planning the future is sometimes easier when we understand the
              present. Starting small is very important.
            </v-card-text>
            <v-card-text class="text-subtitle-1">
              Let's write down some habits we already have in place, in the
              order of their occurence.
            </v-card-text>
            <v-card-text class="text-subtitle-1">
              Let's start by focusing on a part of your day you want to improve.
              Choose a part of the day where your schedule is the most
              structured and can be improved. I guess for most of us mornings
              are a good candidate.
            </v-card-text>
            <v-card-text class="d-flex flex-column">
              <v-text-field
                :label="label"
                v-model="nextHabit.value"
              ></v-text-field>
              <v-btn color="success" @click="saveHabit(nextHabit)">
                Save
              </v-btn>
            </v-card-text>
          </div>
        </v-col>
        <v-col>
          <v-list class="d-flex flex-column justify-center">
            <span class="text-h5">Current Habit List</span>
            <v-list-item
              v-for="habit in this.$store.state.behaviorList"
              :key="habit.position"
            >
              {{ habit.value }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="1" offset-md="10">
          <v-btn color="success" @click="$emit('nextStep', 'Listing')"
            >next</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      behaviorList: {},
      nextHabit: {},
    };
  },
  methods: {
    saveHabit() {
      this.$store.commit("updateBehaviorList", {
        postion: this.$store.state.behaviorList.length,
        label: `Habit no. ${this.$store.state.behaviorList.length}`,
        value: this.nextHabit.value,
      });
      this.nextHabit.value = "";
    },
  },
  computed: {
    label() {
      return `Habit no. ${this.$store.state.behaviorList.length + 1}`;
    },
  },
};
</script>
