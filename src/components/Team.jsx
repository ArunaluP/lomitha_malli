import SectionHead from './SectionHead';
import { team, environmentPoints } from '../data/content';
import { img } from '../utils';

export function Team() {
  return (
    <section id="team" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <SectionHead icon="users" tag="09 / leadership" title="The people" accent="behind the work." />
        <div className="team">
          {team.map((p, i) => (
            <div className={`card person reveal${i ? ` d${i}` : ''}`} key={p.name}>
              {p.photo ? (
                <div className="pphoto">
                  <img src={img(`team/${p.photo}`)} alt={p.name} loading="lazy" />
                  <span className="pp-scan" />
                  <span className="pp-tag">{p.initials} · EPT</span>
                </div>
              ) : (
                <div className="avatar">{p.initials}</div>
              )}
              <h3>{p.name}</h3><div className="role">{p.role}</div><p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Csr() {
  return (
    <section id="csr" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <SectionHead icon="leaf" tag="10 / csr" title="Technology that" accent="gives back." />
        <p className="lead reveal">We believe technology businesses have a responsibility to contribute positively to society and to support the development of future generations.</p>
        <div className="csr">
          <div className="card reveal">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></svg></div>
            <h3>Technology education support</h3>
            <p>We offer training opportunities and practical exposure to students at technical institutions, including Rathmalana German Tech, so they gain real experience in IT hardware, networking, security systems and related technologies.</p>
          </div>
          <div className="card reveal d1">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16z" /><path d="M4 20c4-4 7-6 11-8" /></svg></div>
            <h3>Environmental responsibility</h3>
            <ul>{environmentPoints.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
