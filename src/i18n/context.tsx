import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { en } from './locales/en';
import { es } from './locales/es';

type Language = 'en' | 'es';

type Translations = typeof en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};

interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const I18nProvider = ({ children, defaultLanguage = 'en' }: I18nProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get from localStorage, fallback to default
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved === 'en' || saved === 'es') {
        return saved;
      }
    }
    return defaultLanguage;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const translations: Translations = language === 'es' ? es : en;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
};

