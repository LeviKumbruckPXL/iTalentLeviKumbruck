<template>
    <section class="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <!-- Hero -->
      <header class="text-center space-y-4">
        <h1 class="text-4xl sm:text-5xl font-bold">
          Hallo, ik ben
          <span class="text-sky-500">Levi Kumbruck</span>
        </h1>
        <p class="mx-auto max-w-xl text-lg text-slate-600">
          20‑jarige student
          <strong>Toegepaste Informatica – Applicatieontwikkeling</strong> aan
          Hogeschool PXL. Passie voor nieuwe technologieën, creativiteit &amp;
          probleem­oplossend denken.
        </p>
      </header>
  
      <!-- Card grid -->
      <div
        class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        <!-- Mezelf -->
        <article
          class="rounded-xl bg-white shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition"
        >
          <h2 class="text-xl font-semibold">1. Mezelf</h2>
          <p class="text-slate-700">
            Ik werk graag aan projecten waarin ik zowel zelfstandig als in
            teamverband iets waardevols kan bouwen. In mijn vrije tijd speel ik
            tennis en supporter ik voor <em>KRC Genk</em>.
          </p>
        </article>
  
        <!-- Competenties -->
        <article
          class="rounded-xl bg-white shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition"
        >
          <h2 class="text-xl font-semibold">2. Competenties</h2>
          <ul class="list-disc pl-5 space-y-1 text-slate-700">
            <li>Sterk in logisch nadenken en oplossingen vinden.</li>
            <li>Gestructureerd: ik plan alles op mijn gsm voor rust &amp; focus.</li>
            <li>
              Rustig &amp; introvert, maar sterk gegroeid in samenwerken de
              voorbije jaren.
            </li>
            <li>Bewuster geworden van communicatie &amp; zelfreflectie.</li>
          </ul>
        </article>
  
        <!-- Ambities -->
        <article
          class="rounded-xl bg-white shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition"
        >
          <h2 class="text-xl font-semibold">3. Ambities</h2>
          <p class="text-slate-700">
            Binnen 3‑5 jaar wil ik werken als software­ontwikkelaar in een
            leergierig team. Doorgroeien tot
            <strong>lead developer</strong> lijkt me top, zolang ik kan blijven
            leren en plezier heb in mijn werk.
          </p>
        </article>
  
        <!-- Skills & leerdoelen -->
        <article
          class="rounded-xl bg-white shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition"
        >
          <h2 class="text-xl font-semibold">4. Skills &amp; Leerdoelen</h2>
          <p class="text-slate-700 leading-relaxed">
            <strong>Ervaren in:</strong> Java, Spring Boot, .NET, Angular, Vue,
            Next.js<br />
            <strong>Te verdiepen in:</strong> AI, Security &amp; grotere
            projecten.
          </p>
        </article>
      </div>
      
    </section>
  </template>
  
  <script setup></script>
  