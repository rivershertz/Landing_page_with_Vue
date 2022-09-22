<template>
  <h3 class="contact__title">Leave us a note!</h3>
  <form class="form" @submit.prevent="onSubmit">
    <label class="form__label" for="name">Full name:</label>
    <input type="text" id="name" class="form__input" v-model="name" />
    <label class="form__label" for="email">Email:</label>
    <input type="email" id="email" class="form__input" v-model="email" />
    <button class="form__submit">Send</button>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  const name = ref('');
  const email = ref('');

  function onSubmit() {
    // api, POST
    console.log(name.value, email.value);
    name.value = '';
    email.value = '';
  }
</script>

<style scoped>
  .form {
    max-width: 40em;
    color: #ff60f2;
    border: 3px solid #ff60f2;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem 0 0;
  }
  .contact__title {
    color: #ff60f2;
    font-size: 45px;
  }
  .form__label {
    font-size: 25px;
  }
  .form__input,
  select {
    margin: 0.5rem 0 0.75rem;
    background-color: transparent;
    border: 2px solid #ff60f2;
    caret-color: #ff60f2;
    color: #ff60f2;
    max-width: 50%;
    padding: 0.5rem;
  }
  .form__input:focus {
    /* border: none; */
    outline: none;
  }
  .form__submit {
    margin: 1rem 0 0;
    width: 9rem;
    padding: 10px 15px;
    background-color: transparent;
    border: 3px solid #ff60f2;
    font-size: 20px;
    color: #ff60f2;
  }
</style>
