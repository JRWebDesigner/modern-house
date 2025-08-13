import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[90dvh] max-h-[800px] flex items-center justify-center bg-gray-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: 'url("hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transforma tu hogar con nuestros muebles modernos y elegantes
        </h1>
        <div className="space-x-4">
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100">
            <Link href="/tienda">Ver Catálogo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white bg-black hover:bg-white hover:text-black">
            <Link href="/sobre-nosotros">Conoce Más</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
