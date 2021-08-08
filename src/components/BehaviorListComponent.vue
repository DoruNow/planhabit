<template>
    
    <v-col v-if="isBehaviorList">
      <v-list class="d-flex flex-column justify-center">
        <span class="text-h5">Current Habit List</span>
        <v-list-item v-for="habit in behaviorList" :key="habit.position">
          {{ habit.id }}. {{ habit.value }}
        </v-list-item>
      </v-list>
    </v-col>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>