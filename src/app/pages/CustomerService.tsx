import { useLanguage } from '../contexts/LanguageContext';
import { Truck, Sparkles, Headphones, Palette } from 'lucide-react';

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

export function CustomerService() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-800">
          {t('customerServiceTitle')}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t('customerServiceSubtitle')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="size-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-800">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl mb-6 text-gray-800">
            {t('customerServiceSubtitle')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('deliveryDesc')} {t('qualityDesc')} {t('supportDesc')}
          </p>
        </div>
      </div>
    </div>
  );
}
