<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/overview">Overview</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
// nothing needed
</script>

<style>
body {
  font-family: system-ui, sans-serif;
  margin: 0;
}
header {
  background: #222;
  padding: 1rem;
}
header a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
}
</style>
