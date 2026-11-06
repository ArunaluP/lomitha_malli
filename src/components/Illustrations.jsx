// Custom animated line-art illustrations for each service card.
// Animations are driven by CSS classes in index.css (.ill …).

export function CctvArt() {
  return (
    <svg className="ill" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <g className="cone-sweep"><path d="M232 118 L560 250 L420 300 Z" fill="url(#cone)" /></g>
 <rect className="st" x="40" y="30" width="16" height="120" rx="3" />
 <path className="st" d="M56 90 H100 L118 104" />
 <g className="pan">
  <rect x="96" y="80" width="140" height="50" rx="14" fill="url(#body)" className="st" />
  <path className="st" d="M90 76 H230 L246 70" />
  <rect x="226" y="86" width="20" height="38" rx="6" fill="#0b0c10" className="st" />
  <circle cx="240" cy="105" r="12" className="rd" fill="#1a0b0c" /><circle cx="240" cy="105" r="5" fill="#ff3b30" filter="url(#glw)" className="blink" />
  <text x="112" y="110" className="lbl">EPT · 4K</text>
 </g>
 <g transform="translate(440,40)">
  <rect x="-60" y="-12" width="120" height="14" rx="4" className="st" fill="url(#body)" />
  <path d="M-48 2 A48 48 0 0 0 48 2 Z" className="st" fill="url(#body)" />
  <circle cx="0" cy="22" r="14" className="cy" fill="#08151a" /><circle cx="0" cy="22" r="6" fill="#3BE8FF" filter="url(#glw)" />
  <g className="ir"><circle cx="-22" cy="16" r="2.2" /><circle cx="22" cy="16" r="2.2" /><circle cx="-14" cy="30" r="2.2" /><circle cx="14" cy="30" r="2.2" /></g>
 </g>
 <g className="det"><rect x="430" y="170" width="54" height="90" rx="3" className="cy dash" /><text x="430" y="164" className="tag cyt">PERSON 98%</text>
  <circle cx="457" cy="190" r="10" className="st" /><path className="st" d="M440 250 V222 a17 17 0 0 1 34 0 V250" /></g>
 <g transform="translate(110,215)" className="shield"><circle r="38" className="ring" /><circle r="38" className="ring r2" />
  <path d="M0 -26 L22 -17 V0 C22 15 10 24 0 28 C-10 24 -22 15 -22 0 V-17 Z" className="rd" fill="#1a0b0c" filter="url(#glw)" />
  <path d="M-9 0 L-2 7 L10 -6" className="rd" strokeWidth="3" /></g>
 <text x="40" y="22" className="tag"><tspan className="recdot">●</tspan> REC  CAM-01</text>
 <g transform="translate(250,200)"><rect width="120" height="74" rx="6" className="st" fill="#0b0c10" />
  <rect x="6" y="6" width="52" height="29" rx="2" className="feed" /><rect x="62" y="6" width="52" height="29" rx="2" className="feed f2" />
  <rect x="6" y="39" width="52" height="29" rx="2" className="feed f3" /><rect x="62" y="39" width="52" height="29" rx="2" className="feed f4" />
  <path className="st" d="M50 74 v10 M70 74 v10 M38 86 h44" /></g>
</svg>
  );
}

export function NetworkingArt() {
  return (
    <svg className="ill" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <path className="st" d="M184 30 a16 16 0 0 1 30 -6 a12 12 0 0 1 20 10 a11 11 0 0 1 -2 22 H186 a13 13 0 0 1 -2 -26z" />
 <path id="nu" className="cable" d="M200 56 V80" />
 <rect x="100" y="78" width="200" height="34" rx="6" fill="url(#body)" className="st" /><rect x="112" y="92" width="16" height="12" rx="2" className="port" /><circle cx="124" cy="88" r="2" className="led" style={{animationDelay: '0.00s'}} /><rect x="134" y="92" width="16" height="12" rx="2" className="port" /><circle cx="146" cy="88" r="2" className="led" style={{animationDelay: '0.27s'}} /><rect x="156" y="92" width="16" height="12" rx="2" className="port" /><circle cx="168" cy="88" r="2" className="led" style={{animationDelay: '0.54s'}} /><rect x="178" y="92" width="16" height="12" rx="2" className="port" /><circle cx="190" cy="88" r="2" className="led" style={{animationDelay: '0.81s'}} /><rect x="200" y="92" width="16" height="12" rx="2" className="port" /><circle cx="212" cy="88" r="2" className="led" style={{animationDelay: '1.08s'}} /><rect x="222" y="92" width="16" height="12" rx="2" className="port" /><circle cx="234" cy="88" r="2" className="led" style={{animationDelay: '0.05s'}} /><rect x="244" y="92" width="16" height="12" rx="2" className="port" /><circle cx="256" cy="88" r="2" className="led" style={{animationDelay: '0.32s'}} /><rect x="266" y="92" width="16" height="12" rx="2" className="port" /><circle cx="278" cy="88" r="2" className="led" style={{animationDelay: '0.59s'}} />
 <path id="n1" className="cable" d="M120 112 C120 140 60 140 60 168" />
 <path id="n2" className="cable" d="M164 112 C164 140 150 140 150 168" />
 <path id="n3" className="cable" d="M236 112 C236 140 250 140 250 168" />
 <path id="n4" className="cable" d="M280 112 C280 140 340 140 340 168" />
 <g className="pk2" filter="url(#glw)"><circle r="3"><animateMotion dur="1.4s" repeatCount="indefinite"><mpath href="#n1" /></animateMotion></circle>
 <circle r="3" className="c"><animateMotion dur="1.6s" begin=".4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#n2" /></animateMotion></circle>
 <circle r="3"><animateMotion dur="1.5s" begin=".2s" repeatCount="indefinite"><mpath href="#n3" /></animateMotion></circle>
 <circle r="3" className="c"><animateMotion dur="1.3s" begin=".7s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#n4" /></animateMotion></circle>
 <circle r="3"><animateMotion dur=".9s" repeatCount="indefinite"><mpath href="#nu" /></animateMotion></circle></g>
 <g transform="translate(60,186)"><rect x="-18" y="-16" width="36" height="24" rx="3" className="st" fill="#0b0c10" /><path className="st" d="M-8 14 h16 M0 8 v6" /></g>
 <g transform="translate(150,186)"><path className="st" d="M-16 -8 l26 -6 4 12 -26 6z M-8 4 l2 8 h8" /></g>
 <g transform="translate(250,186)"><path className="cy" d="M-14 -2 a20 20 0 0 1 28 0 M-8 4 a11 11 0 0 1 16 0" /><circle cx="0" cy="10" r="2.4" fill="#3BE8FF" /></g>
 <g transform="translate(340,186)"><rect x="-16" y="-16" width="32" height="12" rx="2" className="st" /><rect x="-16" y="0" width="32" height="12" rx="2" className="st" /><circle cx="-9" cy="-10" r="1.6" className="led" /><circle cx="-9" cy="6" r="1.6" className="led" style={{animationDelay: '.5s'}} /></g>
 <text x="104" y="74" className="tag">CORE SW · 10G</text>
</svg>
  );
}

export function UpsArt() {
  return (
    <svg className="ill" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <path className="wave" d="M20 120 q12 -22 24 0 t24 0 t24 0 t24 0 t24 0" />
 <rect x="150" y="34" width="96" height="160" rx="10" fill="url(#body)" className="st" />
 <rect x="162" y="48" width="72" height="40" rx="4" fill="#0b2a3a" stroke="#1e5a78" />
 <text x="168" y="62" className="lcdt">LOAD 42%</text>
 <g className="batt"><rect x="168" y="70" width="10" height="10" rx="1" /><rect x="181" y="70" width="10" height="10" rx="1" /><rect x="194" y="70" width="10" height="10" rx="1" /><rect x="207" y="70" width="10" height="10" rx="1" /><rect x="220" y="70" width="8" height="10" rx="1" /></g>
 <path d="M204 104 l-14 26 h12 l-6 24 20 -32 h-12 l8 -18z" fill="#ff3b30" filter="url(#glw)" className="bolt" />
 <g className="vents"><path className="st thin" d="M164 170 h68 M164 178 h68 M164 186 h68" /></g>
 <path className="flow2" d="M246 120 H300" />
 <g transform="translate(330,120)"><rect x="-30" y="-36" width="60" height="22" rx="3" className="st" fill="#0b0c10" /><rect x="-30" y="-10" width="60" height="22" rx="3" className="st" fill="#0b0c10" /><rect x="-30" y="16" width="60" height="22" rx="3" className="st" fill="#0b0c10" />
  <circle cx="-20" cy="-25" r="2" className="led" /><circle cx="-20" cy="1" r="2" className="led" style={{animationDelay: '.3s'}} /><circle cx="-20" cy="27" r="2" className="led" style={{animationDelay: '.6s'}} /></g>
 <path className="st" d="M20 120 H8 M8 112 v16" />
 <text x="20" y="96" className="tag">AC IN · 230V</text><text x="262" y="196" className="tag">PROTECTED</text>
</svg>
  );
}

export function ComputersArt() {
  return (
    <svg className="ill" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <rect x="120" y="30" width="170" height="112" rx="8" className="st" fill="#0b0c10" />
 <rect x="128" y="38" width="154" height="96" rx="4" fill="url(#scr)" /><rect x="136" y="46" height="5" rx="2" className="code" style={{'--w': '70px', animationDelay: '0.00s'}} /><rect x="148" y="58" height="5" rx="2" className="code" style={{'--w': '96px', animationDelay: '0.35s'}} /><rect x="136" y="70" height="5" rx="2" className="code" style={{'--w': '52px', animationDelay: '0.70s'}} /><rect x="148" y="82" height="5" rx="2" className="code" style={{'--w': '110px', animationDelay: '1.05s'}} /><rect x="136" y="94" height="5" rx="2" className="code" style={{'--w': '80px', animationDelay: '1.40s'}} /><rect x="148" y="106" height="5" rx="2" className="code" style={{'--w': '64px', animationDelay: '1.75s'}} />
 <path className="st" d="M190 142 v20 M220 142 v20 M172 164 h66" />
 <g transform="translate(262,120)"><path d="M10 40 h104 l10 14 H0z" className="st" fill="url(#body)" /><rect x="18" y="0" width="88" height="40" rx="4" className="st" fill="#0b0c10" />
  <path className="rd" d="M40 26 l10 -10 M50 16 l12 12" filter="url(#glw)" /><circle cx="62" cy="20" r="6" className="rd blinkline" /></g>
 <g className="wrench" transform="translate(70,150)"><path className="rd" filter="url(#glw)" d="M-6 -30 a14 14 0 0 0 -4 22 L-34 18 a5 5 0 0 0 8 8 L-2 2 a14 14 0 0 0 22 -4 l-10 -2 -2 -10 z" /></g>
 <g transform="translate(60,60)" className="chip"><rect x="-18" y="-18" width="36" height="36" rx="4" className="cy" fill="#08151a" /><rect x="-8" y="-8" width="16" height="16" rx="2" fill="#3BE8FF" opacity=".5" filter="url(#glw)" />
  <path className="cy thin" d="M-10 -18 v-8 M0 -18 v-8 M10 -18 v-8 M-10 18 v8 M0 18 v8 M10 18 v8 M-18 -10 h-8 M-18 0 h-8 M-18 10 h-8 M18 -10 h8 M18 0 h8 M18 10 h8" /></g>
 <text x="128" y="24" className="tag">DIAGNOSTICS · OK</text>
</svg>
  );
}

export function PrintersArt() {
  return (
    <svg className="ill" viewBox="0 28 400 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <rect x="130" y="40" width="140" height="34" rx="4" className="st" fill="#0b0c10" />
 <g className="paper"><rect x="146" y="96" width="108" height="96" rx="2" fill="#E6E8EC" />
  <rect x="158" y="108" width="60" height="5" rx="2" fill="#9aa0ae" /><rect x="158" y="118" width="84" height="4" rx="2" fill="#c3c7d0" /><rect x="158" y="126" width="72" height="4" rx="2" fill="#c3c7d0" />
  <rect x="158" y="138" width="22" height="22" rx="2" fill="#3BE8FF" /><rect x="182" y="138" width="22" height="22" rx="2" fill="#ec4899" /><rect x="206" y="138" width="22" height="22" rx="2" fill="#FBBF24" /><rect x="230" y="138" width="12" height="22" rx="2" fill="#111" /></g>
 <rect x="104" y="70" width="192" height="64" rx="10" fill="url(#body)" className="st" />
 <rect x="130" y="112" width="140" height="10" rx="3" fill="#06070a" className="st" />
 <rect x="250" y="82" width="30" height="12" rx="2" fill="#0b2a3a" stroke="#1e5a78" /><circle cx="120" cy="88" r="3" className="led" />
 <g className="drops"><path d="M330 70 c0 0 -10 12 -10 18 a10 10 0 0 0 20 0 c0 -6 -10 -18 -10 -18z" fill="#3BE8FF" />
  <path d="M354 90 c0 0 -10 12 -10 18 a10 10 0 0 0 20 0 c0 -6 -10 -18 -10 -18z" fill="#ec4899" />
  <path d="M330 116 c0 0 -10 12 -10 18 a10 10 0 0 0 20 0 c0 -6 -10 -18 -10 -18z" fill="#FBBF24" />
  <path d="M354 136 c0 0 -10 12 -10 18 a10 10 0 0 0 20 0 c0 -6 -10 -18 -10 -18z" fill="#E6E8EC" /></g>
 <g transform="translate(46,120)"><rect x="-26" y="-18" width="52" height="36" rx="6" className="rd" fill="#1a0b0c" /><path className="rd thin" d="M-16 -6 h32 M-16 4 h20" /><text x="-24" y="34" className="tag">TONER</text></g>
</svg>
  );
}

export function AccessoriesArt() {
  return (
    <svg className="ill" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <rect x="84" y="114" width="232" height="72" rx="8" fill="url(#rgb)" opacity=".55" filter="url(#glw2)" className="under" />
 <rect x="86" y="112" width="228" height="70" rx="8" fill="url(#body)" className="st" /><rect x="96" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.00s'}} /><rect x="112" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.13s'}} /><rect x="128" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.26s'}} /><rect x="144" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.39s'}} /><rect x="160" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.52s'}} /><rect x="176" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.65s'}} /><rect x="192" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.78s'}} /><rect x="208" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.91s'}} /><rect x="224" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.04s'}} /><rect x="240" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.17s'}} /><rect x="256" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.30s'}} /><rect x="272" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.43s'}} /><rect x="288" y="120" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.56s'}} /><rect x="104" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.39s'}} /><rect x="120" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.52s'}} /><rect x="136" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.65s'}} /><rect x="152" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.78s'}} /><rect x="168" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.91s'}} /><rect x="184" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.04s'}} /><rect x="200" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.17s'}} /><rect x="216" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.30s'}} /><rect x="232" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.43s'}} /><rect x="248" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.56s'}} /><rect x="264" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.69s'}} /><rect x="280" y="135" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.82s'}} /><rect x="112" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.78s'}} /><rect x="128" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.91s'}} /><rect x="144" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.04s'}} /><rect x="160" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.17s'}} /><rect x="176" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.30s'}} /><rect x="192" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.43s'}} /><rect x="208" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.56s'}} /><rect x="224" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.69s'}} /><rect x="240" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.82s'}} /><rect x="256" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.95s'}} /><rect x="272" y="150" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.08s'}} /><rect x="120" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.17s'}} /><rect x="136" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.30s'}} /><rect x="152" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.43s'}} /><rect x="168" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.56s'}} /><rect x="184" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.69s'}} /><rect x="200" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.82s'}} /><rect x="216" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '1.95s'}} /><rect x="232" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.08s'}} /><rect x="248" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.21s'}} /><rect x="264" y="165" width="13" height="12" rx="2" className="key" style={{animationDelay: '0.34s'}} />
 <path className="st" d="M150 96 a50 50 0 0 1 100 0" strokeWidth="5" />
 <rect x="138" y="80" width="18" height="30" rx="7" fill="url(#body)" className="st" /><rect x="244" y="80" width="18" height="30" rx="7" fill="url(#body)" className="st" />
 <circle cx="147" cy="95" r="4" fill="#3BE8FF" filter="url(#glw)" className="hue" /><circle cx="253" cy="95" r="4" fill="#3BE8FF" filter="url(#glw)" className="hue" />
 <g transform="translate(352,150)"><path d="M-16 -4 a16 22 0 0 1 32 0 v12 a16 22 0 0 1 -32 0z" fill="url(#body)" className="st" /><path className="st" d="M0 -26 v14" /><rect x="-2" y="-18" width="4" height="8" rx="2" fill="#ff3b30" filter="url(#glw)" /></g>
 <g transform="translate(46,70)"><rect x="-22" y="-14" width="44" height="28" rx="3" className="cy" fill="#08151a" /><path className="cy thin" d="M-14 -6 h18 M-14 2 h12" /><rect x="12" y="-8" width="6" height="16" rx="1" fill="#3BE8FF" opacity=".6" /><text x="-22" y="28" className="tag">SSD 1TB</text></g>
 <g transform="translate(46,140)"><rect x="-10" y="-20" width="20" height="30" rx="3" className="st" fill="#0b0c10" /><rect x="-6" y="10" width="12" height="10" rx="1" className="st" /><text x="-22" y="40" className="tag">USB</text></g>
</svg>
  );
}

export function CustomArt() {
  return (
    <svg className="ill" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <path id="cf" className="cable" d="M158 70 H182 M258 70 H282 M358 70 H382" />
 <path id="cfp" d="M120 70 H420" fill="none" />
 <g transform="translate(120,70)"><rect x="-38" y="-18" width="76" height="36" rx="8" className="rd node" fill="#0b0c10" style={{animationDelay: '0.0s'}} /><text y="4" className="tagc">CONSULT</text></g><g transform="translate(220,70)"><rect x="-38" y="-18" width="76" height="36" rx="8" className="st node" fill="#0b0c10" style={{animationDelay: '0.6s'}} /><text y="4" className="tagc">DESIGN</text></g><g transform="translate(320,70)"><rect x="-38" y="-18" width="76" height="36" rx="8" className="st node" fill="#0b0c10" style={{animationDelay: '1.2s'}} /><text y="4" className="tagc">INSTALL</text></g><g transform="translate(420,70)"><rect x="-38" y="-18" width="76" height="36" rx="8" className="st node" fill="#0b0c10" style={{animationDelay: '1.7999999999999998s'}} /><text y="4" className="tagc">SUPPORT</text></g>
 <circle r="4" fill="#ff3b30" filter="url(#glw)"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#cfp" /></animateMotion></circle>
 <g className="spin" style={{transformOrigin: '62px 150px'}}><path className="st gear" d="M88.0,150.0 L95.6,155.3 L94.3,160.5 L85.2,161.8 L83.0,165.3 L86.0,174.0 L82.0,177.5 L73.8,173.2 L70.0,174.7 L67.3,183.6 L62.0,184.0 L57.9,175.7 L54.0,174.7 L46.6,180.3 L42.0,177.5 L43.6,168.4 L41.0,165.3 L31.7,165.4 L29.7,160.5 L36.3,154.1 L36.0,150.0 L28.4,144.7 L29.7,139.5 L38.8,138.2 L41.0,134.7 L38.0,126.0 L42.0,122.5 L50.2,126.8 L54.0,125.3 L56.7,116.4 L62.0,116.0 L66.1,124.3 L70.0,125.3 L77.4,119.7 L82.0,122.5 L80.4,131.6 L83.0,134.7 L92.3,134.6 L94.3,139.5 L87.7,145.9 Z" /><circle className="st" cx="62" cy="150" r="9" /></g>
 <g className="spin rev" style={{transformOrigin: '104px 122px'}}><path className="st gear" d="M119.0,122.0 L124.6,126.1 L123.4,130.0 L116.5,130.3 L114.6,132.6 L115.7,139.5 L112.0,141.4 L106.9,136.7 L104.0,137.0 L99.9,142.6 L96.0,141.4 L95.7,134.5 L93.4,132.6 L86.5,133.7 L84.6,130.0 L89.3,124.9 L89.0,122.0 L83.4,117.9 L84.6,114.0 L91.5,113.7 L93.4,111.4 L92.3,104.5 L96.0,102.6 L101.1,107.3 L104.0,107.0 L108.1,101.4 L112.0,102.6 L112.3,109.5 L114.6,111.4 L121.5,110.3 L123.4,114.0 L118.7,119.1 Z" /><circle className="st" cx="104" cy="122" r="5" /></g>
 <g transform="translate(160,120)"><rect width="300" height="64" rx="8" className="st" fill="#0b0c10" />
  <rect x="16" y="40" width="20" height="14" rx="2" className="bar" style={{'--h': '14px'}} /><rect x="44" y="30" width="20" height="24" rx="2" className="bar" style={{'--h': '24px', animationDelay: '.2s'}} />
  <rect x="72" y="20" width="20" height="34" rx="2" className="bar r" style={{'--h': '34px', animationDelay: '.4s'}} /><rect x="100" y="26" width="20" height="28" rx="2" className="bar" style={{'--h': '28px', animationDelay: '.6s'}} />
  <path className="cy" d="M140 46 L170 36 L196 42 L226 22 L256 28 L284 14" filter="url(#glw)" />
  <text x="140" y="16" className="tag">AMC · UPTIME 99.9%</text></g>
 <path className="rd" d="M470 40 l8 8 16 -16" strokeWidth="3" filter="url(#glw)" />
</svg>
  );
}

