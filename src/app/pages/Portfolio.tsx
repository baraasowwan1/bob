import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const portfolioImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1548094967-e25a127d1f6d',
    title: 'Red Roses Bouquet',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1696613755401-dac200797436',
    title: 'Pink Roses',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1687308447351-e7997a702e09',
    title: 'White Roses Arrangement',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1719538832618-cd1d30219ee5',
    title: 'Yellow Roses',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1719499809556-070ec0dfda8b',
    title: 'Wedding Flowers',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1708604378427-a06673e5cc0e',
    title: 'Colorful Bouquet',
  },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-800">
          {t('portfolioTitle')}
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {t('portfolioSubtitle')}
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {portfolioImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
          >
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <ExternalLink className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Instagram Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 sm:p-8 shadow-lg">

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full">
              <Instagram className="size-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-800">
              Instagram
            </h2>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <iframe
              src="https://www.instagram.com/p/DWUA1CpDcze/embed"
              className="w-full h-[420px] rounded-lg bg-white"
            ></iframe>

            <iframe
              src="https://www.instagram.com/p/DWTiBM6DSjA/embed"
              className="w-full h-[420px] rounded-lg bg-white"
            ></iframe>

            <iframe
              src="https://www.instagram.com/p/DWTiBM6DSjA/embed"
              className="w-full h-[420px] rounded-lg bg-white"
            ></iframe>

          </div>

          {/* زر الحساب */}
          <div className="text-center mt-6">
            <a
              href="https://www.instagram.com/bob_bob_flower"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <Instagram className="size-5 mr-2" />
                عرض الحساب على إنستجرام
              </Button>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
