import type { Photo } from "./projects";

export const navigation = [
  { href: "/realizacje", label: "Realizacje" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/o-nas", label: "O nas" },
  { href: "/proces", label: "Proces" },
  { href: "/blog", label: "Blog" },
];

export const studio = {
  name: "Norden Architects",
  email: "hello@norden.example",
  phone: "+48 61 000 00 00",
  telephone: "+48610000000",
  address: "ul. Przykładowa 12, 60-101 Poznań",
  hours: "Poniedziałek–piątek, 9.00–17.00",
};

export const images = {
  hero: { src: "/images/hero.webp", alt: "Przeszklony dom oświetlony o zmierzchu, wśród drzew" },
  studio: { src: "/images/stock-studio.webp", alt: "Stół przy dużych oknach w jasnym loftowym wnętrzu" },
  materials: { src: "/images/stock-materials.webp", alt: "Próbki drewna, kamienia i tkanin na jasnym blacie" },
  facade: { src: "/images/stock-facade.webp", alt: "Geometryczne cienie na jasnej elewacji" },
} satisfies Record<string, Photo>;

export const services = [
  {
    id: "architektura-mieszkaniowa",
    title: "Architektura mieszkaniowa",
    option: "Dom jednorodzinny lub budynek mieszkalny",
    intro: "Indywidualne projekty domów, rezydencji i budynków wielorodzinnych.",
    description: "Zaczynamy od działki i Twojego sposobu życia. Szukamy najlepszej orientacji pomieszczeń, relacji z ogrodem i układu, który pozwoli domowi zmieniać się wraz z potrzebami mieszkańców.",
    scope: ["Analiza działki i uwarunkowań", "Koncepcja i wizualizacje", "Dokumentacja projektowa", "Wsparcie w trakcie budowy"],
    benefit: "Otrzymujesz projekt osadzony w konkretnym miejscu, z jasnym zakresem dokumentacji i rozwiązaniami, które można omówić z wykonawcami.",
    photo: { src: "/images/casa-forma-1.webp", alt: "Jasny współczesny dom z wewnętrznym dziedzińcem" },
  },
  {
    id: "projektowanie-wnetrz",
    title: "Projektowanie wnętrz",
    option: "Projekt wnętrza",
    intro: "Przemyślane wnętrza mieszkań, domów i apartamentów.",
    description: "Porządkujemy układ pomieszczeń, światło i przechowywanie. Materiały wybieramy z uwzględnieniem codziennego użytkowania, a meble na wymiar projektujemy tam, gdzie naprawdę robią różnicę.",
    scope: ["Układ funkcjonalny", "Dobór materiałów i oświetlenia", "Wizualizacje wnętrz", "Rysunki wykonawcze i zestawienia"],
    benefit: "Otrzymujesz spójną koncepcję wnętrza i zestawienia ułatwiające zamówienie materiałów oraz wycenę prac.",
    photo: { src: "/images/stock-interior.webp", alt: "Salon z beżową sofą, fotelem i ciemnym stolikiem" },
  },
  {
    id: "architektura-komercyjna",
    title: "Architektura komercyjna",
    option: "Obiekt komercyjny",
    intro: "Biura, lokale usługowe i przestrzenie biznesowe dopasowane do sposobu pracy.",
    description: "Analizujemy potrzeby użytkowników i wymagania inwestycji. Planujemy elastyczne układy, które usprawniają poruszanie się, ułatwiają pracę i pomagają przestrzeni sprostać przyszłym zmianom.",
    scope: ["Analiza programu inwestycji", "Koncepcja architektoniczna", "Projekt przestrzeni wspólnych", "Koordynacja dokumentacji"],
    benefit: "Otrzymujesz czytelny plan rozwoju inwestycji i rozwiązania, które wspierają codzienną pracę zespołu.",
    photo: { src: "/images/nord-office-1.webp", alt: "Współczesny budynek biurowy z ceglaną fasadą" },
  },
] as const;

export const steps = [
  { title: "Pierwsza konsultacja", short: "Rozmowa", text: "Poznajemy Twoje potrzeby, miejsce i ramy budżetu.", detail: "Omawiamy plany, działkę lub istniejące wnętrze i to, jak chcesz korzystać z przestrzeni. Po spotkaniu otrzymasz propozycję zakresu, harmonogramu i wyceny." },
  { title: "Koncepcja architektoniczna", short: "Koncepcja", text: "Sprawdzamy układ, światło i pierwsze rozwiązania materiałowe.", detail: "Przygotowujemy układy funkcjonalne i wstępne wizualizacje. Wspólnie oceniamy kierunki i dopracowujemy wybraną koncepcję przed przejściem do dokumentacji." },
  { title: "Projekt szczegółowy", short: "Projekt", text: "Przekładamy koncepcję na rysunki, materiały i detale.", detail: "Rysunki, detale oraz zestawienia materiałów przekazujemy w uzgodnionym zakresie. Koordynujemy rozwiązania z projektantami branżowymi, gdy wymaga tego inwestycja." },
  { title: "Wsparcie realizacji", short: "Realizacja", text: "Wyjaśniamy założenia i pomagamy podejmować decyzje na budowie.", detail: "Odpowiadamy na pytania wykonawców i konsultujemy rozwiązania pojawiające się w trakcie prac. Zakres wsparcia i wizyt ustalamy przed rozpoczęciem budowy." },
];

export const faqs = [
  { question: "Ile trwa przygotowanie projektu?", answer: "Harmonogram zależy od skali inwestycji i zakresu opracowania. Koncepcja zwykle wymaga kilku tygodni, a pełna dokumentacja domu kilku miesięcy. Terminy poszczególnych etapów ustalamy przy wycenie." },
  { question: "Czy pracownia działa poza Poznaniem?", answer: "Tak. Spotkania koncepcyjne możemy prowadzić zdalnie, a wizyty na działce lub budowie planujemy z wyprzedzeniem. Możliwość dojazdów ustalamy na początku współpracy." },
  { question: "Jak wygląda wycena projektu?", answer: "Po rozmowie o obiekcie, zakresie i terminach przedstawiamy indywidualną ofertę. Wycena określa rezultaty każdego etapu i warunki rozszerzenia zakresu." },
  { question: "Co przygotować na pierwszą konsultację?", answer: "Na początek wystarczy opis inwestycji i orientacyjny budżet. Jeśli masz rzuty, zdjęcia, dokumenty działki lub inspiracje, mogą pomóc nam sprawniej omówić potrzeby." },
];
