import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
      
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-800">
          {t('contactTitle')}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          {t('contactSubtitle')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-10">
        
        <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-gray-800 text-center sm:text-left">
          {t('getInTouch')}
        </h2>

        {/* Contact Info */}
        <div className="space-y-6 mb-8">
          
          {/* Phone */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-rose-100 p-2 sm:p-3 rounded-full">
              <Phone className="size-5 sm:size-6 text-rose-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{t('phone')}</h3>
              <a href="tel:0791809728" className="text-gray-600 text-sm sm:text-base break-words">
                0791809728
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-rose-100 p-2 sm:p-3 rounded-full">
              <Mail className="size-5 sm:size-6 text-rose-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{t('email')}</h3>
              <a href="mailto:info@bobflowerstore.com" className="text-gray-600 text-sm sm:text-base break-all">
                info@bobflowerstore.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-rose-100 p-2 sm:p-3 rounded-full">
              <MapPin className="size-5 sm:size-6 text-rose-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{t('address')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bob flowers<br />
                Jordan
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-800 text-center sm:text-left">
            {t('followUs')}
          </h3>

          {/* 👇 أهم تعديل هنا */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Bob-flower-61564965696654"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-md w-full"
            >
              <div className="bg-blue-500 p-2 sm:p-3 rounded-full">
                <Facebook className="size-5 sm:size-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Facebook</p>
                <p className="text-xs sm:text-sm text-gray-500">@bobflowerstore</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bob_bob_flower"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-md w-full"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 sm:p-3 rounded-full">
                <Instagram className="size-5 sm:size-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Instagram</p>
                <p className="text-xs sm:text-sm text-gray-500">@bobflowerstore</p>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <Navigation className="size-5 sm:size-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl">
                {t('address')}
              </h2>
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27092.285547525447!2d35.8421670743164!3d31.91921049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca70073499baf%3A0x22856d03776eb195!2sBob%20flowers!5e0!3m2!1sen!2sjo!4v1774388679421!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
