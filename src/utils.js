// Resolve a file in /public/img so it works from any deploy path.
export const img = (p) => `${import.meta.env.BASE_URL}img/${p}`;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
