import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation, Truck, Sparkles, Headphones, Palette } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      titleKey: 'deliveryTitle',
      descKey: 'deliveryDesc',
      color: 'bg-blue-500',
    },
    {
      icon: Sparkles,
      titleKey: 'qualityTitle',
      descKey: 'qualityDesc',
      color: 'bg-rose-500',
    },
    {
      icon: Headphones,
      titleKey: 'supportTitle',
      descKey: 'supportDesc',
      color: 'bg-green-500',
    },
    {
      icon: Palette,
      titleKey: 'customTitle',
      descKey: 'customDesc',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-800">
          {t('contactTitle')}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          {t('contactSubtitle')}
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto mb-10 space-y-6">
        
        <div className="flex items-start gap-3">
          <Phone className="text-rose-600" />
          <a href="tel:0791809728">0791809728</a>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="text-rose-600" />
          <a href="mailto:info@bobflowerstore.com">info@bobflowerstore.com</a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="text-rose-600" />
          <p>Bob flowers - Jordan</p>
        </div>

      </div>

      {/* Social */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row gap-4">
          
          <a href="https://www.facebook.com/p/Bob-flower-61564965696654" className="bg-white p-4 rounded-lg shadow w-full">
            Facebook
          </a>

          <a href="https://www.instagram.com/bob_bob_flower" className="bg-white p-4 rounded-lg shadow w-full">
            Instagram
          </a>

        </div>
      </div>

      {/* 🔥 Customer Service (تم الدمج) */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl mb-6 text-gray-800 text-center">
          {t('customerServiceTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow p-6">
                <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="text-white" />
                </div>
                <h3 className="text-lg font-semibold">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-[300px] sm:h-[400px] rounded-xl"
        />
      </div>

    </div>
  );
}
