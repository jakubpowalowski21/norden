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

Dane realizacji, usług i artykułów znajdują się w `lib/`. Zdjęcia i wizualizacje WebP są w `public/images/`.

Formularz kontaktowy sprawdza dane lokalnie w przeglądarce. Pola i wynik walidacji nie są wysyłane ani przechowywane przez aplikację.

## Zdjęcia ilustracyjne

Fotografie z banku zdjęć wykorzystano na warunkach [licencji Pexels](https://www.pexels.com/license/).

| Plik | Autor i źródło |
| --- | --- |
| `stock-studio.webp` | [Skylar Kang – wnętrze ze stołem przy oknie](https://www.pexels.com/photo/table-placed-near-window-in-modern-spacious-room-6045336/) |
| `stock-materials.webp` | [Kaboompics – próbki materiałów](https://www.pexels.com/photo/paper-paint-samples-and-material-samples-4968698/) |
| `stock-interior.webp` | [cami – wnętrze z beżową sofą](https://www.pexels.com/photo/modern-minimalist-interior-with-beige-couch-29069282/) |
| `stock-facade.webp` | [Jan van der Wolf – detal elewacji](https://www.pexels.com/photo/minimalist-architectural-detail-in-sunlight-30267851/) |
