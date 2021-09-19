<template>
  <v-row>
    <!-- <v-col v-if="!start">
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
    </v-col> -->
    <v-col class="pa-6">
      <v-row class="pa-6">
        <v-col md="6">
          <v-text-field
            outlined
            class="text-h5"
            label="List Name:"
            :value="selectedBehaviorList.listName"
            :v-model="newList.listName"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex flex-row">
          <v-select
            :items="uniqueHabitBuildingBlocks.prefixes"
            label="Solo field"
            solo
          ></v-select>
          <v-select
            :items="uniqueHabitBuildingBlocks.firstEvents"
            label="Solo field"
            solo
          ></v-select>
          <v-select
            :items="uniqueHabitBuildingBlocks.connections"
            label="Solo field"
            solo
          ></v-select>
          <v-select
            :items="uniqueHabitBuildingBlocks.secondEvents"
            label="Solo field"
            solo
          ></v-select>
        </v-col>
        <v-col>
          <v-list>
            <v-list-item
              v-for="(habitBlock, index) in selectedBehaviorList.behaviorList"
              :key="index"
            >
              <v-row>
                <v-col>
                  {{
                    uniqueHabitBuildingBlocks.prefixes[habitBlock.prefixIndex]
                  }}
                  {{
                    uniqueHabitBuildingBlocks.firstEvents[
                      habitBlock.firstEventIndex
                    ]
                  }}
                  {{
                    uniqueHabitBuildingBlocks.connections[
                      habitBlock.connectionIndex
                    ]
                  }}
                  {{
                    uniqueHabitBuildingBlocks.secondEvents[
                      habitBlock.secondEventIndex
                    ]
                  }}
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
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
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      newList: {
        listName: '',
      },
    }
  },
  computed: {
    ...mapState(['selectedBehaviorList', 'uniqueHabitBuildingBlocks']),
  },
  methods: {
    addRow(index) {
      this.updateSelectedBehaviorList({ newList: this.newlist, index })
    },
    ...mapActions(['updateSelectedBehaviorList']),
  },
}
</script>

<style lang="scss" scoped></style>
