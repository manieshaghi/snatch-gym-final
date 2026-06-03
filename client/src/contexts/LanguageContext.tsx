import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'tr';

interface Translations {
  [key: string]: {
    en: string;
    tr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', tr: 'Ana Sayfa' },
  'nav.about': { en: 'About', tr: 'Hakkında' },
  'nav.services': { en: 'Services', tr: 'Hizmetler' },
  'nav.classes': { en: 'Classes', tr: 'Dersler' },
  'nav.contact': { en: 'Contact', tr: 'İletişim' },

  // Hero Section
  'hero.title': { en: 'SNATCH GYM', tr: 'SNATCH GYM' },
  'hero.subtitle': { en: 'Professional Weightlifting & Bodybuilding', tr: 'Profesyonel Halter ve Vücut Geliştirme' },
  'hero.cta': { en: 'Join Now', tr: 'Şimdi Katıl' },

  // About Section
  'about.title': { en: 'About Snatch Gym', tr: 'Snatch Gym Hakkında' },
  'about.description': { en: 'We are dedicated to helping athletes achieve their peak performance through professional training programs and world-class facilities.', tr: 'Profesyonel antrenman programları ve dünya standartlarında tesisler aracılığıyla sporcuların en yüksek performanslarına ulaşmalarına yardımcı olmakta kararlıyız.' },

  // Services Section
  'services.title': { en: 'Our Services', tr: 'Hizmetlerimiz' },
  'services.training': { en: 'Professional Training', tr: 'Profesyonel Antrenman' },
  'services.training_desc': { en: 'Expert coaching for weightlifting, strength training, and bodybuilding.', tr: 'Halter, kuvvet antrenmanı ve vücut geliştirme için uzman antrenörlük.' },
  'services.nutrition': { en: 'Nutrition Planning', tr: 'Beslenme Planlaması' },
  'services.nutrition_desc': { en: 'Customized meal plans designed for your fitness goals.', tr: 'Fitness hedeflerinize uygun özel beslenme planları.' },
  'services.coaching': { en: 'Personal Coaching', tr: 'Kişisel Antrenörlük' },
  'services.coaching_desc': { en: 'One-on-one guidance from certified fitness professionals.', tr: 'Sertifikalı fitness uzmanlarından bire bir rehberlik.' },
  'services.classes': { en: 'Group Classes', tr: 'Grup Dersleri' },
  'services.classes_desc': { en: 'Dynamic group training sessions for all fitness levels.', tr: 'Tüm fitness seviyeleri için dinamik grup antrenmanları.' },

  // Features Section
  'features.strength': { en: 'Build Strength', tr: 'Kuvvet Geliştir' },
  'features.strength_desc': { en: 'Progressive training programs designed to maximize your strength gains.', tr: 'Kuvvet kazançlarınızı maksimize etmek için tasarlanmış ilerlemeli antrenman programları.' },
  'features.performance': { en: 'Peak Performance', tr: 'Zirve Performans' },
  'features.performance_desc': { en: 'Achieve your athletic potential with our expert guidance.', tr: 'Uzman rehberliğimiz ile atletik potansiyelinize ulaşın.' },

  // CTA Section
  'cta.title': { en: 'Ready to Transform Your Body?', tr: 'Vücudunuzu Dönüştürmeye Hazır mısınız?' },
  'cta.description': { en: 'Join thousands of athletes who have achieved their fitness goals at Snatch Gym.', tr: 'Snatch Gym\'de fitness hedeflerine ulaşan binlerce sporcuya katılın.' },
  'cta.button': { en: 'Start Your Journey', tr: 'Yolculuğunuza Başlayın' },

  // Footer
  'footer.address': { en: 'Address', tr: 'Adres' },
  'footer.phone': { en: 'Phone', tr: 'Telefon' },
  'footer.email': { en: 'Email', tr: 'E-posta' },
  'footer.hours': { en: 'Hours', tr: 'Saatler' },
  'footer.copyright': { en: '© 2024 Snatch Gym. All rights reserved.', tr: '© 2024 Snatch Gym. Tüm hakları saklıdır.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
