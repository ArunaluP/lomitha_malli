import { useState } from 'react';
import { company, quoteServices } from '../data/content';
import { img } from '../utils';
import AnimIcon from './AnimIcon';

export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
  </svg>
);

function QuoteForm() {
  const [f, setF] = useState({ name: '', phone: '', service: quoteServices[0], loc: '', msg: '' });
  const [error, setError] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // The send buttons are real links (work everywhere, incl. sandboxed previews);
  // their URLs are rebuilt from the form on every keystroke.
  const txt = `Hello EPT Solutions,\n\nName: ${f.name}\nPhone: ${f.phone || '-'}\nService: ${f.service}\nLocation: ${f.loc || '-'}\n\n${f.msg}`;
  const waHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(txt)}`;
  const mailHref = `mailto:${company.emails[0]}?subject=${encodeURIComponent(`Quote request — ${f.service}`)}&body=${encodeURIComponent(txt)}`;
  const guard = (e) => {
    if (!f.name.trim()) { e.preventDefault(); setError(true); }
    else setError(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Request a quote</h3>
      <p>Send your enquiry straight to our team on WhatsApp or by email.</p>
      {error && <p className="f-err">Please enter your name first.</p>}
      <div className="f-row">
        <label>Name<input value={f.name} onChange={set('name')} required placeholder="Full name" style={error ? { borderColor: 'var(--red)' } : undefined} /></label>
        <label>Phone<input value={f.phone} onChange={set('phone')} type="tel" placeholder="07X XXX XXXX" /></label>
      </div>
      <div className="f-row">
        <label>Service
          <select value={f.service} onChange={set('service')}>{quoteServices.map((s) => <option key={s}>{s}</option>)}</select>
        </label>
        <label>Location<input value={f.loc} onChange={set('loc')} placeholder="City / town" /></label>
      </div>
      <label>Message<textarea value={f.msg} onChange={set('msg')} placeholder="Tell us about your site and requirements" /></label>
      <div className="f-btns">
        <a className="btn btn-wa" href={waHref} target="_blank" rel="noopener noreferrer" onClick={guard}>Send on WhatsApp</a>
        <a className="btn btn-glass" href={mailHref} onClick={guard}>Send by email</a>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box reveal">
          <img className="cb-mark" src={img('mark-light.png')} alt="" aria-hidden="true" />
          <div className="contact-grid">
            <div>
              <div className="sh-row"><AnimIcon name="chat" /><span className="tag">11 / lets_talk</span></div>
              <h2>Tell us what you need to <span className="grad">secure, connect or power.</span></h2>
              <div className="offices">
                {company.offices.map((o) => <div className="off" key={o.title}><h4>{o.title}</h4><p>{o.address}</p></div>)}
                <div className="off"><h4>PHONE</h4>
                  {company.phones.map((p, i) => <span key={p.tel}>{i > 0 && <br />}<a href={`tel:${p.tel}`}>{p.label}</a></span>)}
                </div>
                <div className="off"><h4>EMAIL</h4>
                  {company.emails.map((m, i) => <span key={m}>{i > 0 && <br />}<a href={`mailto:${m}`} style={i ? { fontSize: 13.5 } : undefined}>{m}</a></span>)}
                </div>
              </div>
              <div className="socials">
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp</a>
                <a href={company.instagram.url} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></svg>
                  {company.instagram.handle}
                </a>
                <a href={company.facebook.url} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" /></svg>
                  {company.facebook.name}
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
