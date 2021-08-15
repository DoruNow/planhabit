<template>
  <v-row>
    <v-col v-if="!start">
      <div>
        <v-card-text class="text-subtitle-1">
          What we achieved so far is to write down a chain of habits. A very
          effective way of introducing new habits is to insert them into this
          chain. Starting small is important so try to keep it simple. Only one
          change for now is a solid choice. An equally good choice is to aim to
          become consistent with the Behavior list as it is.
        </v-card-text>
        <v-card-text class="text-subtitle-1">
          What we need to understand here is that the most important aspect of
          habit creation is a good system, not the goal habit itself. We have to
          respect the complexity of our brain and avoid rushing into too many
          changes at once. I hope I convinced you to start simple.
        </v-card-text>
        <v-card-text class="text-subtitle-1">
          Now let's jump in and write our Behavior list as a chain, and if you
          decide to add your first new habit, let's add that sucker in as well.
        </v-card-text>
        <v-card-text class="text-subtitle-1 d-flex flex-column">
          The template for chaining habits is this:
          <v-text-field> After [I wake up], I [do Habit No. 1] </v-text-field>
          <v-text-field>
            After [do Habit No. 1], I [do Habit No. 2]
          </v-text-field>
        </v-card-text>
      </div>
      <v-col v-if="!start" class="d-flex justify-center flex-row">
        <v-btn elevation="4" large color="success" @click="start = true">
          Start
        </v-btn>
      </v-col>
    </v-col>
    <v-col v-if="start" class="pa-6">
      <v-row class="pa-6">
        <v-col md="6">
          <v-text-field
            outlined
            :clear-icon="focused ? 'mdi-close-circle' : ''"
            clearable
            @focus="focused = true"
            @blur="focused = false"
            class="text-h5"
            label="List Name:"
            :value="selectedBehaviorList.listName"
            :v-model="selectedBehaviorList.listName"
            v-on:keyup.enter="focused = false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item
              v-for="(chainedHabit, index) in chainedBehaviorList"
              :key="index"
            >
              <v-row>
                <v-col class="d-flex flex-row">
                  <v-text-field v-model="afterI" :value="afterI"
                    >After I</v-text-field
                  >
                  <v-text-field
                    v-model="chainedHabit[0].value"
                    :value="chainedHabit[0].value"
                    type="text"
                    @click:append-outer="addRow"
                  ></v-text-field>
                  <v-text-field v-model="iWill" :value="iWill"
                    >, I will</v-text-field
                  >
                  <v-text-field
                    v-model="chainedHabit[1].value"
                    append-outer-icon="mdi-subdirectory-arrow-left"
                    :value="chainedHabit[1]"
                    type="text"
                    @click:append-outer="addRow(index)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row v-if="start" mt="6">
        <v-col class="d-flex justify-center flex-row">
          <v-btn elevation="4" large color="success" @click="$emit('nextStep')">
            I'm happy with it
            <v-icon right> mdi-content-save </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      start: true,
      afterI: "After I",
      iWill: "I will",
      focused: false,
    };
  },
  methods: {
    addRow(index) {
      const result = [],
        sp = this.$store.state.selectedBehaviorList.behaviorList;
      sp.splice(index + 1, 0, {
        value: "",
      });
      sp.forEach((habit, index) => {
        result.push({
          id: index,
          position: index + 1,
          label: `Habit no. ${index + 1}`,
          value: habit.value,
        });
      });
      this.$store.commit({
        type: "setBehaviorList",
        payload: result,
      });
      this.$store.dispatch("doChainHabits");
    },
  },
  computed: {
    ...mapState(["selectedBehaviorList", "chainedBehaviorList"]),
    showSaveIcon() {
      if (this.focused) return "mdi-content-save";
      return "";
    },
  },
  mounted() {
    this.$store.dispatch("doChainHabits");
  },
};
</script>

<style lang="scss" scoped></style>
