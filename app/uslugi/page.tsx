import Link from "next/link";
import { ContactBanner, PageIntro, PhotoFrame } from "@/components/content";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/studio";

export const metadata = pageMetadata("Usługi", "Indywidualne projekty domów, wnętrz i przestrzeni komercyjnych. Sprawdź zakres usług Norden Architects.", "/uslugi");

export default function ServicesPage() {
  return (
    <>
      <PageIntro label="Oferta" title="Nasze specjalizacje"><p>Od pierwszej koncepcji do dokumentacji i wsparcia na budowie. Zakres ustalamy wspólnie, z uwzględnieniem skali inwestycji.</p></PageIntro>
      <div className="container-wide service-list section-space-bottom">
        {services.map(service => (
          <section id={service.id} key={service.id} className="split-feature service-feature">
            <PhotoFrame photo={service.photo} sizes="(max-width: 700px) 90vw, 48vw" className="split-photo" />
            <Reveal className="split-copy">
              <h2>{service.title}</h2><p>{service.description}</p>
              <h3>Zakres prac</h3><ul className="scope-list">{service.scope.map(item => <li key={item}>{item}</li>)}</ul>
              <p>{service.benefit}</p>
              <Link className="button button-outline" href={{ pathname: "/kontakt", query: { usluga: service.id } }}>Zapytaj o usługę</Link>
            </Reveal>
          </section>
        ))}
      </div>
      <ContactBanner />
    </>
  );
}
