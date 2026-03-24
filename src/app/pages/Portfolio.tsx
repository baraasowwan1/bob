import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const portfolioImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1548094967-e25a127d1f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc0MzAwMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Red Roses Bouquet',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc3NDI5NzYyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Pink Roses',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1687308447351-e7997a702e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJvc2VzJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzc0MjgyMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'White Roses Arrangement',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1719538832618-cd1d30219ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjByb3NlcyUyMGdhcmRlbnxlbnwxfHx8fDE3NzQzODg2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Yellow Roses Garden',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1719499809556-070ec0dfda8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHdlZGRpbmd8ZW58MXx8fHwxNzc0Mzg4NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Wedding Flower Arrangement',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1708604378427-a06673e5cc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc3NDMzNjk4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Colorful Flowers Bouquet',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1560113405-0c86fcd406ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBib3VxdWV0fGVufDF8fHx8MTc3NDM4ODYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Bouquet',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1719586901803-d3a5ef35b28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MzUzMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Flower Shop Interior',
  },
];

// Mock Instagram posts
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1548094967-e25a127d1f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc0MzAwMTMyfDA&ixlib=rb-4.1.0&q=80&w=400',
    caption: 'Beautiful red roses for your special day',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1696613755401-dac200797436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc3NDI5NzYyOXww&ixlib=rb-4.1.0&q=80&w=400',
    caption: 'Pink roses in bloom',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1687308447351-e7997a702e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJvc2VzJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzc0MjgyMzEwfDA&ixlib=rb-4.1.0&q=80&w=400',
    caption: 'Elegant white rose arrangement',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1708604378427-a06673e5cc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc3NDMzNjk4Nnww&ixlib=rb-4.1.0&q=80&w=400',
    caption: 'Colorful mixed bouquet',
  },
];

export function Portfolio() {
  const { t } = useLanguage();
  const [instagramLink, setInstagramLink] = useState('');

  const handleInstagramSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you would integrate with Instagram API
    console.log('Instagram link:', instagramLink);
    alert('Instagram link saved! In production, this would connect to Instagram API.');
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <h3 className="text-white font-semibold text-center px-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Integration Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full">
              <Instagram className="size-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-800">
              {t('instagramFeed')}
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            {t('addInstagramLink')}
          </p>

          <form onSubmit={handleInstagramSubmit} className="flex gap-3 mb-8">
            <Input
              type="url"
              placeholder={t('instagramPlaceholder')}
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              {t('submit')}
            </Button>
          </form>

          {/* Mock Instagram Feed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="size-6 text-white" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                <Instagram className="size-5" />
                {t('viewOnInstagram')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
