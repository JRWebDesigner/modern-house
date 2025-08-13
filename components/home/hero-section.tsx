import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Modern House
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Transforma tu hogar con nuestros muebles modernos y elegantes
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100">
            <Link href="/tienda">Ver Catálogo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
            <Link href="/sobre-nosotros">Conoce Más</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}