import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/content";
import { pageMetadata } from "@/lib/seo";
import { studio } from "@/lib/studio";

export const metadata = pageMetadata("Kontakt", "Dane kontaktowe poznańskiej pracowni Norden Architects i demonstracyjny formularz zapytania o projekt.", "/kontakt");

export default function ContactPage() {
  return (
    <>
      <PageIntro label="Kontakt" title="Porozmawiajmy o projekcie"><p>Na pierwszą rozmowę wystarczy krótki opis inwestycji i miejsce, z którym jest związana.</p></PageIntro>
      <div className="container-wide contact-layout section-space-bottom">
        <section className="contact-details">
          <p className="eyebrow section-label">Poznań, Polska</p><h2>Pracownia Norden</h2>
          <address>
            <p><a href={"mailto:" + studio.email}>{studio.email}</a><br /><a href={"tel:" + studio.telephone}>{studio.phone}</a></p>
            <p>{studio.address}<br />{studio.hours}</p>
          </address>
          <p className="demo-note">Dane kontaktowe są przykładowe.</p>
          <div className="social-links"><a className="text-link" href="https://www.instagram.com/">Instagram</a><a className="text-link" href="https://www.linkedin.com/">LinkedIn</a></div>
        </section>
        <section className="contact-card">
          <h2>Opowiedz nam o swoim projekcie</h2>
          <p id="form-note">To formularz demonstracyjny. Wpisane dane są sprawdzane wyłącznie w przeglądarce.</p>
          <Suspense fallback={<p role="status">Ładowanie formularza…</p>}><ContactForm /></Suspense>
        </section>
      </div>
    </>
  );
}
