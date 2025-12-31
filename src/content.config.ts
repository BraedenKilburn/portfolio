// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    priority: z.number(),
    tech: z.array(z.string()),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

const socials = defineCollection({
  loader: file("src/data/socials/socials.json"),
  schema: z.object({
    label: z.enum(["GitHub", "LinkedIn", "Email"]),
    href: z.string(),
    description: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    duration: z.string(),
    location: z.string(),
    responsibilities: z.array(z.string()),
    order: z.number(), // For sorting
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/skills" }),
  schema: z.object({
    category: z.string(),
    skills: z.array(z.string()),
    order: z.number(), // For sorting
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, socials, experience, skills };
