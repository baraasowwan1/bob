import { Link, Outlet, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Flower2, Globe, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';

export function Layout() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-rose-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-rose-500 p-2 rounded-full">
                <Flower2 className="size-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-rose-600">{t('shopName')}</h1>
                <p className="text-xs text-gray-500">Bob Flower Store</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') ? 'text-rose-600 font-semibold' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                {t('home')}
              </Link>
              <Link
                to="/portfolio"
                className={`transition-colors ${
                  isActive('/portfolio') ? 'text-rose-600 font-semibold' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                {t('portfolio')}
              </Link>
              <Link
                to="/customer-service"
                className={`transition-colors ${
                  isActive('/customer-service') ? 'text-rose-600 font-semibold' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                {t('customerService')}
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive('/contact') ? 'text-rose-600 font-semibold' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                {t('contact')}
              </Link>
            </nav>

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Globe className="size-4" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center gap-4 mt-4 overflow-x-auto pb-2">
            <Link
              to="/"
              className={`text-sm whitespace-nowrap transition-colors ${
                isActive('/') ? 'text-rose-600 font-semibold' : 'text-gray-600'
              }`}
            >
              {t('home')}
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm whitespace-nowrap transition-colors ${
                isActive('/portfolio') ? 'text-rose-600 font-semibold' : 'text-gray-600'
              }`}
            >
              {t('portfolio')}
            </Link>
            <Link
              to="/customer-service"
              className={`text-sm whitespace-nowrap transition-colors ${
                isActive('/customer-service') ? 'text-rose-600 font-semibold' : 'text-gray-600'
              }`}
            >
              {t('customerService')}
            </Link>
            <Link
              to="/contact"
              className={`text-sm whitespace-nowrap transition-colors ${
                isActive('/contact') ? 'text-rose-600 font-semibold' : 'text-gray-600'
              }`}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Flower2 className="size-5 text-rose-400" />
              <span className="text-sm">
                © 2026 {t('shopName')}. {t('allRightsReserved')}.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-colors"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-colors"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
