import { useEffect, useState } from 'react';
import NetworkCanvas from './NetworkCanvas';
import CountUp from './CountUp';
import useInterval from '../hooks/useInterval';
import useLiveNumber from '../hooks/useLiveNumber';
import { heroFacts, stats, typerWords } from '../data/content';
import { img } from '../utils';

/* ---------- typing line ---------- */
function Typer({ words }) {
  const [text, setText] = useState('');
  useEffect(() => {
    let wi = 0, ci = 0, del = false, t;
    const tick = () => {
      const w = words[wi];
      setText(w.slice(0, ci));
      if (!del && ci < w.length) { ci++; t = setTimeout(tick, 55); }
      else if (!del) { del = true; t = setTimeout(tick, 1600); }
      else if (ci > 0) { ci--; t = setTimeout(tick, 28); }
      else { del = false; wi = (wi + 1) % words.length; t = setTimeout(tick, 250); }
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return (
    <div className="typer">&gt; we <span>{text}</span><i /></div>
  );
}

/* ---------- live clock for the CCTV monitor ---------- */
function useNow() {
  const [now, setNow] = useState(new Date());
  useInterval(() => setNow(new Date()), 1000);
  return now;
}
const pad = (n) => String(n).padStart(2, '0');

function Monitor() {
  const d = useNow();
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${time}`;
  return (
    <div className="monitor reveal">
      <div className="mon-top"><span className="live">LIVE · EPT-NVR-01</span><span>{time}</span></div>
      <div className="feeds">
        <div className="feed big">
          <img src={img('factory.jpg')} alt="Production floor CCTV view" />
          <span className="lbl">CAM 01 · PRODUCTION FLOOR</span>
          <img className="osd" src={img('mark-light.png')} alt="" aria-hidden="true" />
          <span className="rec">REC</span><span className="ts">{stamp}</span>
          <i className="brk tl" /><i className="brk tr" /><i className="brk bl" /><i className="brk br" />
          <div className="detect"><span>PERSON 98%</span></div>
        </div>
        <div className="feed">
          <img src={img('ocean1.jpg')} alt="Ocean front building view" />
          <span className="lbl">CAM 14 · PERIMETER</span><span className="rec">REC</span><span className="ts">{stamp}</span>
        </div>
        <div className="feed">
          <img src={img('agro1.jpg')} alt="Farm aerial view" />
          <span className="lbl">CAM 07 · SOLAR 4G</span><span className="rec">REC</span><span className="ts">{stamp}</span>
        </div>
      </div>
      <div className="mon-stats">
        <div>CAMERAS DEPLOYED<b>480+</b></div>
        <div>SYSTEM<b className="ok">● SECURE</b></div>
        <div>UPTIME<b>24/7</b></div>
      </div>
    </div>
  );
}

/* ---------- rotating orbit of service icons ---------- */
const ring1 = [['i-cam', 0], ['i-ap', 60], ['i-nvr', 120], ['i-fw', 180], ['i-pr', 240], ['i-lap', 300]];
const ring2 = [['i-sw', 30], ['i-cloud', 110], ['i-pc', 200], ['i-cam', 290]];
function Ring({ cls, items, r }) {
  return (
    <div className={`ring ${cls}`}>
      {items.map(([icon, a]) => (
        <span key={icon + a} className="ob" style={{ '--a': `${a}deg`, '--r': `${r}px` }}>
          <span className="obi"><svg viewBox="0 0 24 24"><use href={`#${icon}`} /></svg></span>
        </span>
      ))}
    </div>
  );
}
function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="core-glow" />
      <Ring cls="r1" items={ring1} r={250} />
      <Ring cls="r2" items={ring2} r={315} />
      <div className="ring r0" />
    </div>
  );
}

/* ---------- floating status cards ---------- */
function StatusChips({ mobile }) {
  const speed = useLiveNumber(900, 980, 1500);
  const m = mobile ? ' m' : '';
  return (
    <>
      <div className={`fchip${m} c1`}>
        <span className="fi"><svg viewBox="0 0 24 24"><use href="#i-ap" /></svg></span>
        <div><b>Wi-Fi 6</b><span>Signal excellent</span></div>
        <span className="sig"><i /><i /><i /><i /></span>
      </div>
      <div className={`fchip${m} c2`}>
        <span className="fi fp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 11v3M8.5 8.5a5 5 0 0 1 7 0M7 12a5 5 0 0 1 1-3M17 12c0 3-1 6-3 8M12 14c0 2.5-.6 4.6-2 6.5M9 14.5c0 1.6-.4 3-1.2 4.2M5 9a9 9 0 0 1 14 0M19.5 13c0 1.5-.3 3-.8 4.4" />
          </svg>
          <i className="scan" />
        </span>
        <div><b>Access granted</b><span>Main gate · 08:42</span></div>
        <span className="okb">✓</span>
      </div>
      <div className={`fchip${m} c3`}>
        <span className="fi"><svg viewBox="0 0 24 24"><use href="#i-sw" /></svg></span>
        <div><b>{speed} Mbps</b><span>Network throughput</span></div>
        <svg className="spark" viewBox="0 0 80 28"><path d="M0 22 L10 18 L20 20 L30 10 L40 14 L50 6 L60 12 L70 4 L80 8" /></svg>
      </div>
      <div className={`fchip${m} c4`}>
        <span className="fi bolt"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg></span>
        <div><b>UPS backup</b><span>Battery 100% · Online</span></div>
        <span className="bat"><i /></span>
      </div>
    </>
  );
}

/* ---------- hero ---------- */
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb o1" /><div className="orb o2" />
      <NetworkCanvas />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-brand">
              <img src={img('mark-light.png')} alt="EPT Solutions logo" />
              <div>
                <div className="hb-name"><b>EPT</b> SOLUTIONS</div>
                <div className="hb-sub"><span>(PVT) LTD</span>Formerly Energy Power Technology · Est. 2004</div>
              </div>
            </div>
            <h1>Securing the future with <span className="grad">smart technology.</span></h1>
            <Typer words={typerWords} />
            <div className="ctas">
              <a className="btn btn-red" href="#contact">
                Request a site visit
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a className="btn btn-glass" href="#projects">Explore projects</a>
            </div>
            <div className="hero-foot">
              {heroFacts.map((f) => <div key={f.k}>{f.k}<b>{f.v}</b></div>)}
            </div>
            <div className="mchips"><StatusChips mobile /></div>
          </div>

          <div className="hero-visual">
            <Orbit />
            <Monitor />
            <StatusChips />
          </div>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat reveal${i ? ` d${i}` : ''}`}>
              <b>
                {s.text ?? <CountUp to={s.value} from={s.plain ? 1990 : 0} />}
                {s.suffix && <em>{s.suffix}</em>}
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
