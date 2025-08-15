'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartSheet } from '@/components/cart/cart-sheet';
import { useCart } from '@/components/cart/cart-context';
import { client, CATEGORIES_QUERY } from '@/lib/sanity';
import { Category } from '@/lib/types';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(CATEGORIES_QUERY);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-black">
                Modern House <br /> <small>Bolivia</small>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-gray-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Shop Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsShopMenuOpen(true)}
                onMouseLeave={() => setIsShopMenuOpen(false)}
              >
                <button className="flex items-center text-black hover:text-gray-600 transition-colors font-medium">
                  Tienda
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isShopMenuOpen && (
                  <div className="absolute top-[5px] left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link
                      href="/tienda"
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                    >
                      Todos los Productos
                    </Link>
                    <div className="border-t border-gray-200"></div>
                    {categories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/categoria/${category.slug.current}`}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <nav className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-black hover:text-gray-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Shop Menu */}
                <div>
                  <Link
                    href="/tienda"
                    className="block text-black hover:text-gray-600 transition-colors font-medium mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tienda
                  </Link>
                  <div className="ml-4 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/categoria/${category.slug.current}`}
                        className="block text-sm text-gray-600 hover:text-black transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
