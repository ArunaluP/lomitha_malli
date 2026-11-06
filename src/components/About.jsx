import AnimIcon from './AnimIcon';
import SectionHead from './SectionHead';
import { timeline, values } from '../data/content';

const d = (i) => (i % 5 ? ` d${i % 5}` : '');

const VALUE_ICONS = ['shield', 'bulb', 'award', 'heart', 'users'];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead icon="building" tag="01 / who_we_are" title="Two decades of technology" accent="Sri Lanka can rely on." split />
        <div className="about-grid">
          <div className="card about-main reveal">
            <p>Established in 2004, EPT Solutions (Pvt) Ltd has grown from Energy Power Technology into a complete technology solutions provider for residential, commercial, institutional and industrial customers across Sri Lanka.</p>
            <p>We deliver reliable, innovative and cost-effective solutions in information technology, security, networking, printing and power protection, backed by quality workmanship, dependable products and responsive after-sales support.</p>
            <p>Becoming a Private Limited Company marks the next stage of our growth, and our commitment to structured, professional and scalable solutions.</p>
          </div>
          <div className="card timeline reveal d1">
            {timeline.map((t) => (
              <div className="tl-item" key={t.yr}>
                <div className="yr">{t.yr}</div><h4>{t.title}</h4><p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="vm">
          <div className="card vision reveal"><div className="sub-row"><AnimIcon name="eye" size="sm" /><span className="tag">vision</span></div><h3>Securing the future with smart technology.</h3></div>
          <div className="card reveal d1">
            <div className="sub-row"><AnimIcon name="target" size="sm" /><span className="tag">mission</span></div>
            <h3 style={{ fontSize: 22, lineHeight: 1.3 }}>To provide innovative, reliable and secure technology solutions that empower businesses, institutions and individuals.</h3>
            <p>Through continuous innovation, skilled expertise and customer-focused service, we improve security, productivity, connectivity and operational efficiency.</p>
          </div>
        </div>
        <div className="values">
          {values.map((v, i) => (
            <div className={`card reveal${d(i)}`} key={v.title}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div><AnimIcon name={VALUE_ICONS[i]} size="sm" className="sub-ic" /><h4>{v.title}</h4><p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
