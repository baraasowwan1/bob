import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation, Truck, Sparkles, Headphones, Palette } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const services = [
    { icon: Truck, titleKey: 'deliveryTitle', descKey: 'deliveryDesc', color: 'bg-blue-500' },
    { icon: Sparkles, titleKey: 'qualityTitle', descKey: 'qualityDesc', color: 'bg-rose-500' },
    { icon: Headphones, titleKey: 'supportTitle', descKey: 'supportDesc', color: 'bg-green-500' },
    { icon: Palette, titleKey: 'customTitle', descKey: 'customDesc', color: 'bg-purple-500' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-800">
          {t('contactTitle')}
        </h1>
        <p className="text-gray-600">{t('contactSubtitle')}</p>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto mb-10 space-y-6">
        <div className="flex items-center gap-3">
          <Phone className="text-rose-600" />
          <a href="tel:0791809728">0791809728</a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-rose-600" />
          <a href="mailto:info@bobflowerstore.com">info@bobflowerstore.com</a>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-rose-600" />
          <p>Bob flowers - Jordan</p>
        </div>
      </div>

      {/* 🔥 Social Media (رجعناها بشكل مرتب) */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl mb-4 text-gray-800 text-center">
          {t('followUs')}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Facebook */}
          <a
            href="https://www.facebook.com/p/Bob-flower-61564965696654"
            target="_blank"
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow w-full"
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <Facebook className="text-white" />
            </div>
            <span>Facebook</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bob_bob_flower"
            target="_blank"
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow w-full"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
              <Instagram className="text-white" />
            </div>
            <span>Instagram</span>
          </a>

        </div>
      </div>

      {/* 🔥 Customer Service */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl mb-6 text-center text-gray-800">
          {t('customerServiceTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <div className={`${service.color} w-12 h-12 flex items-center justify-center rounded-full mb-4`}>
                  <Icon className="text-white" />
                </div>
                <h3 className="font-semibold">{t(service.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(service.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔥 Google Map (الموقع الجديد اللي أرسلته) */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="bg-rose-600 text-white p-4 flex items-center gap-2">
            <Navigation />
            <h2>{t('address')}</h2>
          </div>

          <div className="w-full h-[300px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27092.285547525447!2d35.8421671!3d31.9192105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca70073499baf%3A0x22856d03776eb195!2sBob%20flowers!5e0!3m2!1sen!2sjo!4v1774463028376!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="location"
            />
          </div>

        </div>
      </div>

    </div>
  );
}
