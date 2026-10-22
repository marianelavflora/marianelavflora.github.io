// Content collections: every list on the page (projects, jobs, certs...)
// lives as data in src/data/*.yaml. The schemas below check those files on
// every build, so a typo (a missing title, a bad date) fails loudly instead
// of shipping a broken card.
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

// Loads a YAML list and remembers each entry's position as `order`, so the
// page shows entries in the same order as the file.
const yamlList = (path: string) =>
  file(path, {
    parser: text => (parse(text) as Record<string, unknown>[]).map((entry, order) => ({ ...entry, order })),
  });
const order = z.number();

// Text shown on the page: either one string for both languages, or {en, es}.
const text = z.union([z.string(), z.object({ en: z.string(), es: z.string() })]);
// Year-month, e.g. 2025-06. YAML would turn an unquoted 2025-06 into a
// number-ish value, so it's coerced to a string first.
const month = z.coerce.string().regex(/^\d{4}-\d{2}$/, 'use YYYY-MM, e.g. 2025-06');
const link = z.object({ label: z.string(), url: z.string().url() });

const projects = defineCollection({
  loader: yamlList('src/data/projects.yaml'),
  schema: z.object({
    order,
    date: month,
    hidden: z.boolean().default(false),
    type: z.enum(['hackathon', 'gamejam', 'robot']),
    typeLabel: z.string().optional(),
    status: z
      .object({ kind: z.enum(['win', 'soon', 'org', 'wip']), label: text })
      .optional(),
    event: z.object({
      title: z.string(),
      text,
      meta: text,
      image: z.string().optional(),
      alt: z.string().optional(),
      emoji: z.string().optional(),
    }),
    product: z.object({
      label: z.enum(['product', 'role', 'outcome']).default('product'),
      title: text,
      text,
      image: z.string().optional(),
      alt: z.string().optional(),
      emoji: z.string(),
      links: z.array(link).default([]),
    }),
  }),
});

const experience = defineCollection({
  loader: yamlList('src/data/experience.yaml'),
  schema: z.object({
    order,
    kind: z.enum(['job', 'volunteering']),
    title: text,
    org: text,
    logo: z.string(),
    logoAlt: z.string(),
    start: month,
    end: month.nullable().default(null),
    location: text,
  }),
});

const certifications = defineCollection({
  loader: yamlList('src/data/certifications.yaml'),
  schema: z.object({
    order,
    title: text,
    issuer: z.string(),
    icon: z.string(),
    date: month,
    url: z
      .string()
      .url()
      .default('https://www.linkedin.com/in/marianela-victoria-flora/details/certifications/'),
  }),
});

const education = defineCollection({
  loader: yamlList('src/data/education.yaml'),
  schema: z.object({
    order,
    title: text,
    school: text,
    logo: z.string(),
    logoAlt: z.string(),
    start: month,
    end: month.nullable().default(null),
    expected: z.number().int().optional(),
  }),
});

// Life milestones: a month, or just a year when the month doesn't matter.
const milestones = defineCollection({
  loader: yamlList('src/data/milestones.yaml'),
  schema: z.object({
    order,
    title: text,
    text,
    date: z.coerce.string().regex(/^\d{4}(-\d{2})?$/, 'use YYYY-MM or YYYY, e.g. 2025-06 or 2021'),
    image: z.string().optional(),
    icon: z.string().optional(),
    alt: z.string(),
    link: link.optional(),
  }),
});

const stack = defineCollection({
  loader: yamlList('src/data/stack.yaml'),
  schema: z.object({
    order,
    icon: z.string(),
    title: text,
    items: z.array(text),
  }),
});

const life = defineCollection({
  loader: yamlList('src/data/life.yaml'),
  schema: z.object({
    order,
    tag: z.object({ color: z.enum(['uni', 'org', 'jam', 'win']), label: text }),
    title: text,
    text,
    meta: text,
    image: z.string().optional(),
    alt: z.string().optional(),
    emoji: z.string().optional(),
  }),
});

export const collections = { projects, experience, certifications, education, milestones, stack, life };
