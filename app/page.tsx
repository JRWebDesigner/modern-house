import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { TrendingSection } from '@/components/home/trending-section';
import { CategoriesSection } from '@/components/home/categories-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TrendingSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
}