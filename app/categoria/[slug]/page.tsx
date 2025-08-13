'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/products/product-card';

const categoryData = {
  habitacion: {
    title: 'Habitación',
    description: 'Transforma tu dormitorio con nuestros muebles elegantes y funcionales',
    products: [
      {
        id: 4,
        name: 'Cama King Size Elegante',
        price: 899.99,
        originalPrice: 1199.99,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Habitación',
        isNew: true,
      },
      {
        id: 5,
        name: 'Mesita de Noche Moderna',
        price: 299.99,
        image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Habitación',
      },
      {
        id: 9,
        name: 'Cabecera Tapizada',
        price: 449.99,
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Habitación',
      },
      {
        id: 10,
        name: 'Tocador con Espejo',
        price: 599.99,
        image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Habitación',
      },
    ],
  },
  comedor: {
    title: 'Comedor',
    description: 'Mesas y sillas perfectas para disfrutar en familia',
    products: [
      {
        id: 6,
        name: 'Mesa de Comedor Extensible',
        price: 799.99,
        image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Comedor',
      },
      {
        id: 7,
        name: 'Sillas de Comedor (Set de 4)',
        price: 399.99,
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Comedor',
      },
    ],
  },
  decoracion: {
    title: 'Decoración',
    description: 'Accesorios y muebles decorativos para personalizar tu espacio',
    products: [
      {
        id: 8,
        name: 'Estantería Industrial',
        price: 549.99,
        image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Decoración',
      },
    ],
  },
  iluminacion: {
    title: 'Iluminación',
    description: 'Lámparas y sistemas de iluminación modernos',
    products: [
      {
        id: 3,
        name: 'Lámpara de Pie Contemporánea',
        price: 199.99,
        originalPrice: 299.99,
        image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Iluminación',
        isNew: true,
      },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categoryData[slug as keyof typeof categoryData];

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Categoría no encontrada</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">{category.title}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {category.products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}