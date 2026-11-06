import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import { prefersReducedMotion } from '../utils';

// Animated number that counts up when scrolled into view.
export default function CountUp({ to, from = 0, duration = 1600 }) {
  const [ref, inView] = useInView();
  const [val, setVal] = useState(to);
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const t0 = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, from, duration]);
  return <span ref={ref}>{val}</span>;
}
