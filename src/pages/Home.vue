<template>
  <h1>Home Page</h1>

  <WelcomeComponent msg="Welcome to Vite + Vue3 + TypeScript Template" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeComponent from "@/components/Welcome.vue";

export default defineComponent({
  name: "HomePage",

  components: { WelcomeComponent },

  setup() {}
});
</script>

<style scoped></style>
