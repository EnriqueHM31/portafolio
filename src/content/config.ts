import { defineCollection, z } from 'astro:content';


const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        tecnologias: z.object({
            HTML: z.string().nullable(),
            CSS: z.string().nullable(),
            JavaScript: z.string().nullable(),
            React: z.string().nullable(),
        }),
        image: z.string(),
    })
})

export const collections = { proyectos }