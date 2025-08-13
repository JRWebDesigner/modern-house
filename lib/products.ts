// Datos de productos (podrían venir de una API/database en producción)
const products = [
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

// Función para obtener un producto por ID (usada en la página del cliente)
export function getProductById(id: string) {
  return products.find(p => p.id === parseInt(id));
}

// Función para obtener IDs (usada en generateStaticParams del servidor)
export function getProductIds() {
  return products.map((product) => ({ id: product.id }));
}
