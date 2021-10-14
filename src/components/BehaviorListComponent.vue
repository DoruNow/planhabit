<template>
  <v-container grid-list-xs>
    <v-row class="pt-6">
      <v-col>
        <h2 class="mb-4">List of current habits</h2>
        <ListComponent :raw="true" />
        <v-text-field
          v-model="nextHabit.value"
          outlined
          class="px-3"
          :label="label"
          autocomplete="off"
          @keyup.enter="saveHabit()"
        ></v-text-field>
        <!-- refactor to component? 2buttons -->
        <v-row>
          <v-col
            v-if="isBehaviorListRaw"
            class="d-flex justify-space-between px-6"
          >
            <v-btn
              large
              text
              color="warning"
              @click="$store.commit('resetBehaviorList')"
            >
              Reset
            </v-btn>
            <v-btn color="primary" @click="undoBehaviorListRaw()">
              Undo
              <v-icon right color="accent"> mdi-undo </v-icon>
            </v-btn>
            <v-btn color="primary" @click="updateSelectedStep(2)">
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
import ListComponent from './ListComponent.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      nextHabit: { value: '' },
      activeBehaviorList: null,
    }
  },
  computed: {
    ...mapGetters(['behaviorListRawLength', 'isBehaviorListRaw']),
    ...mapState(['behaviorListIndexed', 'raw']),
    label() {
      return this.isBehaviorListRaw
        ? `Habit no. ${this.behaviorListRawLength + 1}`
        : 'Type in your habit then hit enter'
    },
  },
  methods: {
    ...mapMutations(['updateBehaviorListRaw', 'undoBehaviorListRaw']),
    ...mapActions(['updateSelectedStep']),
    saveHabit() {
      if (this.nextHabit.value === '') return
      if (this.raw)
        this.updateBehaviorListRaw({
          id: this.behaviorListRawLength,
          value: this.nextHabit.value,
        })
      this.nextHabit.value = ''
    },
  },
}
</script>
