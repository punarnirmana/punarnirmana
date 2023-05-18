import { defineCollection, z } from "astro:content";

const services = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    pageTitle: z.string().optional(),
    subTitle: z.string().optional(),
    description: z.string(),
    heroImage: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { services };
