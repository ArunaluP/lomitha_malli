import { useEffect, useState } from 'react';
import { navLinks } from '../data/content';
import { img } from '../utils';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setSolid(scrollY > 30);
      let cur = '';
      document.querySelectorAll('section[id]').forEach((s) => {
        if (scrollY >= s.offsetTop - 120) cur = s.id;
      });
      setActive(cur);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="top" className={solid ? 'solid' : ''}>
      <nav className={`nav${open ? ' open' : ''}`} id="nav">
        <a className="brand" href="#home" aria-label="EPT Solutions home">
          <img className="brand-mark" src={img('mark-light.png')} alt="EPT Solutions logo" />
          <span>
            <b><i>EPT</i> <em>SOLUTIONS</em></b>
            <small>(PVT) LTD · EST. 2004</small>
          </span>
        </a>
        <ul>
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'act' : ''} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-red" href="#contact">Get a quote</a>
        <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
        </button>
      </nav>
    </header>
  );
}
