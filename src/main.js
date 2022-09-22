import { createApp } from 'vue';
import App from './App.vue';
import Home from '@/components/Home.vue';

import { createRouter, createWebHistory } from 'vue-router';

import './assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'Home', component: Home }],
});

library.add(fas);

createApp(App).use(router).component('fas', FontAwesomeIcon).mount('#app');
