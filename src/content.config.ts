// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/projects"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
