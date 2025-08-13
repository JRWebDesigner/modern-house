import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Habitación',
    description: 'Camas, mesitas de noche, cabeceras y más',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/categoria/habitacion',
  },
  {
    name: 'Comedor',
    description: 'Mesas, sillas y muebles para comedor',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/categoria/comedor',
  },
  {
    name: 'Decoración',
    description: 'Estanterías, cuadros y accesorios',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/categoria/decoracion',
  },
  {
    name: 'Iluminación',
    description: 'Lámparas, luces y sistemas de iluminación',
    image: 'https://images.pexels.com/photos/1339845/pexels-photo-1339845.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/categoria/iluminacion',
  },
];

export function CategoriesSection() {
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
              key={category.name}
              className="relative group overflow-hidden rounded-lg bg-gray-100 h-80"
            >
              <img
                src={category.image}
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
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <Link href={category.href}>Explorar</Link>
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