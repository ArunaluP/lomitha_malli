// Shared SVG filters & gradients used by the illustrations
export default function SvgDefs() {
  return (
<svg width="0" height="0" style={{position: 'absolute'}} aria-hidden="true"><defs>
<filter id="glw" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
<filter id="glw2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7" /></filter>
<linearGradient id="cone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff3b30" stopOpacity=".55" /><stop offset="1" stopColor="#ff3b30" stopOpacity="0" /></linearGradient>
<linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#262a33" /><stop offset="1" stopColor="#121419" /></linearGradient>
<linearGradient id="rgb" x1="0" x2="1"><stop offset="0" stopColor="#ff3b30" /><stop offset=".33" stopColor="#FBBF24" /><stop offset=".66" stopColor="#3BE8FF" /><stop offset="1" stopColor="#a855f7" /></linearGradient>
<linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1a0d10" /><stop offset="1" stopColor="#0b1a22" /></linearGradient>
</defs></svg>
  );
}
