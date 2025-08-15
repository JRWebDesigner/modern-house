import {defineArrayMember, defineField, defineType} from 'sanity'

export const mueblesType = defineType({
  name: 'mueblesType',
  title: 'Muebles',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Enlace',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio Descuento',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Precio Original',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'images',
      title: 'Imagenes del Producto',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryName',
      title: 'Category Name (Auto-filled)',
      type: 'string',
      readOnly: true,
      hidden: ({ document }) => !document?.category,
      initialValue: ({ document }) => {
        // This will be populated by a webhook or manually
        return document?.category?.name || '';
      },
    }),
    defineField({
      name: 'isTrend',
      title: 'Tendencia',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Caracteristicas del Producto',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      subtitle: 'category',
    },
  },
})
