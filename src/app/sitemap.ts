import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/watch",
    "/about",
    "/about/cast",
    "/about/on-set",
    "/about/production-design",
    "/about/soundtrack",
    "/soundtrack",
    "/press",
    "/news",
    "/contact",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-09-11"),
    changeFrequency: path === "" || path === "/watch" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/watch" ? 0.9 : 0.7,
  }));
}
