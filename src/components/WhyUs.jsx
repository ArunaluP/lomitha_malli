import AnimIcon from './AnimIcon';
import SectionHead from './SectionHead';
import { reasons } from '../data/content';

const REASON_ICONS = ['clock', 'layers', 'tool', 'sliders', 'badge', 'tag', 'headset', 'link'];

export default function WhyUs() {
  return (
    <section id="why">
      <div className="wrap">
        <SectionHead icon="trophy" tag="06 / why_ept" title="Eight reasons clients" accent="stay with us." />
        <div className="reasons">
          {reasons.map((r, i) => (
            <div className={`card reason reveal${i % 4 ? ` d${i % 4}` : ''}`} key={r.title}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div><AnimIcon name={REASON_ICONS[i]} size="sm" className="sub-ic" /><h4>{r.title}</h4><p>{r.text}</p>
            </div>
          ))}
        </div>
        <div className="card believe reveal">
          <h3>Technology should be reliable, secure, scalable and practical.</h3>
          <p>We work closely with every client to improve security, productivity, connectivity and operational efficiency.</p>
        </div>
      </div>
    </section>
  );
}
