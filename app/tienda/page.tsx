'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/products/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

// Sample products data
const allProducts = [
  {
      id: 1,
      name: 'Sofá Moderno Gris',
      price: 1299.99,
      originalPrice: 1599.99,
      images: [
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Este elegante sofá moderno en color gris es la pieza perfecta para completar tu sala de estar. Fabricado con materiales de alta calidad y un diseño contemporáneo que se adapta a cualquier estilo de decoración. Sus cojines ergonómicos brindan máximo confort para disfrutar en familia.',
      features: [
        'Estructura de madera maciza',
        'Tapizado en tela premium resistente',
        'Cojines con relleno de espuma de alta densidad',
        'Patas de metal con acabado negro mate',
        'Dimensiones: 220cm x 90cm x 80cm',
      ],
    },
    {
      id: 2,
      name: 'Mesa de Centro Minimalista',
      price: 449.99,
      originalPrice: 599.99,
      images: [
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Mesa de centro con diseño minimalista que combina funcionalidad y estilo. Su superficie lisa y limpia es perfecta para colocar libros, decoraciones o para tomar el café de la mañana.',
      features: [
        'Tapa de vidrio templado de 8mm',
        'Base de metal cromado',
        'Resistente a rayones y manchas',
        'Fácil de limpiar',
        'Dimensiones: 120cm x 60cm x 45cm',
      ],
    },
      {
      id: 3,
      name: 'Sofá Moderno Gris',
      price: 1299.99,
      originalPrice: 1599.99,
      images: [
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Este elegante sofá moderno en color gris es la pieza perfecta para completar tu sala de estar. Fabricado con materiales de alta calidad y un diseño contemporáneo que se adapta a cualquier estilo de decoración. Sus cojines ergonómicos brindan máximo confort para disfrutar en familia.',
      features: [
        'Estructura de madera maciza',
        'Tapizado en tela premium resistente',
        'Cojines con relleno de espuma de alta densidad',
        'Patas de metal con acabado negro mate',
        'Dimensiones: 220cm x 90cm x 80cm',
      ],
    },
    {
      id: 4,
      name: 'Mesa de Centro Minimalista',
      price: 449.99,
      originalPrice: 599.99,
      images: [
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Mesa de centro con diseño minimalista que combina funcionalidad y estilo. Su superficie lisa y limpia es perfecta para colocar libros, decoraciones o para tomar el café de la mañana.',
      features: [
        'Tapa de vidrio templado de 8mm',
        'Base de metal cromado',
        'Resistente a rayones y manchas',
        'Fácil de limpiar',
        'Dimensiones: 120cm x 60cm x 45cm',
      ],
    },
    {
      id: 5,
      name: 'Sofá Moderno Gris',
      price: 1299.99,
      originalPrice: 1599.99,
      images: [
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Este elegante sofá moderno en color gris es la pieza perfecta para completar tu sala de estar. Fabricado con materiales de alta calidad y un diseño contemporáneo que se adapta a cualquier estilo de decoración. Sus cojines ergonómicos brindan máximo confort para disfrutar en familia.',
      features: [
        'Estructura de madera maciza',
        'Tapizado en tela premium resistente',
        'Cojines con relleno de espuma de alta densidad',
        'Patas de metal con acabado negro mate',
        'Dimensiones: 220cm x 90cm x 80cm',
      ],
    },
    {
      id: 6,
      name: 'Mesa de Centro Minimalista',
      price: 449.99,
      originalPrice: 599.99,
      images: [
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Mesa de centro con diseño minimalista que combina funcionalidad y estilo. Su superficie lisa y limpia es perfecta para colocar libros, decoraciones o para tomar el café de la mañana.',
      features: [
        'Tapa de vidrio templado de 8mm',
        'Base de metal cromado',
        'Resistente a rayones y manchas',
        'Fácil de limpiar',
        'Dimensiones: 120cm x 60cm x 45cm',
      ],
    },
    {
      id: 7,
      name: 'Sofá Moderno Gris',
      price: 1299.99,
      originalPrice: 1599.99,
      images: [
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Este elegante sofá moderno en color gris es la pieza perfecta para completar tu sala de estar. Fabricado con materiales de alta calidad y un diseño contemporáneo que se adapta a cualquier estilo de decoración. Sus cojines ergonómicos brindan máximo confort para disfrutar en familia.',
      features: [
        'Estructura de madera maciza',
        'Tapizado en tela premium resistente',
        'Cojines con relleno de espuma de alta densidad',
        'Patas de metal con acabado negro mate',
        'Dimensiones: 220cm x 90cm x 80cm',
      ],
    },
    {
      id: 8,
      name: 'Mesa de Centro Minimalista',
      price: 449.99,
      originalPrice: 599.99,
      images: [
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      category: 'Sala',
      isNew: true,
      description: 'Mesa de centro con diseño minimalista que combina funcionalidad y estilo. Su superficie lisa y limpia es perfecta para colocar libros, decoraciones o para tomar el café de la mañana.',
      features: [
        'Tapa de vidrio templado de 8mm',
        'Base de metal cromado',
        'Resistente a rayones y manchas',
        'Fácil de limpiar',
        'Dimensiones: 120cm x 60cm x 45cm',
      ],
    },
];

export default function TiendaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', 'Sala', 'Habitación', 'Comedor', 'Iluminación', 'Decoración'];

  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">Nuestra Tienda</h1>
          <p className="text-gray-600">Descubre toda nuestra colección de muebles modernos</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nombre A-Z</SelectItem>
              <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">No se encontraron productos</p>
            <Button onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
              Limpiar filtros
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
