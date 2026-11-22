# Norden Architects

Polskojęzyczne portfolio fikcyjnej pracowni architektury i wnętrz. Projekt wykorzystuje Next.js App Router, TypeScript, Tailwind CSS, Motion, Radix UI, React Hook Form i Zod.

## Uruchomienie lokalne

```sh
npm ci
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000). Wersję produkcyjną sprawdzisz przez `npm run build` i `npm start`.

## Konfiguracja adresu i edycja treści

Ustaw `NEXT_PUBLIC_SITE_URL` na docelowy pełny adres HTTPS przed budowaniem wersji produkcyjnej. Next.js wykorzystuje go w adresach kanonicznych, metadanych Open Graph, danych strukturalnych, mapie witryny i pliku robots.txt. Domyślna domena demonstracyjna to `https://norden.example`.

Dane realizacji, usług i artykułów znajdują się w `lib/`. Lokalne wizualizacje demonstracyjne WebP są w `public/images/`.

Formularz kontaktowy sprawdza dane lokalnie w przeglądarce. Pola i wynik walidacji nie są wysyłane ani przechowywane przez aplikację.
