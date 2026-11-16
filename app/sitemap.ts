import type { MetadataRoute } from "next";
const pages = ["", "patients", "success-cases", "products", "verify-clinic", "navigator", "pathways", "roadmap-2030", "resources", "advisory"];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(p => ({ url: `https://www.stembio.life/${p}`, lastModified: new Date("2026-11-16"), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
