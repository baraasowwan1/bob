import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1548094967-e25a127d1f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc0MzAwMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Red roses bouquet',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc3NDI5NzYyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Pink roses',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1687308447351-e7997a702e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJvc2VzJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzc0MjgyMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'White roses arrangement',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1719538832618-cd1d30219ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjByb3NlcyUyMGdhcmRlbnxlbnwxfHx8fDE3NzQzODg2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Yellow roses',
  },
];

export function Home() {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1719586901803-d3a5ef35b28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MzUzMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Flower shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl mb-4">
            {t('welcome')}
          </h1>
          <h2 className="text-5xl md:text-7xl mb-6 text-rose-300">
            {t('shopName')}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <Link to="/portfolio">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
              {t('shopNow')}
              <ArrowRight className={`size-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">
            {t('ourGallery')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((image) => (
            <Link
              key={image.id}
              to="/portfolio"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold">{t('viewAllPortfolio')}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="border-rose-600 text-rose-600 hover:bg-rose-50">
              {t('viewAllPortfolio')}
              <ArrowRight className={`size-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
