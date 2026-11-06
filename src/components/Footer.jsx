import { company } from '../data/content';
import { img } from '../utils';
import { WhatsAppIcon } from './Contact';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap foot">
          <div className="f-brand">
            <img src={img('mark-light.png')} alt="EPT Solutions logo" />
            <div><b>EPT SOLUTIONS (PVT) LTD</b><br />Formerly {company.formerly} · Established {company.founded} · Serving all of Sri Lanka</div>
          </div>
          <div className="m">REG. {company.regNo} · © {new Date().getFullYear()} EPT SOLUTIONS</div>
        </div>
      </footer>
      <a className="wa-float" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
