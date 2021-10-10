<template>
  <v-list class="d-flex flex-column justify-center">
    <div v-if="raw">
      <v-list-item v-for="item in list" :key="item.id">
        <v-text-field v-model="item.value" solo dense></v-text-field>
      </v-list-item>
    </div>
    <div v-else>
      <v-list-item v-for="(habitBlock, index) in list" :key="index">
        {{ uniqueHabitBuildingBlocks.prefixes[habitBlock.prefixIndex] }}
        {{ uniqueHabitBuildingBlocks.firstEvents[habitBlock.firstEventIndex] }}
        {{ uniqueHabitBuildingBlocks.connections[habitBlock.connectionIndex] }}
        {{
          uniqueHabitBuildingBlocks.secondEvents[habitBlock.secondEventIndex]
        }}
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    raw: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState(['selectedBehaviorList', 'uniqueHabitBuildingBlocks']),
    list() {
      return this.raw
        ? this.selectedBehaviorList.behaviorListRaw
        : this.selectedBehaviorList.behaviorList
    },
  },
}
</script>
