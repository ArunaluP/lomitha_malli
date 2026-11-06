import { useState } from 'react';
import useInterval from './useInterval';

// A number that randomly ticks between min and max (for "live" dashboard readouts).
export default function useLiveNumber(min, max, every = 1400) {
  const [n, setN] = useState(Math.round((min + max) / 2));
  useInterval(() => setN(min + Math.floor(Math.random() * (max - min + 1))), every);
  return n;
}
