<template>
  <v-container grid-list-xs>
    <v-row class="pt-6">
      <v-col>
        <v-row>
          <v-col :md="isBehaviorList ? 12 : 6" class="d-flex flex-row">
            <v-text-field
              v-if="allBehaviorLists"
              v-model="selectedBehaviorList.listName"
              label="List name"
              outlined
              solo
              md="4"
              class="mx-2"
              @change="setSelectedBehaviorListName"
            ></v-text-field>
            <v-select
              v-if="allBehaviorLists"
              :items="behaviorNamesList"
              label="Select an existing List"
              outlined
              solo
              md="4"
              class="mx-2"
              @change="selectBehaviorList"
            ></v-select>
          </v-col>
        </v-row>
        <ListComponent :raw="true" />
        <v-text-field
          v-model="nextHabit.value"
          outlined
          :label="label"
          autocomplete="off"
          @keyup.enter="saveHabit(nextHabit)"
        ></v-text-field>
        <!-- refactor to component? 2buttons -->
        <v-row>
          <v-col class="d-flex justify-space-between">
            <v-btn
              v-if="isBehaviorList"
              large
              text
              color="warning"
              @click="$store.commit('resetBehaviorList')"
            >
              Reset
            </v-btn>
            <v-btn
              v-if="isBehaviorList || behaviorListLength"
              color="primary"
              @click="saveHabit(nextHabit)"
            >
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
    ...mapGetters([
      'behaviorNamesList',
      'behaviorListLength',
      'behaviorListRawLength',
      'isBehaviorList',
      'isBehaviorListRaw',
    ]),
    ...mapState(['allBehaviorLists', 'selectedBehaviorList', 'raw']),
    label() {
      return this.isBehaviorListRaw
        ? `Habit no. ${this.behaviorListRawLength + 1}`
        : 'Type in your habit then hit enter'
    },
  },
  methods: {
    ...mapActions(['updateBehaviorList']),
    ...mapMutations(['setBehaviorList', 'setSelectedBehaviorListName']),
    saveHabit() {
      if (this.nextHabit.value === '') return
      this.updateBehaviorList({
        id: this.behaviorListLength,
        position: this.behaviorListLength + 1,
        label: `Habit no. ${this.behaviorListLength + 1}`,
        value: this.nextHabit.value,
      })
      this.nextHabit.value = ''
    },
    selectBehaviorList(a) {
      let idx = this.allBehaviorLists.indexOf((bl) => bl.listName === a)
      if (this.allBehaviorLists[idx].behaviorList.length === 0) {
        this.activeBehaviorList = this.allBehaviorLists[idx].behaviorListRaw
      } else {
        this.activeBehaviorList = this.allBehaviorLists[idx].behaviorList
      }
      this.allBehaviorLists.find((list, index) => {
        list.listName === a
        b = index
      })
      setBehaviorList({
        payload: b[0].behaviorList,
      })
    },
  },
}
</script>
