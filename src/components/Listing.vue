<template>
  <v-row>
    <v-col v-if="!start">
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
        <span> After [I wake up], I [do Habit No. 1] </span>
        <span> After [do Habit No. 1], I [do Habit No. 2] </span>
      </v-card-text>
      <v-row v-if="!start">
        <v-col class="d-flex justify-center flex-row">
          <v-btn
            elevation="4"
            large
            rounded
            color="success"
            @click="start = true"
          >
            Start
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col v-if="start" class="pa-6">
      <v-text-field
        v-for="habit in this.$store.state.behaviorList"
        :key="habit.position"
        :label="habit.label"
        v-model="habit.value"
        autocomplete="off"
      ></v-text-field>
      <v-row v-if="start" mt="6">
        <v-col class="d-flex justify-center flex-row">
          <v-btn
            elevation="4"
            large
            rounded
            color="success"
            @click="chainCompleted = true"
          >
            I'm happy with it
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col v-if="start" class="pa-6">
      <v-text-field
        v-for="habit in this.$store.state.behaviorList"
        :key="habit.position"
        :label="habit.label"
        v-model="habit.value"
        autocomplete="off"
      ></v-text-field>
      <v-row v-if="start" mt="6">
        <v-col class="d-flex justify-center flex-row">
          <v-btn
            elevation="4"
            large
            rounded
            color="success"
            @click="chainCompleted = true"
          >
            I'm happy with it
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      start: false,
      chainCompleted: false,
    };
  },
  // computed: {
  //   behaviorChain() {
  //     let chain = 
  //     return this.data 
  //   }
  // },
};
</script>

<style lang="scss" scoped></style>
