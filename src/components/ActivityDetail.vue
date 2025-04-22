<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { activityContent } from '../stores/activityContent.js'

const route = useRoute()

const html = computed(() => {
  return {
    ddd:  activityContent['/src/activities/ddd.html'],
    hackathon: activityContent['/src/activities/hackathon.html'],
    busit: activityContent['/src/activities/busit.html']
  }[route.params.slug]
})
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-12">
    <RouterLink to="/select" class="text-sky-600 hover:underline text-sm">
      ← Terug naar selectie
    </RouterLink>

    <article v-if="html" class="prose prose-slate max-w-none mt-8" v-html="html" />

    <p v-else class="text-center text-slate-500">Activiteit niet gevonden.</p>
  </section>
</template>
