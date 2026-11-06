import SectionHead from './SectionHead';
import { clients, alsoTrustedBy, brandRows } from '../data/content';
import { img } from '../utils';

function BrandMarquee({ row }) {
  const plates = (hidden) =>
    row.items.map((b) => (
      <span className="bplate" key={b.logo + hidden} style={b.bg ? { background: b.bg } : undefined}>
        <img src={img(`brands/${b.logo}.png`)} alt={hidden ? '' : b.name} aria-hidden={hidden || undefined} loading="lazy" />
      </span>
    ));
  return (
    <>
      <div className="wrap brand-cats reveal"><span>{row.label}</span></div>
      <div className={`marquee${row.reverse ? ' rev' : ''}`} aria-label={`${row.label} brands`}>
        <div className="track">{plates(false)}{plates(true)}</div>
      </div>
    </>
  );
}

export default function Clients() {
  return (
    <section id="clients">
      <div className="wrap">
        <SectionHead icon="handshake" tag="07 / trusted_by" title="Trusted" accent="across industries." />
        <div className="logo-wall">
          {clients.map((c, i) => (
            <div className={`logo-tile reveal${i % 4 ? ` d${i % 4}` : ''}`} key={c.logo}>
              <div className="plate"><img src={img(`clients/${c.logo}.png`)} alt={`${c.name} logo`} loading="lazy" /></div>
              <div className="cap"><b>{c.name}</b><span>{c.sector}</span></div>
            </div>
          ))}
        </div>
        <p className="also reveal">
          Also trusted by {alsoTrustedBy.map((n, i) => <span key={n}>{i > 0 && ' and '}<b>{n}</b></span>)}.
        </p>
      </div>

      <div style={{ marginTop: 110 }} className="wrap">
        <SectionHead icon="badge" tag="08 / technology_partners" title="Genuine products from" accent="brands the world trusts." />
      </div>
      {brandRows.map((r) => <BrandMarquee key={r.label} row={r} />)}
      <p className="note wrap">
        We also supply Epson, ESET, Acer, APC and other leading brands. Brand availability and partnership status may vary by product category and supplier arrangement.
      </p>
    </section>
  );
}
