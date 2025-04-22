<template>
    <section class="max-w-6xl mx-auto px-4 py-12 text-center space-y-8">
      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl font-bold">
        Mijn activiteiten <span class="text-sky-500">({{ portfolio.count }})</span>
      </h1>
  
      <!-- Filter buttons -->
      <div
        class="flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        <button
          v-for="cat in portfolio.categories"
          :key="cat"
          @click="portfolio.activeFilter = cat"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition',
            cat === portfolio.activeFilter
              ? 'bg-sky-600 text-white shadow'
              : 'bg-slate-100 text-slate-700 hover:bg-sky-100'
          ]"
        >
          {{ cat }}
        </button>
      </div>
  
      <!-- Card grid -->
      <ul
        class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="act in portfolio.filtered"
          :key="act.id"
          class="bg-white rounded-xl p-6 text-left shadow-md hover:shadow-lg transition"
        >
          <h2 class="text-lg font-semibold mb-1">{{ act.title }}</h2>
          <small class="block mb-2 text-slate-500">{{ act.date }}</small>
          <p class="text-slate-700 mb-3">{{ act.description }}</p>
          <em class="text-sm text-slate-600">{{ act.location }}</em>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { usePortfolioStore } from '../stores/portfolio'
  
  const portfolio = usePortfolioStore()
  </script>
  