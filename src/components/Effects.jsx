import { useEffect, useRef } from 'react';

// Thin red scroll-progress bar at the very top of the page.
export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (ref.current) ref.current.style.width = `${(scrollY / h) * 100}%`;
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);
  return <div id="progress" ref={ref} />;
}

// Soft red glow following the mouse + spotlight effect on every `.card`.
export function CursorEffects() {
  const glow = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (glow.current) {
        glow.current.style.left = `${e.clientX}px`;
        glow.current.style.top = `${e.clientY}px`;
      }
      const card = e.target.closest && e.target.closest('.card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };
    addEventListener('pointermove', move);
    return () => removeEventListener('pointermove', move);
  }, []);
  return <div className="cursor-glow" ref={glow} />;
}
