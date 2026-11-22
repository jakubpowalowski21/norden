"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/lib/projects";
import { PhotoFrame } from "./content";

export function ProjectGallery({ photos, name }: { photos: Photo[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const photo = active === null ? null : photos[active];

  function move(direction: number) {
    setActive(index => index === null ? null : (index + direction + photos.length) % photos.length);
  }

  return (
    <Dialog.Root open={active !== null} onOpenChange={open => { if (!open) setActive(null); }}>
      <div className="gallery-grid">
        {photos.map((item, index) => (
          <button type="button" key={item.src} className="gallery-tile" aria-haspopup="dialog" aria-label={"Powiększ zdjęcie " + (index + 1) + " z " + photos.length + ": " + item.alt} onClick={event => {
            opener.current = event.currentTarget;
            setActive(index);
          }}>
            <PhotoFrame photo={item} sizes="(max-width: 700px) 45vw, 29vw" />
            <span className="gallery-expand" aria-hidden="true"><Maximize2 size={17} /></span>
          </button>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="lightbox-overlay" />
        <Dialog.Content className="lightbox" aria-describedby={undefined} onCloseAutoFocus={event => {
          event.preventDefault();
          opener.current?.focus();
        }} onKeyDown={event => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
          <Dialog.Title className="lightbox-title">Galeria · {name}</Dialog.Title>
          <Dialog.Close asChild><button type="button" className="icon-button lightbox-close" aria-label="Zamknij galerię"><X size={25} /></button></Dialog.Close>
          {photo && (
            <>
              <div className="lightbox-image"><Image src={photo.src} alt={photo.alt} fill sizes="100vw" loading="eager" /></div>
              <p className="lightbox-caption" aria-live="polite">{(active ?? 0) + 1} / {photos.length} · {photo.alt}</p>
            </>
          )}
          <button type="button" className="icon-button lightbox-prev" aria-label="Poprzednie zdjęcie" onClick={() => move(-1)}><ChevronLeft size={25} /></button>
          <button type="button" className="icon-button lightbox-next" aria-label="Następne zdjęcie" onClick={() => move(1)}><ChevronRight size={25} /></button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
