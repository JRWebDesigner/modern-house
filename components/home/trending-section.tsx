import { ProductCard } from '@/components/products/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const trendingProducts = [
  {
    id: 1,
    name: 'Sofá Moderno Gris',
    price: 1299.99,
    originalPrice: 1599.99,
    images: ['https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=500'],
    category: 'Sala',
    isNew: true,
  },
  {
    id: 2,
    name: 'Mesa de Centro Minimalista',
    price: 449.99,
    originalPrice: 599.99,
    images: ['https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500'],
    category: 'Sala',
    isNew: true,
  },
  {
    id: 3,
    name: 'Lámpara de Pie Contemporánea',
    price: 199.99,
    originalPrice: 299.99,
    images: ['https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=500'],
    category: 'Iluminación',
    isNew: true,
  },
  {
    id: 4,
    name: 'Cama King Size Elegante',
    price: 899.99,
    originalPrice: 1199.99,
    images: ['https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500'],
    category: 'Habitación',
    isNew: true,
  },
];

export function TrendingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Tendencias Actuales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras últimas incorporaciones. Muebles recién llegados que marcan 
            la pauta en diseño y funcionalidad moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/tienda">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
