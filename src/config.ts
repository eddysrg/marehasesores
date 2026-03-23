import { defineCollection, z } from "astro:content";

const mortgagesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        //Información Basica
        title: z.string(),
        shortDescription: z.string(),
        description: z.string(),
        category: z.enum(['vivienda', 'liquidez', 'refinanciamiento', 'construccion']),
        //Características financieras
        tasaDesde: z.number(),
        tasaHasta: z.number().optional(),
        montoMinimo: z.number(),
        montoMaximo: z.number(),
        plazoMaximo: z.number(), // en años
        enganche: z.number().optional(), // porcentaje
        //Características del producto
        benefits: z.array(z.string()),
        requirements: z.array(z.string()),
        features: z.array(z.string()),
        //Configuración visual y estado
        color: z.string(),
        featured: z.boolean().default(false),
        active: z.boolean().default(true),
        //Imágenes (desde scr/assets)
        heroImage: image().optional(),
        //Metadatos
        publishDate: z.date(),
        ctaText: z.string(),
        //SEO
        metaDescription: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    'hipotecas': mortgagesCollection,
};