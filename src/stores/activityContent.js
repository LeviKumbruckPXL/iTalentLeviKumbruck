export const activityContent = import.meta.glob(
    '/src/activities/*.html',
    { as: 'raw', eager: true }
  )
  
