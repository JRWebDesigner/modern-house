import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce la historia detrás de Modern House y nuestro compromiso con el diseño excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Modern House nació en 2010 de la pasión por crear espacios extraordinarios. 
                Fundada por María González y Carlos Ramírez, dos diseñadores industriales con 
                una visión compartida: democratizar el acceso al buen diseño.
              </p>
              <p>
                Lo que comenzó como un pequeño taller en el centro de la ciudad, se ha convertido 
                en una de las marcas de muebles más reconocidas del país. Nuestro crecimiento se 
                basa en tres pilares fundamentales: calidad excepcional, diseño innovador y 
                atención personalizada.
              </p>
              <p>
                Cada pieza que creamos es el resultado de un proceso meticuloso que combina 
                técnicas artesanales tradicionales con la última tecnología en fabricación. 
                Trabajamos únicamente con materiales sostenibles y proveedores que comparten 
                nuestros valores.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nuestro taller"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Diseño</h3>
              <p className="text-gray-600">
                Cada pieza es diseñada pensando en la funcionalidad y la estética, 
                creando muebles que trascienden las tendencias.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Sostenibilidad</h3>
              <p className="text-gray-600">
                Nos comprometemos con el medio ambiente utilizando materiales 
                sostenibles y procesos de producción responsables.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Calidad</h3>
              <p className="text-gray-600">
                Utilizamos únicamente materiales de primera calidad y técnicas 
                de fabricación que garantizan la durabilidad de nuestros muebles.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Nuestros Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-black mb-2">14+</div>
              <div className="text-gray-600">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">5000+</div>
              <div className="text-gray-600">Clientes felices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-600">Productos únicos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Artesanos expertos</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}