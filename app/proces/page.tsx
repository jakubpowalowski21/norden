import { ContactBanner, PageIntro, PhotoFrame, SectionHeading } from "@/components/content";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";
import { images, steps } from "@/lib/studio";

export const metadata = pageMetadata("Proces współpracy", "Sprawdź, jak wygląda współpraca z Norden Architects od pierwszej konsultacji po wsparcie realizacji.", "/proces", images.materials);

export default function ProcessPage() {
  return (
    <>
      <PageIntro label="Jak pracujemy" title="Proces współpracy"><p>Na każdym etapie wiesz, nad czym pracujemy, jakie decyzje są przed Tobą i czego możesz się spodziewać na końcu.</p></PageIntro>
      <section className="container-wide process-layout section-space-bottom" aria-label="Etapy współpracy">
        <ol className="process-list">
          {steps.map((step, index) => <li key={step.title}><Reveal className="process-step"><span className="step-number">{String(index + 1).padStart(2, "0")}</span><div><h2>{step.title}</h2><p>{step.detail}</p></div></Reveal></li>)}
        </ol>
        <PhotoFrame photo={images.materials} sizes="(max-width: 700px) 90vw, 40vw" className="process-photo" />
      </section>
      <section className="section-space section-tinted">
        <div className="container-wide faq-layout"><SectionHeading label="FAQ" title="Częste pytania" /><Faq /></div>
      </section>
      <ContactBanner />
    </>
  );
}
