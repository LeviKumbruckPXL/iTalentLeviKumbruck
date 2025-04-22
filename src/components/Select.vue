<template>
    <section class="max-w-5xl mx-auto px-4 py-12 space-y-8 text-center">
      <h1 class="text-3xl sm:text-4xl font-bold">Kies een activiteit</h1>
  
      <ul class="grid gap-6 md:grid-cols-3">
        <li
          v-for="item in items"
          :key="item.slug"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition"
        >
          <RouterLink
            :to="`/activity/${item.slug}`"
            class="block p-6 space-y-3 h-full"
          >
            <h2 class="text-lg font-semibold text-slate-800">
              {{ item.title }}
            </h2>
            <p class="text-slate-600 text-sm">{{ item.subtitle }}</p>
            <span
              class="inline-block mt-4 px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-600"
            >
              {{ item.category }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  const items = [
    {
      slug: 'ddd',
      category: 'Innovatie',
      title: 'Innovatieroute DDD',
      subtitle: 'Intro + oefeningen rond Domain Driven Design (DDD)'
    },
    {
      slug: 'hackathon',
      category: 'Innovatie',
      title: 'PXL Hackathon',
      subtitle: 'Twee‑daagse hackathon – Ergo games'
    },
    {
      slug: 'busit',
      category: 'Internationalisering',
      title: 'BusIT‑week — Codesight',
      subtitle: 'AI, vision & robotics in teams'
    }
  ]
  </script>
  