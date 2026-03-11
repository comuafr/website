import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    accentColor: z.string(),
    icon: z.string(),
    capabilities: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    order: z.number().default(0),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    price: z.number(),
    category: z.enum(['tours', 'accessoires']),
    image: z.string(),
    description: z.string(),
    specs: z.record(z.string(), z.string()).optional(),
    inStock: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = { activities, products };
