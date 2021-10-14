<template>
  <h1>页面不存在</h1>
  <div>对不起，您访问的页面不存在。</div>
  <button @click="onBack">返回</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },

  methods: {
    onBack() {
      this.$router.go(-1);
    }
  }
});
</script>

<style scoped></style>
