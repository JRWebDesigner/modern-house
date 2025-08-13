import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Modern House</h3>
            <p className="text-gray-300">
              Tu destino para muebles modernos y elegantes. Calidad y diseño en cada pieza.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link href="/categoria/habitacion" className="text-gray-300 hover:text-white">Habitación</Link></li>
              <li><Link href="/categoria/comedor" className="text-gray-300 hover:text-white">Comedor</Link></li>
              <li><Link href="/categoria/decoracion" className="text-gray-300 hover:text-white">Decoración</Link></li>
              <li><Link href="/categoria/iluminacion" className="text-gray-300 hover:text-white">Iluminación</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Inicio</Link></li>
              <li><Link href="/sobre-nosotros" className="text-gray-300 hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="/tienda" className="text-gray-300 hover:text-white">Tienda</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Modern House. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}