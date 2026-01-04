import { defineCollection, z } from 'astro:content';

const profile = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    bio: z.string(),
    avatar: image(),
    location: z.string(),
    verified: z.boolean(),
  }),
});

const links = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    icon: z.string(), // Name of Lucide icon
    isFeatured: z.boolean().default(false),
    color: z.string().optional(), // Custom hex color
    layout: z.enum(['large', 'medium', 'small']).default('medium'),
  }),
});

const socials = defineCollection({
  type: 'data',
  schema: z.object({
    platform: z.string(),
    url: z.string(),
    icon: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  profile,
  links,
  socials,
};
