import Link from 'next/link';
import { Facebook, Instagram, Video } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Modern House Bolivia</h3>
            <p className="text-gray-300">
              Tu destino para muebles modernos y elegantes. Calidad y diseño en cada pieza.
            </p>
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
              <a href="https://www.facebook.com/profile.php?id=100091652722823&sk=photos" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/modernhousebo/" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@modernhousebolivia?_t=ZM-8yu8cFbuuTY&_r=1" className="text-gray-300 hover:text-white">
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Modern House Bolivia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
