import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    activities: [
        /* ────────────── SEMINARIES ────────────── */
        {
          id: 1,
          category: 'Seminarie',
          title: 'Seminarie CBTW — Design Patterns & CQRS',
          date: '27 feb 2024 • 10‑12u',
          description:
            'Design patterns, SOLID‑principes en CQRS/MediatR binnen .NET.',
          location: 'Campus Elfde Linie • G414'
        },
        {
          id: 2,
          category: 'Seminarie',
          title: 'Seminarie Resillion — TDD & Kata’s',
          date: '26 mrt 2024 • 9‑12u',
          description:
            'Test‑driven development met FizzBuzz, swarm programming en kata’s.',
          location: 'Campus Elfde Linie • G414'
        },
        {
          id: 3,
          category: 'Seminarie',
          title: 'Seminarie Tobania — Scrum‑taal & Compilerbouw',
          date: '30 apr 2024 • 10‑12u',
          description:
            'Programmeertaal ontwerp gebaseerd op Scrum, met lexical analysis, parsing en codegeneratie.',
          location: 'Campus Elfde Linie • G414'
        },
        {
          id: 4,
          category: 'Seminarie',
          title: 'Seminarie Harmony Group — Low‑Code & OutSystems',
          date: '7 mei 2024 • 8u30‑11u30',
          description:
            'Intro tot low‑code development op het OutSystems‑platform; visueel programmeren en integraties.',
          location: 'Campus Elfde Linie • G412a'
        },
        {
          id: 5,
          category: 'Seminarie',
          title: 'Seminarie nocomputer — Prompt Engineering',
          date: '23 okt 2024 • 13u30‑17u30',
          description:
            'Prompt‑opbouw voor LLM’s en beeldmodellen, valkuilen zoals prompt‑injectie en biases, ecologische impact.',
          location: 'Corda 7 • CC714'
        },
        {
          id: 6,
          category: 'Seminarie',
          title: 'Seminarie Easi — GitHub Copilot & AI‑Productiviteit',
          date: '6 nov 2024 • 13u30‑17u30',
          description:
            'Ontdek hoe Copilot en andere AI‑tools code schrijven versnellen en productiviteit verhogen.',
          location: 'Corda 7 • CC714'
        },
        {
          id: 7,
          category: 'Seminarie',
          title: 'Seminarie Inetum — Generative AI & Copilot Studio',
          date: '4 dec 2024 • 13u30‑17u30',
          description:
            'Stap‑voor‑stap werking van GenAI en low‑code chatbots bouwen met Copilot Studio.',
          location: 'Corda 7 • CC712'
        },
        {
          id: 8,
          category: 'Seminarie',
          title: 'Seminarie Angular State Management',
          date: '11 dec 2024 • 13u30‑17u30',
          description:
            'Change detection, signals en zone.js performant gebruiken in Angular.',
          location: 'Corda 7 • CC714'
        },
        {
            id: 9,
            category: 'Seminarie',
            title: 'Seminarie Kabisa',
            date: '14 mei 2024 • 9u‑12u',
            description:
              'In dit seminarie leerde ik over prompt engineering en hoe je effectief communiceert met large language models (LLMs), inclusief technieken zoals zero-shot prompting, chain-of-thought en het gebruik van context en outputindicatoren.',
            location: 'Campus Elfde Linie • G414'
        },

      
        /* ──────────── INNOVATIE ──────────── */
        {
          id: 10,
          category: 'Innovatie',
          title: 'Innovatieroute — Domain Driven Design',
          date: '24 sep – 8 okt 2024',
          description:
            'Theorie en praktijk rond event storming, aggregates, hexagonal architecture en messaging.',
          location: 'Corda 7 • CC713'
        },
        {
          id: 11,
          category: 'Innovatie',
          title: 'PXL Hackathon — Ergo Game',
          date: '10‑11 feb 2025',
          description:
            'Twee‑daagse hackathon: spel voor mensen met een mentale beperking, met GitHub, ChatGPT en Copilot.',
          location: 'Corda 7 • CC711'
        },
      
        /* ──────── PERSOONLIJKE ONTWIKKELING ──────── */
        {
          id: 20,
          category: 'Persoonlijke ontwikkeling',
          title: 'Projectweek 2TIN — Research & I‑Talent',
          date: '12‑16 feb 2024',
          description:
            'Focus op persoonlijke groei, onderzoekend en ondernemend handelen; samenwerken en netwerken.',
          location: 'Campus Elfde Linie'
        },
        {
          id: 21,
          category: 'Persoonlijke ontwikkeling',
          title: 'POP‑sessie “Brein aan het Werk! Niet Storen!”',
          date: '5 mrt 2024 • 2u',
          description:
            'Effect van digitale prikkels op het brein en tools om efficiënter te werken.',
          location: 'Campus Elfde Linie • Gebouw B'
        },
        {
          id: 22,
          category: 'Persoonlijke ontwikkeling',
          title: 'POP‑sessie “POPping”',
          date: '5 mrt 2024 • 2u',
          description:
            'Zelfkennis, feedback oefenen en persoonlijk ontwikkelingsplan opstellen.',
          location: 'Campus Elfde Linie • Gebouw B'
        },
        {
          id: 23,
          category: 'Persoonlijke ontwikkeling',
          title: 'POP‑sessie “My Team and I”',
          date: '9 okt 2024 • 13u30‑15u30',
          description:
            'Teamwork volgens Lencioni & Tuckman, groepsdynamiek en feedbackvaardigheden.',
          location: 'Corda 7'
        },
      
        /* ────────── INTERNATIONALISERING ────────── */
        {
          id: 30,
          category: 'Internationalisering',
          title: 'BusIT‑Week — Codesight Robotics',
          date: '17‑22 mrt 2024',
          description:
            'Robot trainen in virtuele omgeving, AI & vision, samenwerken met internationale studenten.',
          location: 'Campus Elfde Linie'
        }
      ],
      

    /* UI state */
    activeFilter: 'Alle'
  }),

  getters: {
    /* Gerenderde lijst obv filter */
    filtered: (state) =>
      state.activeFilter === 'Alle'
        ? state.activities
        : state.activities.filter((a) => a.category === state.activeFilter),

    count: (state) => state.filtered.length,

    categories: (state) => [
      'Alle',
      ...new Set(state.activities.map((a) => a.category))
    ]
  }
})
