import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    url: 'https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/657937373_122204919536498856_7735003159805374802_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=WWpm5cVx1roQ7kNvwGqN07q&_nc_oc=Adrmk-cT1DL-4ff-YVcSHq3nkMkQKG9mHkK7Ljxgezz2vsS9LPvMHYdW3N6qnoOOqfGzEYLMePsAHwO_80Yz23rM&_nc_zt=23&_nc_ht=scontent.famm11-1.fna&_nc_gid=4neRbA1GoybKeq0iQlX8Sg&_nc_ss=7a32e&oh=00_AfwowkJh7l0FDmLmqly8fXzzI5s7q3KvVTS8YtE9lr0qVg&oe=69CA003F',
    alt: 'Red roses bouquet',
  },
  {
    id: 2,
    url: 'https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/656848752_122204919824498856_1311471240225801069_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=GMARM0qyPtkQ7kNvwFXeeOE&_nc_oc=AdoD9c-IsMbuy_FxZd9dn_aJ6-0kjnOcIs4lNKsLgKWF-acLj-uwwfwxlexnSmhjidOd5nhNq4974Rhcle4QOkAv&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=Rt-ScueoXOZ-t3wQ5_vWLQ&_nc_ss=7a32e&oh=00_Afw6iKLWivBJgyenUzg-HbJToRetcAkjiLSDd5xAgKQ5iQ&oe=69CA2568',
    alt: 'Pink roses',
  },
  {
    id: 3,
    url: 'https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/656884151_122204759024498856_7458155976813117729_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=MnEUOGkgjYoQ7kNvwHeJMPp&_nc_oc=AdrPrrkk0_kHz6PV5eV9W1Mj4QkR0nmhTskvEd9KF-sKmzGgJci4Wkz3JjFLNUkYO7M9bB23DTqV4vOtSaCUtCML&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=pJ0-OpptriaFnCYRtLewQQ&_nc_ss=7a32e&oh=00_Afzb3r6WiTBr3mDALz3C5zYVbSYulkZd0eVGHVxNdRDM-w&oe=69CA2AD3',
    alt: 'White roses arrangement',
  },
  {
    id: 4,
    url: 'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/656492395_122204759018498856_6324798208926009721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=sRIliObMpEkQ7kNvwFO0qVt&_nc_oc=Adoy_Ry9COOibLTSNr-SkBn6Rogf_qKgrYsKxUvn6wd8Y7ekqMNvPyLejP-TtcHX7g1M6rHBWK5F_p_xJuKxT5vT&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=qHHYGaWfCEw2MOp_Jzo0iQ&_nc_ss=7a32e&oh=00_AfwXGQePRxvgr_WSxummdeYmOR4qk2oCiIynOCJqB-ScRg&oe=69CA0A8E',
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
            src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/502468159_122161968014498856_7393435856732539390_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_ohc=PsVGcFWT5YAQ7kNvwG32zdV&_nc_oc=AdrF1l8EPLSO9L2je5fHUfnYfSrnGKQbWFNAowN56Xqnowmra2UFSI6BUmkrmV5Bd5qIG9Yu5_TVm34IERWQaPaP&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=10w_cL8zKMrlUIi7BJYN5Q&_nc_ss=7a30f&oh=00_Afwv9WWcLG2HWYxqzRm-RLcutIns7cbC9XU6eaJLS9PO6A&oe=69CA11A8"
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
