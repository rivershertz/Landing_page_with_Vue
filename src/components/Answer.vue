<template>
  <h3 class="faqs__answer">
    {{
      currentAnswer.value
        ? currentAnswer.value.answer
        : 'Pick a question from the list on the left'
    }}
  </h3>
  <p class="faqs__answer-author">
    {{ currentAnswer.value ? `-by ${currentAnswer.value.author}` : '&#60;' }}
  </p>
</template>

<script setup>
  const props = defineProps({
    currentAnswer: Object,
  });
</script>

<style scoped>
  .faqs__answer {
    padding: 1rem;
  }

  .faqs__answer-author {
    font-weight: 600;
  }
</style>
