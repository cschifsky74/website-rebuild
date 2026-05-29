import { defineCollection, z } from 'astro:content';

// Blog collection. Each post is a Markdown file in src/content/blog/.
// The CMS (Decap, at /admin) reads and writes these same files via GitHub,
// so Carson can add posts without touching code.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
