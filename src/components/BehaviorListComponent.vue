<template>
  <v-row>
    <v-col>
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
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>