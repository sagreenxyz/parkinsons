import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    abstract: z.string(),
    date: z.coerce.date(),
    format: z.enum(['ieee', 'acm-sig', 'acm-sigchi']).default('ieee'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { research };
