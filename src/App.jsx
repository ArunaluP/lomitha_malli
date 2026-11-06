import SvgDefs from './components/SvgDefs';
import { ScrollProgress, CursorEffects } from './components/Effects';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import Software from './components/Software';
import Infrastructure from './components/Infrastructure';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import { Team, Csr } from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <SvgDefs />
      <ScrollProgress />
      <CursorEffects />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Software />
        <Services />
        <Infrastructure />
        <Projects />
        <WhyUs />
        <Clients />
        <Team />
        <Csr />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
