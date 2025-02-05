import { defineCollection, z } from 'astro:content';


const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        tecnologias: z.object({
            HTML: z.string().optional(),
            REACT: z.string().optional(),
            CSS: z.string().optional(),
            JS: z.string().optional(),
            ASTRO: z.string().optional(),
            PHP: z.string().optional(),

        }),
        images: z.object({
            image: z.string(),
            thumbnail: z.string(),
            imageTitle: z.string(),
        }),
        color: z.string().optional(),
    }),
})

export const collections = { proyectos }