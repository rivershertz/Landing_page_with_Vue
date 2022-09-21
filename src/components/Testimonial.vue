<template>
  <div class="testa__wrapper">
    <img :src="avatar" alt="author" class="testa__avatar" />
    <h3 class="testa__name">{{ author }}</h3>
    <p class="testa__job">{{ position }} @{{ company }}</p>
    <p class="testa__quote">{{ quote }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    author: String,
    avatar: URL,
    position: String,
    company: String,
    quote: String,
  });
</script>

<style scoped>
  .testa__wrapper {
    border: 3px solid #ff60f2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
  }

  .testa__quote {
    padding: 1rem;
  }
</style>
