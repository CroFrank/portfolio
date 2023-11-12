import { defineCollection } from "astro/content/runtime"
import { z } from "astro/zod"

const projectsCollection = defineCollection({
  schema: ({ image }: any) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      link: z.string(),
      img_alt: z.string().optional(),
      image: image(),
    }),
})

const skillsCollection = defineCollection({
  schema: ({ image }: any) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
})

export const collections = {
  projects: projectsCollection,
  skills: skillsCollection,
}
