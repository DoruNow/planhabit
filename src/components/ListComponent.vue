<template>
  <v-list class="d-flex flex-column justify-center">
    <div v-if="raw">
      <v-list-item v-for="item in list" :key="item.id">
        <v-text-field v-model="item.value" solo dense></v-text-field>
      </v-list-item>
    </div>
    <div v-else>
      <v-list-item v-for="(habitBlock, index) in list" :key="index">
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
    ...mapState(['behaviorListRaw', 'uniqueHabitBuildingBlocks']),
    list() {
      return this.behaviorListRaw
    },
  },
  created() {
    this.$store.commit('setRaw', this.raw)
  },
}
</script>
