'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { client, CATEGORIES_QUERY, urlFor } from '@/lib/sanity';
import { Category } from '@/lib/types';

export function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(CATEGORIES_QUERY);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Explora Nuestras Categorías
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cargando categorías...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra exactamente lo que necesitas para cada espacio de tu hogar. 
            Cada categoría está cuidadosamente curada con los mejores diseños.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={category._id}
              className="relative group overflow-hidden rounded-lg bg-gray-100 h-80"
            >
              <img
                src={urlFor(category.image).url()}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-white text-black hover:bg-white hover:text-black"
                  >
                    <Link href={`/categoria/${category.slug.current}`}>Explorar</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
