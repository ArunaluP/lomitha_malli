import { useEffect } from 'react';

// Adds the "in" class to every `.reveal` element (and #process) when it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          io.unobserve(e.target);
        }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, #process').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
