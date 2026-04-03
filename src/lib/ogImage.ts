import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

function siteBase(site: URL | undefined): URL {
  return site ?? new URL("https://novaromahorizon.org/");
}

/** Default share / OG image (static asset under `src/public/images/`). */
export async function defaultShareImageUrl(
  site: URL | undefined
): Promise<string> {
  const base = new URL(import.meta.env.BASE_URL, siteBase(site));
  return new URL("images/logo.png", base).href;
}

/** Absolute OG image URL for a content image. */
export async function contentImageToOgUrl(
  site: URL | undefined,
  src: ImageMetadata,
  width = 1200
): Promise<string> {
  const img = await getImage({ src, width });
  return new URL(img.src, siteBase(site)).href;
}
