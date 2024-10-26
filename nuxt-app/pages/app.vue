<template>
  <div>
    <h1>Artikelen</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">{{ article.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const articles = ref([]);

try {
  const response = await $fetch('https://fdnd-agency.directus.app/items/tm_story'); // Gebruik $fetch
  articles.value = response.data; // Pas aan op basis van de structuur van je API
} catch (error) {
  console.error('Error fetching data:', error);
  articles.value = []; // Geef een lege array terug bij een fout
}
</script>

<style>
/* Voeg hier je stijlen toe */
</style>

