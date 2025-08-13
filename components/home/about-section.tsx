export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Desde 2010, Modern House ha sido líder en el diseño y fabricación de muebles contemporáneos. 
              Comenzamos como un pequeño taller familiar con la visión de crear piezas que combinaran 
              funcionalidad y estética moderna.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hoy, más de una década después, nos enorgullecemos de haber amueblado miles de hogares 
              con diseños únicos que reflejan el estilo de vida moderno. Cada pieza es cuidadosamente 
              seleccionada y diseñada para durar generaciones.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-black">14+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">5000+</div>
                <div className="text-gray-600">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-gray-600">Productos únicos</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/img1.jpg"
              alt="Nuestra historia"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
