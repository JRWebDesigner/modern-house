import { ProductCard } from '@/components/products/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { products } from '@/lib/products';
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
           {products
            .filter(product => product.isTrend)
            .map(product => (
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
