import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Dumbbell, Flame, Target, Users } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar styling
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    }, { once: true });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-card shadow-lg' : 'bg-transparent'}`}>
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-wider">SNATCH</span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-primary transition-colors">{t('nav.home')}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 rounded transition-colors ${language === 'tr' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              >
                TR
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663259878331/32wq3732zrHUmieGwC8w3P/hero-weightlifter-7Vekq3Z6Rdb3pCPRYTMToj.webp)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wider">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card border-t border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 tracking-wider">{t('about.title')}</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('features.strength')}</h3>
                    <p className="text-gray-400">{t('features.strength_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Flame className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('features.performance')}</h3>
                    <p className="text-gray-400">{t('features.performance_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663259878331/32wq3732zrHUmieGwC8w3P/hero-gym-interior-bxvJDR6AkPJhp3khWksT87.webp"
                alt="Gym Interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="text-5xl font-bold mb-16 text-center tracking-wider">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Dumbbell, title: 'services.training', desc: 'services.training_desc' },
              { icon: Users, title: 'services.classes', desc: 'services.classes_desc' },
              { icon: Target, title: 'services.coaching', desc: 'services.coaching_desc' },
              { icon: Flame, title: 'services.nutrition', desc: 'services.nutrition_desc' },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group hover:shadow-xl hover:shadow-primary/20"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{t(service.title)}</h3>
                  <p className="text-gray-400">{t(service.desc)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card border-t border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663259878331/32wq3732zrHUmieGwC8w3P/feature-strength-CBaFVWibQDAqAsihWNdngF.webp"
                alt="Strength Training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-6 tracking-wider">{t('features.strength')}</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t('features.strength_desc')}
              </p>
              <Button className="w-fit bg-primary hover:bg-orange-600 text-white px-8 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                {t('cta.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663259878331/32wq3732zrHUmieGwC8w3P/feature-training-4Hp3NPkVdV6AQJevJMyPg9.webp)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">{t('cta.description')}</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-orange-600 text-white px-10 py-6 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('cta.button')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-primary" />
                SNATCH GYM
              </h3>
              <p className="text-gray-400">{t('hero.subtitle')}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.address')}</h4>
              <p className="text-gray-400">123 Fitness Street<br />Gym City, GC 12345</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.phone')}</h4>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.email')}</h4>
              <p className="text-gray-400">info@snatchgym.com</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-gray-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
