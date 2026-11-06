import AnimIcon from './AnimIcon';

// Section label + title (+ optional lead paragraph on the right).
export default function SectionHead({ tag, title, accent, lead, split, icon }) {
  const head = (
    <>
      <div className="sh-row reveal">{icon && <AnimIcon name={icon} />}<span className="tag">{tag}</span></div>
      <h2 className="reveal">
        {title}
        {split ? <br /> : ' '}
        <span className="grad">{accent}</span>
      </h2>
    </>
  );
  if (!lead) return head;
  return (
    <div className="sec-head">
      <div>{head}</div>
      <p className="lead reveal">{lead}</p>
    </div>
  );
}
