import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBanner, PhotoFrame, SectionHeading } from "@/components/content";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { categoryLabel, projectCover, projectPhotos, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/realizacje/[slug]">) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return pageMetadata(project.name, project.summary, "/realizacje/" + slug, projectCover(project));
}

export default async function ProjectPage({ params }: PageProps<"/realizacje/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const photos = projectPhotos(project);
  const previous = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const facts = [["Lokalizacja", project.city], ["Rok", project.year], ["Powierzchnia", new Intl.NumberFormat("pl-PL").format(project.area) + " m²"], ["Zakres prac", project.scope]];

  return (
    <>
      <section className="project-hero">
        <PhotoFrame photo={projectCover(project)} sizes="100vw" className="project-hero-photo" preload />
        <div className="container-wide project-hero-content">
          <Link className="project-back text-link" href="/realizacje">Wszystkie realizacje</Link>
          <div><p className="eyebrow section-label">{categoryLabel(project.category)} · {project.city}</p><h1>{project.name}</h1></div>
        </div>
      </section>
      <section className="container-wide section-space-mid">
        <dl className="project-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <Reveal className="intro-split project-summary">
          <div><p className="eyebrow section-label">Koncepcja</p><h2>{project.summary}</h2></div>
          <div className="intro-copy"><p>{project.concept}</p></div>
        </Reveal>
      </section>
      <section className="section-space-mid section-tinted">
        <div className="container-wide">
          <SectionHeading label={project.name} title="Galeria projektu" />
          <ProjectGallery photos={photos} name={project.name} />
        </div>
      </section>
      <section className="container-wide section-space">
        <Reveal className="intro-split"><div><p className="eyebrow section-label">Od koncepcji do detalu</p><h2>Wyzwania i rozwiązania</h2></div><div className="intro-copy"><p>{project.challenge}</p></div></Reveal>
      </section>
      <nav className="container-wide neighboring-projects" aria-label="Sąsiednie realizacje">
        <Link href={"/realizacje/" + previous.slug}><span>Poprzednia realizacja</span><strong>{previous.name}</strong></Link>
        <Link href={"/realizacje/" + next.slug}><span>Następna realizacja</span><strong>{next.name}</strong></Link>
      </nav>
      <ContactBanner />
    </>
  );
}
