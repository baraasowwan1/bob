import { Link, Outlet, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Layout() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-rose-50">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="p-2 rounded-full">
                <img 
                  src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/652310014_122203601690498856_565884404542807583_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=hGOGJPhFhqEQ7kNvwGxEf3u&_nc_oc=Adrsq0VKxqrCJqXvNUBlL4ZkH106LLLejUoi2oLejHOIx3aoaFyWTLA05MV_r7wp5w8lYuJiP_uqayqpKBk212dq&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=TJoHyM11Zj4KhCTOQUUGxA&_nc_ss=7a32e&oh=00_Afx074MRd-AVNHY853UGuBsrBkaMeH92vNpn7dqZWuSBsA&oe=69C8DEBB" 
                  alt="Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-rose-600">{t('shopName')}</h1>
                <p className="text-xs text-gray-500">Bob Flower Store</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
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
              <img 
                src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/652310014_122203601690498856_565884404542807583_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=hGOGJPhFhqEQ7kNvwGxEf3u&_nc_oc=Adrsq0VKxqrCJqXvNUBlL4ZkH106LLLejUoi2oLejHOIx3aoaFyWTLA05MV_r7wp5w8lYuJiP_uqayqpKBk212dq&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=TJoHyM11Zj4KhCTOQUUGxA&_nc_ss=7a32e&oh=00_Afx074MRd-AVNHY853UGuBsrBkaMeH92vNpn7dqZWuSBsA&oe=69C8DEBB" 
                alt="Logo" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm">
                © 2026 {t('shopName')}. {t('allRightsReserved')}.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Bob-flower-61564965696654"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-colors"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/bob_bob_flower/"
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/962791809728"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageCircle className="size-6" />
      </a>

    </div>
  );
}
