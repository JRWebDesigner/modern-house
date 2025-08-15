'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Video, Instagram, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Hola! Me pongo en contacto desde la página web.

Nombre: ${formData.name}
Teléfono: ${formData.phone}

Mensaje:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+59173052100'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: '',
    });
    
    toast.success('Mensaje enviado por WhatsApp');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Video className="h-6 w-6 text-black flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">TikTok</CardTitle>
                      <a href="https://www.tiktok.com/@modernhousebolivia?_t=ZM-8yu8cFbuuTY&_r=1" target="_blank" className="text-gray-600">@modernhousebolivia</a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Facebook className="h-6 w-6 text-black flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Facebook</CardTitle>
                      <a href="https://www.facebook.com/profile.php?id=100091652722823&sk=photos" target="_blank" className="text-gray-600">Modern House Bolivia</a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Instagram className="h-6 w-6 text-black flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Instagram</CardTitle>
                      <a href="https://www.instagram.com/modernhousebo/" target="_blank" className="text-gray-600">@modernhousebo</a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Clock className="h-6 w-6 text-black flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg">Horarios</CardTitle>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                        Sábados: 10:00 AM - 6:00 PM<br />
                        Domingos: 11:00 AM - 5:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+591 66666666"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
