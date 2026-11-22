export const categories = [
  { id: "domy", label: "Domy" },
  { id: "wnetrza", label: "Wnętrza" },
  { id: "komercyjne", label: "Komercyjne" },
] as const;

export type Category = (typeof categories)[number]["id"];

export type Photo = {
  src: string;
  alt: string;
};

type Project = {
  slug: string;
  name: string;
  city: string;
  year: number;
  area: number;
  category: Category;
  scope: string;
  summary: string;
  concept: string;
  challenge: string;
  views: [string, string, string, string, string, string];
};

export const projects: Project[] = [
  {
    slug: "villa-silva",
    name: "Villa Silva",
    city: "Poznań",
    year: 2025,
    area: 268,
    category: "domy",
    scope: "Architektura i wnętrza",
    summary: "Dom na skraju lasu, którego rytm wyznaczają istniejące drzewa.",
    concept: "Parterowy dom rozciąga się wzdłuż polany. Niskie, poziome linie dachu wydobywają pionowy rytm sosen, a przeszklenia łączą część dzienną z podcieniem i leśnym ogrodem. Beton szalunkowy, ciemne drewno i kamień tworzą paletę, która zmienia się wraz z porą dnia.",
    challenge: "Najważniejsze było zachowanie starodrzewu. Rozstaw brył i przebieg dojścia dopasowaliśmy do istniejących pni oraz stref korzeniowych. Głębokie okapy osłaniają rozległe przeszklenia w lecie i pozwalają zimowemu słońcu dotrzeć do wnętrza.",
    views: ["Niska bryła domu wśród sosen", "Elewacja z betonowym okapem od strony ogrodu", "Przejście pomiędzy skrzydłami domu", "Ciepło oświetlona strefa dzienna", "Zestawienie naturalnych materiałów", "Dom i otaczający go las"],
  },
  {
    slug: "casa-forma",
    name: "Casa Forma",
    city: "Wrocław",
    year: 2024,
    area: 214,
    category: "domy",
    scope: "Projekt architektoniczny",
    summary: "Dwie jasne bryły zorganizowane wokół kameralnego dziedzińca.",
    concept: "Dwa proste wolumeny mieszczą strefę dzienną i prywatną. Przeszklony łącznik otwiera widok na brzozę pośrodku dziedzińca. Mineralny tynk łapie światło w łagodny sposób, a detale dębowe wprowadzają ciepło do jasnych wnętrz.",
    challenge: "Bliskość sąsiedniej zabudowy wymagała starannego rozmieszczenia okien. Największe przeszklenia zwróciliśmy ku wewnętrznemu ogrodowi. Wyżej położone otwory od ulicy doświetlają pomieszczenia, jednocześnie zapewniając prywatność.",
    views: ["Jasne bryły Casa Forma", "Dom oglądany z dziedzińca", "Kubiczna forma i przeszklenia", "Jasne wnętrze z dębowymi elementami", "Detal tynku mineralnego", "Perspektywa wewnętrznego ogrodu"],
  },
  {
    slug: "atelier-no-4",
    name: "Atelier No. 4",
    city: "Warszawa",
    year: 2025,
    area: 112,
    category: "wnetrza",
    scope: "Wnętrza i zabudowy na wymiar",
    summary: "Współczesne mieszkanie w kamienicy z lat dwudziestych.",
    concept: "Punktem wyjścia były łukowe okna i wysokość pomieszczeń. Zachowaliśmy czytelny rytm otworów, uzupełniając wnętrza o orzechowe zabudowy, wapienny tynk i lniane tkaniny. Zmiana układu uwolniła widok między salonem i jadalnią.",
    challenge: "Instalacje i przechowywanie trzeba było zmieścić w obrębie historycznego układu. Jedna płaszczyzna stolarska mieści szafy, drzwi techniczne i wejście do części prywatnej, dzięki czemu ogólnodostępne pomieszczenia zachowują prostą geometrię.",
    views: ["Salon w kamienicy z łukowym oknem", "Sąsiednia część mieszkania z orzechową zabudową", "Przejście między pomieszczeniami", "Wnętrze z lnianymi tkaninami", "Detal wykończenia", "Światło dzienne w mieszkaniu"],
  },
  {
    slug: "nord-office",
    name: "Nord Office",
    city: "Gdańsk",
    year: 2023,
    area: 1460,
    category: "komercyjne",
    scope: "Architektura i wnętrza wspólne",
    summary: "Miejsce pracy z ceglanym rytmem elewacji i zielonym sercem.",
    concept: "Rytm ceglanych filarów nawiązuje do portowej zabudowy Gdańska. Wokół zielonego dziedzińca rozmieściliśmy przestrzenie współpracy i pokoje do pracy w skupieniu. Drewno i rozproszone światło ocieplają strefy wspólne.",
    challenge: "Projekt wymagał elastycznego podziału powierzchni dla zmieniających się zespołów. Stałe rdzenie i powtarzalny moduł fasady pozwalają przestawiać ścianki i prowadzić instalacje bez utraty dostępu do światła dziennego.",
    views: ["Ceglana elewacja Nord Office", "Rytm pilastrów i dużych przeszkleń", "Przestrzeń dziedzińca biurowego", "Jasna przestrzeń pracy", "Detal cegły i drewna", "Widok wzdłuż przestrzeni wspólnej"],
  },
  {
    slug: "dom-na-wydmie",
    name: "Dom na Wydmie",
    city: "Lubiatowo",
    year: 2024,
    area: 176,
    category: "domy",
    scope: "Architektura i układ wnętrz",
    summary: "Drewniany dom osłonięty wydmą, otwarty na światło od południa.",
    concept: "Wąska sylweta pod dwuspadowym dachem nawiązuje do nadmorskich domów. Elewację wykonano z drewna, które z czasem nabiera srebrnej patyny. Główna część mieszkalna otwiera się na porośnięty trawami teren, a sypialnie widać od osłoniętej strony.",
    challenge: "Piasek i silny wiatr wpłynęły na kształt wejścia oraz tarasu. Zagłębiona nisza daje osłonę przed podmuchami, a dojście na lekkim pomoście ogranicza ingerencję w naturalne ukształtowanie wydmy.",
    views: ["Drewniany Dom na Wydmie wśród traw", "Szara drewniana elewacja", "Dom od strony osłoniętego wejścia", "Wnętrze otwarte na krajobraz", "Detal drewnianej okładziny", "Dom w perspektywie nadmorskiej wydmy"],
  },
  {
    slug: "apartament-kamienny",
    name: "Apartament Kamienny",
    city: "Kraków",
    year: 2025,
    area: 138,
    category: "wnetrza",
    scope: "Projekt wnętrz i dobór materiałów",
    summary: "Wnętrze, w którym faktura trawertynu zmienia się wraz ze światłem.",
    concept: "Płynne przejście między kuchnią i salonem buduje poczucie przestrzeni. Dębowe płaszczyzny i naturalne tkaniny równoważą silny rysunek trawertynu, który pojawia się na wyspie oraz w strefie wejściowej.",
    challenge: "Kamień miał odgrywać istotną rolę bez przytłoczenia wnętrza. Każdą płytę dobraliśmy z uwzględnieniem kierunku żył, a miejsca łączeń ustaliliśmy na etapie rysunków wykonawczych. Boczne oświetlenie wydobywa jego fakturę wieczorem.",
    views: ["Salon Apartamentu Kamiennego", "Jasna kuchnia z naturalnym kamieniem", "Przejście w strefie dziennej", "Jasne wnętrze z dębową zabudową", "Detal naturalnego trawertynu", "Naturalne światło przy dużych oknach"],
  },
];

export const featuredProjects = [projects[0], projects[2], projects[3]];

export function projectCover(project: Project): Photo {
  const file = project.slug === "villa-silva" ? "hero" : `${project.slug}-cover`;
  return { src: `/images/${file}.webp`, alt: project.views[0] };
}

export function projectPhotos(project: Project): Photo[] {
  return project.views.map((alt, index) => ({
    src: `/images/${project.slug}-${index + 1}.webp`,
    alt,
  }));
}

export function categoryLabel(category: Category) {
  return categories.find(({ id }) => id === category)?.label ?? category;
}
