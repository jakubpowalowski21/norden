import type { Photo } from "./projects";
import { images } from "./studio";

type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  photo: Photo;
  sections: { title: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "ile-kosztuje-projekt-domu-indywidualnego",
    title: "Ile kosztuje projekt domu indywidualnego?",
    category: "Projekt domu",
    date: "2025-11-18",
    summary: "Jak czytać wycenę pracowni i które elementy zakresu kształtują cenę projektu domu.",
    photo: { src: "/images/casa-forma-2.webp", alt: "Jasny dom i jego wewnętrzny dziedziniec" },
    sections: [
      { title: "Od czego zależy cena", paragraphs: ["Dwa domy o tej samej powierzchni mogą wymagać różnego nakładu pracy. Na wycenę wpływa nachylenie działki, geometria bryły, liczba rozwiązań wykonywanych na zamówienie oraz stopień szczegółowości opracowania. Dom na stoku z dużymi przeszkleniami wymaga innych uzgodnień niż prosty dom na płaskim terenie.", "Cena powinna wynikać z określonego programu. Przed rozmową warto zebrać przybliżoną powierzchnię, listę pomieszczeń, informacje o działce i oczekiwany termin rozpoczęcia budowy."] },
      { title: "Co porównać w ofertach", paragraphs: ["Rozpisz etapy obok siebie. Sprawdź liczbę wariantów koncepcji, zakres opracowań branżowych, rysunki wykonawcze i to, ile spotkań przewiduje oferta. Dopytaj, które uzgodnienia zlecasz samodzielnie.", "Jeśli planujesz rozbudowane wnętrza lub wyposażenie na wymiar, poproś o osobną pozycję. Łatwiej wtedy ocenić, które decyzje trzeba podjąć już na etapie architektury."] },
      { title: "Jak zaplanować budżet", paragraphs: ["W budżecie inwestycji uwzględnij także pomiary, badania gruntu, przyłącza i ewentualny nadzór. Wycena projektu obejmuje konkretne opracowania i spotkania, dlatego warto od początku ustalić, jak pracownia rozlicza zmiany wprowadzone po akceptacji etapu.", "Dobra oferta mówi, co otrzymasz i kiedy podejmiesz najważniejsze decyzje. Najpierw porównaj zakres, potem kwoty."] },
    ],
  },
  {
    slug: "5-zasad-dobrze-zaprojektowanego-wnetrza",
    title: "5 zasad dobrze zaprojektowanego wnętrza",
    category: "Wnętrza",
    date: "2025-10-29",
    summary: "Od codziennych tras po wykończenie. Pięć decyzji, które pomagają uporządkować wnętrze.",
    photo: { src: "/images/atelier-no-4-4.webp", alt: "Spokojne wnętrze z naturalnymi materiałami" },
    sections: [
      { title: "Zacznij od codziennych tras", paragraphs: ["Sprawdź, co robisz po wejściu do domu i jak docierasz z zakupami do kuchni. Od tych drobnych tras uzależnij położenie schowków, blatów i miejsc do odkładania rzeczy. Na planie zaznacz też kierunek otwierania drzwi."] },
      { title: "Zaplanuj warstwy światła", paragraphs: ["Połącz światło ogólne, robocze i wieczorne. Innego światła potrzebujesz nad blatem, a innego podczas odpoczynku na kanapie. Rozmieszczenie kilku niezależnie włączanych źródeł daje więcej swobody w ten sam wieczór."] },
      { title: "Grupuj przechowywanie", paragraphs: ["Zbierz rozproszone szafki w zabudowy umieszczone blisko miejsca użycia. Przy wejściu zaplanuj miejsce na odzież i mokre buty, a w kuchni sprawdź wysokość półek względem swoich najczęstszych czynności."] },
      { title: "Ogranicz liczbę wykończeń", paragraphs: ["Ustal materiał dominujący i dobierz do niego kilka uzupełnień. Obejrzyj próbki obok siebie w świetle dziennym i wieczornym. Ta sama płytka może wyglądać zupełnie inaczej pod oświetleniem sklepowym niż w Twojej łazience."] },
      { title: "Zostaw miejsce na zmiany", paragraphs: ["Zadbaj o gniazda w kilku dostępnych punktach, a elementy, które wymieniasz częściej, dobierz tak, by dało się je zastąpić bez przebudowy. Wnętrze może ewoluować razem z domownikami."] },
    ],
  },
  {
    slug: "dom-parterowy-czy-pietrowy",
    title: "Dom parterowy czy piętrowy — co wybrać?",
    category: "Projekt domu",
    date: "2025-10-08",
    summary: "Co mówią o tym wymiary działki, codzienne potrzeby i relacja domu z ogrodem.",
    photo: { src: "/images/dom-na-wydmie-1.webp", alt: "Parterowy dom osadzony w nadmorskim krajobrazie" },
    sections: [
      { title: "Przeczytaj działkę", paragraphs: ["Dom parterowy potrzebuje większego obrysu przy podobnej powierzchni użytkowej. Na wąskiej parceli piętro pomaga zmieścić program domu i zostawić miejsce na ogród. Na otwartym terenie układ parterowy pozwala powiązać kilka pomieszczeń bezpośrednio z zielenią.", "Warto porównać dwa proste rzuty na tym samym planie sytuacyjnym. Zobacz, ile miejsca zostaje na dojazd, taras i drzewa, które chcesz zachować."] },
      { title: "Zobacz, jak działa plan", paragraphs: ["W domu piętrowym schody mogą porządkować relację między gościnnym parterem a cichą górą. W parterowym podobny efekt uzyskasz dzięki oddzielnym skrzydłom lub przemyślanym załamaniom rzutu. Zaplanuj drogę od wejścia do sypialni i sprawdź, czy przechodzi przez strefę dzienną.", "Przy planowaniu na wiele lat uwzględnij dostępność. Przydatne może się okazać elastyczne pomieszczenie na poziomie wejścia, połączone z pełną łazienką."] },
      { title: "Porównaj całe założenie", paragraphs: ["Koszty rozkładają się inaczej. Parter może potrzebować więcej fundamentów i dachu, piętro wnosi strop i schody. Na wynik wpływają także materiały i kształt bryły. Porównuj warianty na tym samym standardzie wykonania i przy zbliżonym programie pomieszczeń."] },
    ],
  },
  {
    slug: "naturalne-materialy-we-wspolczesnej-architekturze",
    title: "Naturalne materiały we współczesnej architekturze",
    category: "Materiały",
    date: "2025-09-24",
    summary: "Drewno, kamień i tynk mineralny w detalach, które dobrze się starzeją.",
    photo: images.materials,
    sections: [
      { title: "Wybieraj z myślą o użytkowaniu", paragraphs: ["Drewno, kamień i mineralne tynki mają charakterystyczną fakturę i inaczej reagują na wilgoć, światło oraz ścieranie. Miękkie drewno w miejscu intensywnie używanym szybciej pokaże ślady, a niektóre kamienie przyjmą przebarwienia. Obejrzyj próbkę wykończenia wraz z opisem pielęgnacji."] },
      { title: "Projektuj detal", paragraphs: ["Zaplanuj styki tam, gdzie materiał zmienia grubość, kierunek pracy lub sposób montażu. Na drewnianej fasadzie istotne jest odprowadzenie wody i wentylowanie okładziny. W kamiennym blacie kompozycję żył warto omówić z wykonawcą przed cięciem.", "Mała próbka pomaga ocenić ton i fakturę. Przy kamieniu lub drewnie obejrzyj również duży fragment, by zobaczyć rytm, który pojawi się na całej powierzchni."] },
      { title: "Zaplanuj starzenie i naprawę", paragraphs: ["Drewno wystawione na pogodę może z czasem poszarzeć, a kamień w intensywnie użytkowanym miejscu zmatowieć. Ustal, jaki wygląd po latach akceptujesz i ile czasu chcesz poświęcić na czyszczenie lub odnawianie. Tam, gdzie to możliwe, zaprojektuj sposób wymiany pojedynczych elementów."] },
    ],
  },
];

export function articleDate(date: string) {
  return new Intl.DateTimeFormat("pl-PL", { dateStyle: "long", timeZone: "UTC" }).format(new Date(date));
}
