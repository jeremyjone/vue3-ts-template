<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String
  },

  setup() {}
});
</script>

<style scoped></style>
