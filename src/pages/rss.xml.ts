import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const insights = await getCollection("insights");
  return rss({
    title: "Nova Roma",
    description:
      "A Canadian non-profit bridging legacy institutions and an AI-native future through governance, education, and industry.",
    site: context.site ?? new URL("https://yourdomain.com"),
    items: insights
      .sort(
        (a, b) =>
          new Date(b.data.pubDate).getTime() -
          new Date(a.data.pubDate).getTime()
      )
      .map((post) => ({
        link: `/insights/posts/${post.slug}/`,
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
      })),
  });
}
