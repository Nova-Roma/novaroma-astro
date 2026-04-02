import { defineCollection, z } from "astro:content";
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const insights = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),

      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

const initiatives = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
    }),
});
const people = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      headshot: z
        .object({
          url: image(), // /src/images/speakers/...
          alt: z.string().optional(),
        })
        .optional(),
      location: z.string().optional(),
      summary: z.string().optional(),
      tags: z.array(z.string()).optional(),
      socials: z
        .object({
          twitter: z
            .string()
            .regex(/^(https?:\/\/|#_)/)
            .optional(),
          github: z
            .string()
            .regex(/^(https?:\/\/|#_)/)
            .optional(),
          linkedin: z
            .string()
            .regex(/^(https?:\/\/|#_)/)
            .optional(),
          website: z
            .string()
            .regex(/^(https?:\/\/|#_)/)
            .optional(),
        })
        .optional(),
      talks: z.array(z.string()).optional(), // session slugs
      featured: z.boolean().default(false),
    }),
});

const session = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    abstract: z.string().min(40),
    people: z.array(z.string()), // person slugs (presenters)
    day: z.enum(["day-1", "day-2", "day-3", "day-4", "day-5", "day-6", "day-7"]),
    start: z.string(), // "2025-10-22T10:00:00+03:00"
    end: z.string(),
    room: z.string(),
    track: z.string().optional(),
    level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const sponsor = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tier: z.enum(["platinum", "gold", "silver", "bronze"]).default("bronze"),
      url: z.string().regex(/^(https?:\/\/|#_)$/),
      logo: z.object({
        url: image(),
        alt: z.string().optional(),
      }),
    }),
});

const careers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    employmentType: z.enum([
      "full-time",
      "part-time",
      "contract",
      "internship",
    ]),
    postedDate: z.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  infopages,
  insights,
  initiatives,
  people,
  sessions: session,
  sponsors: sponsor,
  careers,
};
