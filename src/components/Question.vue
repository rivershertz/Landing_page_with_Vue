<template>
  <h3 :class="{ active: isActive }" class="faqs__question">
    {{ question }}
  </h3>
</template>

<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    question: String,
    isActive: Boolean,
  });
</script>

<style scoped>
  .faqs__question {
    padding: 1rem;
    border-right: 3px solid #ff60f2;
  }

  .faqs__question:hover {
    cursor: pointer;
    filter: brightness(2);
  }

  .active {
    filter: brightness(2);
  }
</style>
