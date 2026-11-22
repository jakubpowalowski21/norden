import { ArrowDown, Building2, House, PanelsTopLeft, Quote } from "lucide-react";
import Link from "next/link";
import { ContactBanner, PhotoFrame, ProjectCard, SectionHeading } from "@/components/content";
import { Reveal } from "@/components/reveal";
import { featuredProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { images, services, steps } from "@/lib/studio";

export const metadata = pageMetadata("Norden Architects — pracownia architektury i wnętrz", "Projektujemy domy, wnętrza i przestrzenie komercyjne. Poznaj realizacje poznańskiej pracowni Norden Architects.", "/");

const serviceIcons = [House, PanelsTopLeft, Building2];
const statistics = [["12", "lat doświadczenia"], ["86", "projektów"], ["24", "miasta"], ["98%", "zadowolonych klientów"]];
const testimonials = [
  { quote: "Od pierwszej rozmowy czuliśmy, że projekt powstaje wokół naszego życia. Dom płynnie łączy się z ogrodem, dokładnie tak, jak sobie wyobrażaliśmy.", author: "Anna i Michał", project: "Villa Silva" },
  { quote: "Norden pomogło nam zachować charakter kamienicy i dopasować wnętrze do codzienności. Najbardziej doceniamy światło i przemyślany układ.", author: "Katarzyna", project: "Atelier No. 4" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <PhotoFrame photo={images.hero} sizes="100vw" className="hero-image" preload />
        <div className="container-wide hero-inner">
          <div className="hero-copy">
            <p className="eyebrow section-label">Pracownia architektury i wnętrz</p>
            <h1 id="hero-title">Przestrzeń, która<br className="hero-break" /> ma znaczenie.</h1>
            <p className="hero-description">Tworzymy architekturę, która łączy ponadczasową estetykę, funkcjonalność i indywidualny charakter.</p>
            <div className="hero-actions">
              <Link href="/realizacje" className="button button-light">Poznaj nasze realizacje</Link>
              <Link href="/kontakt" className="button button-outline-light">Porozmawiajmy o projekcie</Link>
            </div>
          </div>
          <div className="hero-foot">
            <a href="#pracownia" className="hero-scroll" aria-label="Przewiń do sekcji o pracowni"><ArrowDown size={18} strokeWidth={1.4} /></a>
            <Link href="/realizacje/villa-silva" className="hero-caption"><span>Villa Silva</span><span>Poznań, 2025</span></Link>
          </div>
        </div>
      </section>

      <section id="pracownia" className="section-space container-wide">
        <Reveal className="intro-split">
          <div><p className="eyebrow section-label">O pracowni</p><h2>Architektura zaczyna się od zrozumienia.</h2></div>
          <div className="intro-copy">
            <p>Jesteśmy poznańską pracownią architektury i wnętrz. Przyglądamy się miejscu, słuchamy ludzi i szukamy rozwiązań, które nadadzą przestrzeni własny charakter.</p>
            <p>Projektujemy w skali codziennego życia. Od pierwszego szkicu po detal, którego dotykasz każdego dnia.</p>
            <Link className="text-link" href="/o-nas">Poznaj pracownię</Link>
          </div>
        </Reveal>
      </section>

      <section className="section-space section-tinted">
        <div className="container-wide">
          <Reveal><SectionHeading label="Portfolio" title="Wybrane realizacje"><Link href="/realizacje" className="button button-outline">Wszystkie realizacje</Link></SectionHeading></Reveal>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} sizes={index === 0 ? "(max-width: 700px) 90vw, 55vw" : "(max-width: 700px) 90vw, 33vw"} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-space container-wide">
        <Reveal><SectionHeading label="Oferta" title="Nasze specjalizacje"><Link href="/uslugi" className="text-link">Zobacz pełną ofertę</Link></SectionHeading></Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return <Reveal key={service.id}><Link href={"/uslugi#" + service.id} className="service-card"><Icon size={34} strokeWidth={1.2} aria-hidden="true" /><h3>{service.title}</h3><p>{service.intro}</p></Link></Reveal>;
          })}
        </div>
      </section>

      <section className="section-space-mid stats-section" aria-label="Pracownia w liczbach">
        <Reveal className="container-wide">
          <p className="eyebrow section-label">Pracownia w liczbach</p>
          <dl className="stats-grid">{statistics.map(([number, label]) => <div key={label}><dt>{label}</dt><dd>{number}</dd></div>)}</dl>
          <p className="demo-note">Dane demonstracyjne</p>
        </Reveal>
      </section>

      <section className="section-space container-wide">
        <Reveal><SectionHeading label="Jak pracujemy" title="Od rozmowy do realizacji"><Link href="/proces" className="text-link">Poznaj proces</Link></SectionHeading></Reveal>
        <ol className="steps-grid">{steps.map((step, index) => <li key={step.title}><Reveal><span className="step-number">{String(index + 1).padStart(2, "0")}</span><h3>{step.short}</h3><p>{step.text}</p></Reveal></li>)}</ol>
      </section>

      <section className="section-space section-tinted">
        <div className="container-wide">
          <Reveal><SectionHeading label="Współpraca" title="Z perspektywy klientów" /></Reveal>
          <div className="quote-grid">
            {testimonials.map(({ quote, author, project }) => <Reveal key={author}><figure className="quote-card"><Quote size={29} strokeWidth={1.2} aria-hidden="true" /><blockquote>„{quote}”</blockquote><figcaption><strong>{author}</strong><span>{project} · Opinia demonstracyjna</span></figcaption></figure></Reveal>)}
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
