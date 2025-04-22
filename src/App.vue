<template>
  <!-- Frosted‑glass navigation -->
  <header class="header">
    <nav class="nav">
      <RouterLink
        to="/"
        class="nav__link"
        exact-active-class="nav__link--active"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/overview"
        class="nav__link"
        exact-active-class="nav__link--active"
      >
        Overzicht
      </RouterLink>
        <RouterLink
        to="/select"
        class="nav__link"
        exact-active-class="nav__link--active"
      >
        Selectie
      </RouterLink>
      <RouterLink to="/eindreflectie" class="nav__link" exact-active-class="nav__link--active">
      Eindreflectie
    </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup></script>

<style scoped>
/* ---------- Base ---------- */
:root {
  --accent: #00c2ff; /* tweak if you like */
  --header-bg: rgba(15, 23, 42, 0.55); /* slate‑900 @ 55% */
}

body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f5f7fa;
}

/* ---------- Header ---------- */
.header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(12px) saturate(150%);
  background: var(--header-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.nav {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.9rem 1.4rem;
  display: flex;
  gap: 0.6rem;
}

/* ---------- Links ---------- */
.nav__link {
  color: gray; /* slate‑200 */
  font-weight: 500;
  padding: 0.45rem 1.05rem;
  border-radius: 28px;
  transition: color 0.25s ease;
}

.nav__link::after {
  /* animated hover pill */
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--accent);
  opacity: 0;
  transform: scale(0.75);
  transition: opacity 0.25s, transform 0.25s;
  z-index: -1;
}

.nav__link:hover {
  color: #0f172a; /* slate‑900 */
}
.nav__link:hover::after {
  opacity: 0.2;
  transform: scale(1);
}

/* ---------- Active link ---------- */
.nav__link--active {
  color: #0f172a;
  font-weight: 600;
}
.nav__link--active::after {
  opacity: 0.35;
  transform: scale(1);
}
.nav {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.9rem 1.4rem;

  display: flex;
  justify-content: center;   /* ⬅️  links horizontaal centreren */
  gap: 0.6rem;
}

</style>
