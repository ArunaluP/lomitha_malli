import { Fragment } from 'react';
import { tickerWords } from '../data/content';

function Track({ words, offset }) {
  const once = words.map((w, i) => (
    <Fragment key={w + i}>
      <span className={(i + offset) % 2 ? 'o' : ''}>{w}</span><i>✦</i>
    </Fragment>
  ));
  return <div className="tk-track">{once}{once}</div>;
}

// Two crossed, tilted bands of service names scrolling in opposite directions.
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="tk back"><Track words={[...tickerWords].reverse()} offset={1} /></div>
      <div className="tk front"><Track words={tickerWords} offset={0} /></div>
    </div>
  );
}
