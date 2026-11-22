import type { Metadata } from "next";
import { images, studio } from "./studio";
import type { Photo } from "./projects";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://norden.example");

export function pageMetadata(title: string, description: string, path: string, photo: Photo = images.hero, article?: { date: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: path === "/" ? title : `${title} | ${studio.name}`,
      description,
      url: path,
      siteName: studio.name,
      locale: "pl_PL",
      images: [{ url: photo.src, alt: photo.alt }],
      ...(article ? { type: "article", publishedTime: article.date } : { type: "website" }),
    },
  };
}
