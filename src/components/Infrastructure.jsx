import { useEffect, useMemo, useRef } from 'react';
import SectionHead from './SectionHead';
import TopologySvg from './TopologySvg';
import useLiveNumber from '../hooks/useLiveNumber';
import { infraCaps } from '../data/content';

/* Switch / patch-panel ports with randomly blinking link LEDs */
function Ports({ n, type }) {
  const ports = useMemo(
    () => Array.from({ length: n }, () => (Math.random() < 0.78 ? (0.35 + Math.random() * 1.3).toFixed(2) : null)),
    [n]
  );
  return (
    <div className={`ports${type === 'fiber' ? ' fiber' : ''}`} data-type={type}>
      {ports.map((d, i) => <i key={i} className={d ? 'on' : ''} style={d ? { '--d': `${d}s` } : undefined} />)}
    </div>
  );
}

function Unit({ name, sub, children, tall }) {
  return (
    <div className={`u${tall ? ' tall' : ''}`}>
      <div className="ul">{name}<small>{sub}</small></div>
      {children}
    </div>
  );
}

function Rack() {
  const load = useLiveNumber(38, 46);
  return (
    <div className="card rack reveal d1" aria-label="Illustration of a network rack">
      <div className="rack-top"><span>RACK-01 · 12U</span><span className="temp">24°C</span></div>
      <Unit name="FIREWALL" sub="UTM · VPN">
        <div className="fw">
          <span className="leds"><i className="g" /><i className="g" /><i className="r" /></span>
          <span className="fwp"><i /><i /><i /><i /><i /><i /></span>
        </div>
      </Unit>
      <Unit name="PATCH PANEL" sub="CAT6A · 24P"><Ports n={24} type="patch" /></Unit>
      <Unit name="CORE SWITCH" sub="10G UPLINK"><Ports n={24} type="link" /></Unit>
      <Unit name="POE+ SWITCH" sub="CCTV · 16P"><Ports n={16} type="poe" /></Unit>
      <Unit name="PATCH PANEL" sub="CAT6 · 24P"><Ports n={24} type="patch" /></Unit>
      <Unit name="FIBER ODF" sub="SM / MM"><Ports n={12} type="fiber" /></Unit>
      <Unit name="NVR" sub="64CH · RAID" tall>
        <div className="bays">{Array.from({ length: 8 }, (_, i) => <i key={i} />)}</div>
      </Unit>
      <Unit name="UPS" sub="ONLINE · 3KVA" tall>
        <div className="ups">
          <div className="lcd"><b>LOAD {load}%</b><span>BATT ████████ 100%</span></div>
          <div className="leds"><i className="g" /><i className="g" /><i /></div>
        </div>
      </Unit>
    </div>
  );
}

function Topology() {
  const scroller = useRef(null);
  const latency = useLiveNumber(1, 3);
  const throughput = useLiveNumber(900, 980);
  // On small screens the diagram scrolls sideways — start it centred.
  useEffect(() => {
    const t = scroller.current;
    const centre = () => { t.scrollLeft = (t.scrollWidth - t.clientWidth) / 2; };
    centre();
    addEventListener('resize', centre);
    return () => removeEventListener('resize', centre);
  }, []);
  return (
    <div className="card topo reveal">
      <div className="topo-head"><span className="live">LIVE TOPOLOGY</span><span>SITE · EPT-NET-01</span></div>
      <div className="topo-scroll" ref={scroller}><TopologySvg /></div>
      <div className="topo-foot">
        <span><i className="ok" />All nodes online</span>
        <span>Latency <b>{latency} ms</b></span>
        <span>Throughput <b>{throughput} Mbps</b></span>
      </div>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <section id="infra">
      <div className="wrap">
        <SectionHead
          icon="network" tag="04 / network_infrastructure" title="We build the network" accent="behind your business." split
          lead="From the internet line to every camera, PC and access point: structured cabling, fibre, switching, Wi-Fi and power, designed, installed and supported end-to-end."
        />
        <div className="infra-grid">
          <Topology />
          <Rack />
        </div>
        <div className="caps reveal">{infraCaps.map((c) => <span key={c}>{c}</span>)}</div>
      </div>
    </section>
  );
}
