import AnimIcon from './AnimIcon';
import SectionHead from './SectionHead';
import { services, processSteps } from '../data/content';
import { CctvArt, NetworkingArt, UpsArt, ComputersArt, PrintersArt, AccessoriesArt, CustomArt } from './Illustrations';

const ART = { cctv: CctvArt, network: NetworkingArt, ups: UpsArt, computers: ComputersArt, printers: PrintersArt, accessories: AccessoriesArt, custom: CustomArt };

const ICONS = {
  cctv: <><path d="M3 7l13-3 2 6-13 3z" /><path d="M7 13l1 4h4" /><path d="M12 17v3H4" /><path d="M18 8l3-1" /></>,
  network: <><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-5h14v5" /></>,
  power: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  printer: <><path d="M6 9V3h12v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><rect x="7" y="14" width="10" height="7" rx="1" /></>,
  keyboard: <><rect x="2" y="7" width="20" height="12" rx="2" /><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M7 15h10" /></>,
  star: <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.6 6.5 19.5l1-6.3L3 8.9 9 8z" />,
};

export function Icon({ name }) {
  return (
    <div className="ic">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{ICONS[name]}</svg>
    </div>
  );
}

function ServiceCard({ s, i }) {
  const Art = ART[s.art];
  const delay = i % 3 ? ` d${i % 3}` : '';
  return (
    <article className={`card svc${s.size ? ` ${s.size}` : ''} reveal${delay}`}>
      <span className="code">{s.code}</span>
      <div className="ph ill-wrap"><Art /></div>
      <Icon name={s.icon} />
      <h3>{s.title}</h3>
      <p>{s.text}</p>
      {s.chips && <div className="chips">{s.chips.map((c) => <span key={c}>{c}</span>)}</div>}
      {s.securityFor && <div className="for"><b>SECURITY FOR</b>{s.securityFor}</div>}
    </article>
  );
}

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHead
          icon="layers" tag="03 / products_&_services" title="Everything your technology" accent="needs, under one roof." split
          lead="A complete range of products and services for modern residential, commercial, institutional and industrial requirements."
        />
        <div className="bento">
          {services.map((s, i) => <ServiceCard key={s.code} s={s} i={i} />)}
        </div>

        <div className="card process reveal" id="process">
          <h3 className="h-ic"><AnimIcon name="rocket" size="sm" />How we deliver <span className="tag" style={{ marginLeft: 14, verticalAlign: 'middle' }}>end_to_end</span></h3>
          <div className="steps">
            <div className="line"><i /></div>
            {processSteps.map((p, i) => (
              <div className="step" key={p.title}>
                <div className="dot">{String(i + 1).padStart(2, '0')}</div><h4>{p.title}</h4><p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
