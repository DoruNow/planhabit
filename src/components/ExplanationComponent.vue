<template>
  <v-row>
    <v-col>
      <v-card-text
        v-for="(paragraph, index) in Config[$store.state.selectedStep]
          .explanation"
        :key="index"
        :class="paragraph.class"
      >
        {{ paragraph.text }}
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
import Config from "../assets/Config"

export default {
  data() {
    return {
      Config,
    }
  },
}
</script>

<style lang="scss" scoped></style>
