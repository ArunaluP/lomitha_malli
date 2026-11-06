import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils';

// Animated particle network behind the hero. Some nodes glow red; lines connect nearby nodes
// and nodes are gently pushed away from the mouse.
export default function NetworkCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const x = c.getContext('2d');
    const reduce = prefersReducedMotion();
    const DPR = Math.min(devicePixelRatio || 1, 2);
    const mouse = { x: -999, y: -999 };
    let W, H, pts = [], raf;

    const size = () => {
      W = c.offsetWidth; H = c.offsetHeight;
      c.width = W * DPR; c.height = H * DPR;
      x.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(Math.floor((W * H) / 14000), 110);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6, hot: Math.random() < 0.12,
      }));
    };
    const host = c.parentElement;
    const onMove = (e) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = mouse.y = -999; };

    const frame = () => {
      x.clearRect(0, 0, W, H);
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, dm = Math.hypot(dx, dy);
        if (dm < 120) { p.x += (dx / dm) * 0.8; p.y += (dy / dm) * 0.8; }
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            x.strokeStyle = a.hot || b.hot ? `rgba(255,60,50,${(1 - d / 130) * 0.45})` : `rgba(255,255,255,${(1 - d / 130) * 0.1})`;
            x.lineWidth = 1; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke();
          }
        }
      for (const p of pts) {
        x.beginPath(); x.arc(p.x, p.y, p.hot ? p.r + 1 : p.r, 0, 7);
        x.fillStyle = p.hot ? '#ff3b30' : 'rgba(255,255,255,.5)';
        if (p.hot) { x.shadowBlur = 12; x.shadowColor = '#ff3b30'; }
        x.fill(); x.shadowBlur = 0;
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    size(); frame();
    addEventListener('resize', size);
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', size);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas id="net" ref={ref} aria-hidden="true" />;
}
