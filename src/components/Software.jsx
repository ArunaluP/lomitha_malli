import AnimIcon from './AnimIcon';
import SectionHead from './SectionHead';
import useLiveNumber from '../hooks/useLiveNumber';
import { software } from '../data/content';

/* ---------- Inventory dashboard illustration ---------- */
function InventoryArt() {
  const items = useLiveNumber(1240, 1258, 1800);
  const sales = useLiveNumber(184, 212, 1600);
  const rows = [
    ['HIK-2CD1043', 'IP Camera 4MP', 86],
    ['TP-SG1016', '16-Port Switch', 54],
    ['CAT6-305', 'Cat6 Cable Box', 22],
    ['UPS-1KVA', 'Online UPS 1kVA', 9],
  ];
  return (
    <div className="inv" aria-hidden="true">
      <div className="inv-side">
        <i className="inv-logo" />
        {Array.from({ length: 6 }, (_, i) => <i key={i} className={i === 1 ? 'inv-on' : ''} />)}
      </div>
      <div className="inv-main">
        <div className="inv-top"><span>STOCK · DASHBOARD</span><span className="inv-sync">● SYNCED</span></div>
        <div className="inv-kpis">
          <div><small>Items in stock</small><b>{items.toLocaleString()}</b></div>
          <div className="inv-warn"><small>Low stock</small><b>12</b></div>
          <div><small>Sales today</small><b>{sales}</b></div>
        </div>
        <div className="inv-mid">
          <div className="inv-chart">
            {[38, 62, 45, 80, 56, 92, 70].map((h, i) => <i key={i} style={{ '--h': `${h}%`, animationDelay: `${i * 0.12}s` }} />)}
          </div>
          <div className="inv-scan">
            <div className="inv-bc">{Array.from({ length: 26 }, (_, i) => <i key={i} style={{ width: [1, 2, 3, 1, 2][i % 5] }} />)}</div>
            <div className="inv-laser" />
            <small>SCAN · ADD TO BILL</small>
          </div>
        </div>
        <div className="inv-table">
          {rows.map(([sku, name, lvl]) => (
            <div className="inv-r" key={sku}>
              <span className="inv-sku">{sku}</span><span className="inv-nm">{name}</span>
              <span className="inv-lv"><i style={{ width: `${lvl}%` }} className={lvl < 15 ? 'inv-low' : ''} /></span>
            </div>
          ))}
        </div>
      </div>
      <div className="inv-toast"><b>⚠ Low stock</b>Online UPS 1kVA · 9 left — reorder</div>
    </div>
  );
}

/* ---------- Code editor illustration ---------- */
function CodeArt() {
  const lines = [[18, 'k'], [46, 'f'], [32, 's'], [58, 'f'], [24, 'k'], [40, 's'], [50, 'f'], [20, 'k']];
  return (
    <div className="ed" aria-hidden="true">
      <div className="ed-bar"><i /><i /><i /><span>inventory.service.js</span></div>
      <div className="ed-body">
        {lines.map(([w, c], i) => (
          <div className="ed-ln" key={i}>
            <em>{i + 1}</em>
            <span style={{ marginLeft: (i % 3) * 14 }}><i className={c} style={{ '--w': `${w}%`, animationDelay: `${i * 0.28}s` }} /></span>
          </div>
        ))}
      </div>
      <div className="ed-ok">✓ Build passed · deployed</div>
      <svg className="ed-gear" viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg>
    </div>
  );
}

/* ---------- Browser + phone (responsive web) illustration ---------- */
function WebArt() {
  return (
    <div className="wb" aria-hidden="true">
      <div className="wb-br">
        <div className="wb-bar"><i /><i /><i /><span>🔒 www.yourbusiness.lk</span></div>
        <div className="wb-body">
          <div className="wb-b wb-nav" /><div className="wb-b wb-hero"><i /><i /><i className="wb-cta" /></div>
          <div className="wb-row"><div className="wb-b wb-c" /><div className="wb-b wb-c" /><div className="wb-b wb-c" /></div>
        </div>
        <div className="wb-cur" />
      </div>
      <div className="wb-ph">
        <div className="wb-b wb-nav" /><div className="wb-b wb-hero"><i /><i className="wb-cta" /></div><div className="wb-b wb-c" /><div className="wb-b wb-c" />
      </div>
    </div>
  );
}

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
);

export default function Software() {
  const { inventory: inv, custom, web, steps } = software;
  return (
    <section id="software">
      <div className="wrap">
        <div className="sw-head reveal">
          <span className="new-pill"><b>NEW</b>Now offering software & web solutions</span>
        </div>
        <SectionHead
          icon="code" tag="02 / software_solutions" title="Software that runs" accent="your business smarter." split
          lead="Beyond hardware and networks, our team now designs and builds custom software, websites and a complete inventory management system — so your technology works together end to end."
        />

        <article className="card sw-flag reveal">
          <div className="sw-flag-art"><InventoryArt /></div>
          <div className="sw-flag-body">
            <div className="sub-row"><AnimIcon name="box" size="sm" /><span className="tag">{inv.tag}</span></div>
            <h3>{inv.title}</h3>
            <p>{inv.text}</p>
            <ul className="sw-feats">
              {inv.features.map(([t, d]) => (
                <li key={t}><span className="ck"><Check /></span><div><b>{t}</b><small>{d}</small></div></li>
              ))}
            </ul>
            <div className="sw-ctas">
              <a className="btn btn-red" href="#contact">Book a free demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
          </div>
        </article>

        <div className="sw-grid">
          {[[custom, <CodeArt key="c" />, 'SW_01', 'gear'], [web, <WebArt key="w" />, 'SW_02', 'globe']].map(([s, art, code, icon], i) => (
            <article className={`card sw-card reveal${i ? ' d1' : ''}`} key={s.title}>
              <span className="code">{code}</span>
              <div className="sw-art">{art}</div>
              <div className="sw-body">
                <h3 className="h-ic"><AnimIcon name={icon} size="sm" />{s.title}</h3>
                <p>{s.text}</p>
                <div className="chips">{s.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="sw-steps reveal">{/* steps */}
          {steps.map((s, i) => (
            <div key={s}><em>{String(i + 1).padStart(2, '0')}</em><b>{s}</b></div>
          ))}
        </div>
      </div>
    </section>
  );
}
