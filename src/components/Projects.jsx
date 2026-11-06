import AnimIcon from './AnimIcon';
import SectionHead from './SectionHead';
import useInView from '../hooks/useInView';
import { projectRows, caseStudies } from '../data/content';
import { img } from '../utils';

function ProjectTable() {
  const [ref, inView] = useInView();
  return (
    <div className="card proj-list reveal" ref={ref}>
      {projectRows.map((p) => (
        <div className="prow" key={p.name}>
          <div><h4>{p.name}</h4><small>{p.kind}</small></div>
          <div className={`bar${p.ongoing ? ' on' : ''}`}><i style={{ width: inView ? `${p.pct}%` : 0 }} /></div>
          <div className="cnt">{p.count}</div>
          <div className={`st ${p.ongoing ? 'on' : 'done'}`}>{p.ongoing ? 'ONGOING' : 'COMPLETED'}</div>
        </div>
      ))}
    </div>
  );
}

function CaseCard({ c, i }) {
  const layout = c.layout ? ` ${c.layout}` : '';
  return (
    <article className={`card case${layout} reveal${i % 2 ? ' d1' : ''}`}>
      <div className={`shot${c.images.length > 1 ? ' split' : ''}`}>
        {c.images.map((src) => <img key={src} src={img(src)} alt={c.title} loading="lazy" />)}
        <div className="hud"><span>{c.hud[0]}</span><span>{c.hud[1]}</span></div>
        <span className={`badge ${c.ongoing ? 'on' : 'done'}`}>● {c.ongoing ? 'ONGOING' : 'COMPLETED'}</span>
      </div>
      <div className="body">
        <div className="loc"><AnimIcon name="camera" size="xs" />{c.loc}</div>
        <h3>{c.title}</h3>
        <div className="kind">{c.kind}</div>
        <p>{c.text}</p>
        <div className="kpis">
          {c.kpis.map(([b, s]) => <div className="kpi" key={s}><b>{b}</b><span>{s}</span></div>)}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sh-row reveal"><AnimIcon name="target" /><span className="tag">05 / project_portfolio</span></div>
            <h2 className="reveal">Large-scale projects,<br /><span className="grad">delivered &amp; in progress.</span></h2>
          </div>
          <p className="lead reveal">
            Security, surveillance, networking and integrated technology projects — <b style={{ color: '#fff' }}>480+ CCTV cameras</b> across our five featured sites.
          </p>
        </div>
        <ProjectTable />
        <div className="cases">
          {caseStudies.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}
