// Animated line icons used beside section headings and card sub-headings.
// <AnimIcon name="shield" />            → default size tile with the icon's own animation
// <AnimIcon name="gear" size="sm" />    → small tile (for card sub-headings)
// <AnimIcon name="code" anim="pulse" /> → override the animation
// Animations: draw · spin · pulse · bounce · swing · beat · glow · tick · float · wave

const ICONS = {
  building: { anim: 'draw', d: <><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 21v-5h6v5M9 10h.01M15 10h.01M9 13.5h.01M15 13.5h.01" /></> },
  code: { anim: 'pulse', d: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /><path className="ai-acc" d="M13.5 4l-3 16" /></> },
  layers: { anim: 'float', d: <><path d="M12 3l9 5-9 5-9-5z" /><path className="ai-acc" d="M3 13l9 5 9-5" /><path d="M3 17.5l9 5 9-5" opacity=".5" /></> },
  network: { anim: 'draw', d: <><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-5h14v5" /></> },
  target: { anim: 'beat', d: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle className="ai-acc ai-fill" cx="12" cy="12" r="1.6" /></> },
  trophy: { anim: 'swing', d: <><path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 21h7M10 17h4v4h-4z" /></> },
  handshake: { anim: 'wave', d: <><path d="M2 12l4-4 4 2 3-3 4 1 5 4" /><path d="M6 8l-4 4 6 6 2-1 2 2 2-1 2 1 4-5" /><path className="ai-acc" d="M10 14l2 2M13 13l2 2" /></> },
  box: { anim: 'bounce', d: <><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /><path className="ai-acc" d="M7.5 5.5l9 5" /></> },
  users: { anim: 'float', d: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle className="ai-acc" cx="17" cy="9" r="2.6" /><path className="ai-acc" d="M16 14.2a5 5 0 0 1 5.5 4.8" /></> },
  leaf: { anim: 'swing', d: <><path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16z" /><path className="ai-acc" d="M4 20c4-4 7-6 11-8" /></> },
  chat: { anim: 'bounce', d: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z" /><path className="ai-acc" d="M8.5 12h.01M12 12h.01M15.5 12h.01" /></> },
  shield: { anim: 'draw', d: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path className="ai-acc" d="M9 12l2 2 4-4" /></> },
  bulb: { anim: 'glow', d: <><path d="M9 18h6M10 21h4" /><path className="ai-acc" d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" /></> },
  award: { anim: 'spinY', d: <><circle className="ai-acc" cx="12" cy="9" r="6" /><path d="M8.5 13.8L7 22l5-3 5 3-1.5-8.2" /></> },
  heart: { anim: 'beat', d: <path className="ai-acc" d="M12 20s-7.5-4.6-9.2-9.3C1.6 7.2 4 4 7.3 4c2 0 3.6 1.1 4.7 2.7C13.1 5.1 14.7 4 16.7 4 20 4 22.4 7.2 21.2 10.7 19.5 15.4 12 20 12 20z" /> },
  clock: { anim: 'tick', d: <><circle cx="12" cy="12" r="9" /><path className="ai-hand" d="M12 12V7" /><path d="M12 12l3.5 2" /></> },
  tool: { anim: 'swing', d: <path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.3-2.3a4 4 0 0 0-5-5L2 10l8-8z" /> },
  sliders: { anim: 'wave', d: <><path d="M4 6h16M4 12h16M4 18h16" opacity=".45" /><circle className="ai-acc ai-fill s1" cx="8" cy="6" r="2.2" /><circle className="ai-acc ai-fill s2" cx="15" cy="12" r="2.2" /><circle className="ai-acc ai-fill s3" cx="10" cy="18" r="2.2" /></> },
  badge: { anim: 'draw', d: <><path d="M12 2l2.4 1.8 3-.2.9 2.9 2.4 1.8-1 2.8 1 2.8-2.4 1.8-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9L3.3 15.7l1-2.8-1-2.8 2.4-1.8.9-2.9 3 .2z" /><path className="ai-acc" d="M8.5 12l2.5 2.5 4.5-5" /></> },
  tag: { anim: 'swing', d: <><path d="M20.6 13.4L13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle className="ai-acc ai-fill" cx="7.5" cy="7.5" r="1.6" /></> },
  headset: { anim: 'pulse', d: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.5" y="13" width="4" height="7" rx="1.5" /><rect x="17.5" y="13" width="4" height="7" rx="1.5" /><path className="ai-acc" d="M19.5 20a4 4 0 0 1-4 2H13" /></> },
  link: { anim: 'wave', d: <><path d="M10 13.5a4.5 4.5 0 0 0 6.4.4l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2" /><path className="ai-acc" d="M14 10.5a4.5 4.5 0 0 0-6.4-.4l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" /></> },
  eye: { anim: 'blink', d: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle className="ai-acc ai-pupil" cx="12" cy="12" r="3" /></> },
  globe: { anim: 'spin', d: <><circle cx="12" cy="12" r="9" /><path className="ai-acc" d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></> },
  gear: { anim: 'spin', d: <><circle className="ai-acc" cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.8 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3.2 14H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 3.2V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></> },
  camera: { anim: 'pulse', d: <><path d="M3 7l13-3 2 6-13 3z" /><path d="M7 13l1 4h4M12 17v3H4" /><circle className="ai-acc ai-fill" cx="14.5" cy="7.2" r="1.2" /></> },
  rocket: { anim: 'float', d: <><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 15l-3-3c1-4 4.5-8.5 12-9-.5 7.5-5 11-9 12z" /><circle className="ai-acc" cx="15" cy="9" r="1.8" /></> },
};

export default function AnimIcon({ name, size = 'md', anim, className = '' }) {
  const ic = ICONS[name] || ICONS.layers;
  return (
    <span className={`ai ai-${size} ai-${anim || ic.anim} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ic.d}</svg>
    </span>
  );
}
