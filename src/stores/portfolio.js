import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    activities: [
      {
        id: 1,
        title: 'PXL Hackathon',
        date: '10–11 Feb 2025',
        description: 'Twee­daagse hackathon rond Ergo & Healthcare.'
      },
      {
        id: 2,
        title: 'Innovatieroute DDD',
        date: '24 Sep – 8 Oct 2024',
        description: 'Workshop‑reeks Domain Driven Design.'
      },
      {
        id: 3,
        title: 'BusIT‑Week – Codesight',
        date: '17–22 Mar 2024',
        description: 'AI, vision & robotics met internationale teams.'
      }
    ]
  }),

  //getters
  getters: {
    count: (state) => state.activities.length
  }
})
