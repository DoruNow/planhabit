<template>
  <v-list class="d-flex flex-column justify-center">
    <v-list-item v-for="item in list" :key="item.id">
      {{ item.position }}. {{ item.value }}
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>
