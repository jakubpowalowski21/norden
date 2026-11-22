import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Photo, projects } from "@/lib/projects";
import { categoryLabel, projectCover } from "@/lib/projects";
import { images } from "@/lib/studio";

export function PhotoFrame({ photo, sizes, className = "", preload = false }: { photo: Photo; sizes: string; className?: string; preload?: boolean }) {
  return (
    <div className={"photo-frame " + className}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} preload={preload} />
    </div>
  );
}

export function PageIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="container-wide page-intro">
      <p className="eyebrow section-label">{label}</p>
      <h1>{title}</h1>
      {children && <div className="page-intro-text">{children}</div>}
    </div>
  );
}

export function SectionHeading({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow section-label">{label}</p><h2>{title}</h2></div>
      {children}
    </div>
  );
}

export function ProjectCard({ project, sizes = "(max-width: 700px) 90vw, 45vw" }: { project: (typeof projects)[number]; sizes?: string }) {
  return (
    <article className="project-card">
      <Link href={"/realizacje/" + project.slug} className="card-link">
        <PhotoFrame photo={projectCover(project)} sizes={sizes} className="project-photo" />
        <div className="project-meta"><span>{categoryLabel(project.category)}</span><span>{project.city} <span aria-hidden="true">·</span> {project.year}</span></div>
        <h3>{project.name}</h3>
      </Link>
    </article>
  );
}

export function ContactBanner({ photo = images.facade }: { photo?: Photo }) {
  return (
    <section className="contact-banner">
      <PhotoFrame photo={photo} sizes="100vw" className="banner-image" />
      <div className="container-wide banner-content">
        <p className="eyebrow section-label">Współpraca</p>
        <h2>Zaprojektujmy coś wyjątkowego.</h2>
        <Link className="button button-light" href="/kontakt">Porozmawiajmy o projekcie</Link>
      </div>
    </section>
  );
}
