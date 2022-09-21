<template>
  <div class="service__container">
    <h3 class="service__title"><fas :icon="icon" /> {{ icon }}</h3>
    <p class="service_description">{{ description }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    description: String,
    icon: String,
  });
</script>

<style scoped>
  .service__container {
    padding: 1rem;
    border: 3px solid black;
  }

  .service__title {
    font-size: 25px;
  }

  .service_description {
    font-size: 20px;
    margin: 15px 0 0;
    padding: 8px;
  }
</style>
