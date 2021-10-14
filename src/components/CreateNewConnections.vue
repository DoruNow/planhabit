<template>
  <v-row>
    <v-col class="pa-6">
      <v-row class="pa-6">
        <v-col md="6">
          <v-text-field
            outlined
            class="text-h5"
            label="List Name:"
            :value="selectedBehaviorList.listName"
            :v-model="newLists.listName"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <ListComponent :raw="false" />
      </v-row>
      <v-row class="d-flex flex-row">
        <v-select
          :items="uniqueHabitBuildingBlocks.prefixes"
          label="Prefix"
          solo
        ></v-select>
        <v-select
          :items="behaviorListRaw"
          item-text="value"
          item-value="id"
          label="Habit"
          solo
        ></v-select>
        <v-select
          :items="uniqueHabitBuildingBlocks.connections"
          label="Connection"
          solo
        ></v-select>
        <v-select
          :items="behaviorListRaw"
          item-text="value"
          item-value="id"
          label="Habit"
          solo
        ></v-select>
      </v-row>

      <v-row mt="6">
        <v-col class="d-flex justify-center flex-row">
          <v-btn
            elevation="4"
            large
            color="success"
            @click="updateSelectedStep(1)"
          >
            I'm happy with it
            <v-icon right> mdi-content-save </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ListComponent from './ListComponent.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      newLists: [],
    }
  },
  computed: {
    ...mapState([
      'selectedBehaviorList',
      'uniqueHabitBuildingBlocks',
      'behaviorListRaw',
    ]),
  },
  methods: {
    addRow(index) {
      this.updateSelectedBehaviorList({ newLists: this.newLists, index })
    },
    ...mapActions(['updateSelectedBehaviorList']),
  },
}
</script>

<style lang="scss" scoped></style>
