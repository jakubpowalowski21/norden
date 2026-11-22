import { PageIntro } from "@/components/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Polityka prywatności", "Informacje o danych i działaniu formularza w demonstracyjnym serwisie Norden Architects.", "/polityka-prywatnosci");

export default function PrivacyPage() {
  return (
    <>
      <PageIntro label="Informacje o serwisie" title="Polityka prywatności" />
      <div className="container-wide section-space-bottom">
        <div className="article-body privacy-body">
          <section><h2>Charakter witryny</h2><p>Norden Architects to fikcyjna pracownia. Nazwy projektów, dane kontaktowe, sylwetki zespołu i opinie służą prezentacji strony portfolio.</p></section>
          <section><h2>Formularz demonstracyjny</h2><p>Dane wpisane w formularzu pozostają w pamięci otwartej strony. Przycisk sprawdza poprawność pól lokalnie w przeglądarce. Po opuszczeniu strony lub odświeżeniu formularz jest wczytywany od nowa.</p></section>
          <section><h2>Pliki cookies i statystyki</h2><p>W tej wersji witryny formularz i filtry nie wymagają plików cookies. Projekt nie zawiera skryptów analitycznych ani reklamowych. Operator hostingu może zapisywać techniczne informacje o żądaniach, na przykład adres IP i czas połączenia, zgodnie ze swoją konfiguracją.</p></section>
          <section><h2>Odnośniki zewnętrzne</h2><p>Na stronie kontaktowej znajduje się kilka odnośników do zewnętrznych usług. Po przejściu na inną witrynę obowiązują jej zasady prywatności.</p></section>
        </div>
      </div>
    </>
  );
}
