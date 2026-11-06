// Animated network topology diagram (internet → firewall → switches → endpoints).
// Also defines the icon <symbol>s (#i-cam, #i-ap …) reused by the hero orbit.
export default function TopologySvg() {
  return (
    <svg viewBox="0 -14 640 462" role="img" aria-label="Network diagram: internet to firewall to core switch to access switches to cameras, PCs, Wi-Fi, printers, NVR and laptops">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff3b30" /><stop offset="1" stopColor="#ff8a5c" /></linearGradient>
            <filter id="gl" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9z" /></symbol>
            <symbol id="i-fw" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></symbol>
            <symbol id="i-sw" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01" /></symbol>
            <symbol id="i-cam" viewBox="0 0 24 24"><path d="M3 7l13-3 2 6-13 3z" /><path d="M7 13l1 4h4M12 17v3H4" /></symbol>
            <symbol id="i-pc" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></symbol>
            <symbol id="i-ap" viewBox="0 0 24 24"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0" /><circle cx="12" cy="19.5" r="1" /></symbol>
            <symbol id="i-pr" viewBox="0 0 24 24"><path d="M6 9V3h12v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><rect x="7" y="14" width="10" height="7" /></symbol>
            <symbol id="i-nvr" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></symbol>
            <symbol id="i-lap" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="10" rx="1.5" /><path d="M2 19h20" /></symbol>
          </defs>
          <g className="links">
            <path id="L1" d="M320 58 V128" />
            <path id="L2" d="M320 152 V208" />
            <path id="L3" d="M320 232 C320 262 160 250 160 290" />
            <path id="L4" d="M320 232 C320 262 480 250 480 290" />
            <path id="L5" d="M160 314 C160 340 60 335 60 370" />
            <path id="L6" d="M160 314 V370" />
            <path id="L7" d="M160 314 C160 340 260 335 260 370" />
            <path id="L8" d="M480 314 C480 340 380 335 380 370" />
            <path id="L9" d="M480 314 V370" />
            <path id="L10" d="M480 314 C480 340 580 335 580 370" />
          </g>
          <g className="flow"><use href="#L1" /><use href="#L2" /><use href="#L3" /><use href="#L4" /><use href="#L5" /><use href="#L6" /><use href="#L7" /><use href="#L8" /><use href="#L9" /><use href="#L10" /></g>
          <g className="pk" filter="url(#gl)">
            <circle r="3.2"><animateMotion dur="1.6s" repeatCount="indefinite"><mpath href="#L1" /></animateMotion></circle>
            <circle r="3.2" className="c"><animateMotion dur="1.6s" begin=".8s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#L1" /></animateMotion></circle>
            <circle r="3.2"><animateMotion dur="1.3s" begin=".3s" repeatCount="indefinite"><mpath href="#L2" /></animateMotion></circle>
            <circle r="3.2"><animateMotion dur="2s" begin=".2s" repeatCount="indefinite"><mpath href="#L3" /></animateMotion></circle>
            <circle r="3.2" className="c"><animateMotion dur="2s" begin="1.1s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#L4" /></animateMotion></circle>
            <circle r="3.2"><animateMotion dur="2.2s" begin=".6s" repeatCount="indefinite"><mpath href="#L4" /></animateMotion></circle>
            <circle r="3" className="c"><animateMotion dur="1.8s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#L5" /></animateMotion></circle>
            <circle r="3"><animateMotion dur="1.4s" begin=".5s" repeatCount="indefinite"><mpath href="#L6" /></animateMotion></circle>
            <circle r="3" className="c"><animateMotion dur="1.9s" begin=".9s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#L7" /></animateMotion></circle>
            <circle r="3"><animateMotion dur="1.7s" begin=".2s" repeatCount="indefinite"><mpath href="#L8" /></animateMotion></circle>
            <circle r="3" className="c"><animateMotion dur="1.5s" begin=".7s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#L9" /></animateMotion></circle>
            <circle r="3"><animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#L10" /></animateMotion></circle>
          </g>
          <g className="nodes">
            <g transform="translate(320,36)" className="n hot"><rect x="-40" y="-22" width="80" height="44" rx="12" /><use href="#i-cloud" x="-12" y="-12" width="24" height="24" /><text y="-30">INTERNET / FIBER</text></g>
            <g transform="translate(320,140)" className="n"><rect x="-52" y="-14" width="104" height="28" rx="9" /><use href="#i-fw" x="-44" y="-10" width="20" height="20" /><text x="-18" y="3.5" className="in">FIREWALL</text></g>
            <g transform="translate(320,220)" className="n hot"><rect x="-66" y="-14" width="132" height="28" rx="9" /><use href="#i-sw" x="-58" y="-10" width="20" height="20" /><text x="-32" y="3.5" className="in">CORE SWITCH</text></g>
            <g transform="translate(160,302)" className="n"><rect x="-62" y="-14" width="124" height="28" rx="9" /><use href="#i-sw" x="-54" y="-10" width="20" height="20" /><text x="-28" y="3.5" className="in">POE SWITCH</text></g>
            <g transform="translate(480,302)" className="n"><rect x="-62" y="-14" width="124" height="28" rx="9" /><use href="#i-sw" x="-54" y="-10" width="20" height="20" /><text x="-28" y="3.5" className="in">ACCESS SW</text></g>
            <g transform="translate(60,392)" className="n e"><rect x="-26" y="-22" width="52" height="44" rx="12" /><use href="#i-cam" x="-12" y="-12" width="24" height="24" /><text y="40">CCTV</text></g>
            <g transform="translate(160,392)" className="n e"><rect x="-26" y="-22" width="52" height="44" rx="12" /><use href="#i-pc" x="-12" y="-12" width="24" height="24" /><text y="40">PC</text></g>
            <g transform="translate(260,392)" className="n e"><rect x="-26" y="-22" width="52" height="44" rx="12" /><use href="#i-ap" x="-12" y="-12" width="24" height="24" /><text y="40">WI-FI</text></g>
            <g transform="translate(380,392)" className="n e"><rect x="-26" y="-22" width="52" height="44" rx="12" /><use href="#i-pr" x="-12" y="-12" width="24" height="24" /><text y="40">PRINTER</text></g>
            <g transform="translate(480,392)" className="n e"><rect x="-26" y="-22" width="52" height="44" rx="12" /><use href="#i-nvr" x="-12" y="-12" width="24" height="24" /><text y="40">NVR</text></g>
            <g transform="translate(580,392)" className="n e"><rect x="-26" y="-22" width="52" height="44" rx="12" /><use href="#i-lap" x="-12" y="-12" width="24" height="24" /><text y="40">LAPTOP</text></g>
          </g>
        </svg>
  );
}
