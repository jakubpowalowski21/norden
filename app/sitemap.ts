import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/seo";
import { navigation } from "@/lib/studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...navigation.map(item => item.href), "/kontakt", "/polityka-prywatnosci"];
  return [
    ...pages.map(path => ({ url: new URL(path, siteUrl).href })),
    ...projects.map(project => ({ url: new URL("/realizacje/" + project.slug, siteUrl).href })),
    ...articles.map(article => ({ url: new URL("/blog/" + article.slug, siteUrl).href, lastModified: article.date })),
  ];
}
