import { ContactBanner, PageIntro, PhotoFrame, SectionHeading } from "@/components/content";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";
import { images } from "@/lib/studio";

export const metadata = pageMetadata("O nas", "Poznaj historię, wartości i zespół poznańskiej pracowni Norden Architects.", "/o-nas", images.studio);

const values = [
  { title: "Funkcjonalność", text: "Układ i detal projektujemy na podstawie tego, jak ludzie naprawdę korzystają z przestrzeni." },
  { title: "Trwałość", text: "Myślimy o utrzymaniu, naprawie i o tym, jak materiały będą wyglądały za kilka lat." },
  { title: "Estetyka", text: "Proporcje, światło i faktura budują charakter, który wynika z miejsca i jego otoczenia." },
];

const team = [
  { name: "Marta Lewandowska", role: "Współzałożycielka · architektka", text: "Prowadzi koncepcje domów i dba o powiązanie architektury z krajobrazem.", photo: 4 },
  { name: "Piotr Nowak", role: "Współzałożyciel · architekt", text: "Koordynuje dokumentację oraz współpracę z projektantami branżowymi.", photo: 5 },
  { name: "Julia Wysocka", role: "Architektka wnętrz", text: "Projektuje wnętrza, dobiera materiały i opracowuje zabudowy na wymiar.", photo: 6 },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro label="O pracowni" title="Projektujemy z myślą o człowieku">
        <p>W Poznaniu tworzymy domy, wnętrza i miejsca pracy z uwagą na to, jak ludzie będą z nich korzystać.</p>
      </PageIntro>
      <section className="container-wide split-feature section-space-bottom">
        <PhotoFrame photo={images.studio} sizes="(max-width: 700px) 90vw, 48vw" className="split-photo" preload />
        <Reveal className="split-copy">
          <p className="eyebrow section-label">Historia pracowni</p><h2>Od wspólnego stołu</h2>
          <p>Norden powstało w Poznaniu z potrzeby wspólnej pracy nad architekturą i wnętrzem. Zaczynaliśmy od projektów domów i adaptacji mieszkań. Z czasem dołączyliśmy do nich miejsca pracy i lokale usługowe.</p>
          <p>Do dziś najważniejsze decyzje zapadają przy jednym stole. Zestawiamy plany, makiety i próbki, bo każdy z tych materiałów pozwala zobaczyć coś innego.</p>
        </Reveal>
      </section>
      <section className="section-space-mid section-tinted">
        <div className="container-wide">
          <Reveal><SectionHeading label="Wartości" title="Co jest dla nas ważne" /></Reveal>
          <div className="value-grid">{values.map(({ title, text }) => <Reveal key={title} className="value-card"><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
        </div>
      </section>
      <section className="container-wide section-space">
        <Reveal><SectionHeading label="Zespół" title="Ludzie za projektami" /><p className="demo-note team-note">Profile demonstracyjne</p></Reveal>
        <div className="team-grid">
          {team.map(person => <Reveal key={person.name}><article className="team-card"><PhotoFrame photo={{ src: "/images/studio-" + person.photo + ".webp", alt: "Portret demonstracyjny — " + person.name }} sizes="(max-width: 700px) 90vw, 30vw" /><h3>{person.name}</h3><p className="person-role">{person.role}</p><p>{person.text}</p></article></Reveal>)}
        </div>
      </section>
      <section className="section-space-mid section-tinted">
        <div className="container-wide split-feature split-reverse">
          <PhotoFrame photo={images.materials} sizes="(max-width: 700px) 90vw, 48vw" className="split-photo" />
          <Reveal className="split-copy"><p className="eyebrow section-label">Nasze podejście</p><h2>Od rozmowy do materiału</h2><p>Najpierw odwiedzamy miejsce lub przyglądamy się jego dokumentacji. Pytamy o rytm dnia, priorytety i budżet. Później sprawdzamy pomysły na rysunkach i makietach, a materiały oglądamy w świetle, w którym będą używane.</p><p>Na każdym etapie pokazujemy, które decyzje są przed Tobą i jak wpłyną na kolejne prace.</p></Reveal>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
