<template>
    <section class="overview">
      <h1>Mijn activiteiten ({{ portfolio.count }})</h1>
  
      <ul>
        <li v-for="act in portfolio.activities" :key="act.id">
          <h2>{{ act.title }}</h2>
          <small>{{ act.date }}</small>
          <p>{{ act.description }}</p>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { usePortfolioStore } from '../stores/portfolio'
  const store = usePortfolioStore()


  </script>
  
  <style scoped>
  .overview {
    max-width: 800px;
    margin: 2rem auto;
  }
  .overview ul {
    list-style: none;
    padding: 0;
  }
  .overview li {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
  </style>
  