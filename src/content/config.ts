import { defineCollection, z } from 'astro:content';


const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        tecnologias: z.object({
            HTML: z.string().optional(),
            CSS: z.string().optional(),
            JS: z.string().optional(),
            REACT: z.string().optional(),
            ASTRO: z.string().optional(),

        }),
        image: z.string(),
    })
})

export const collections = { proyectos }