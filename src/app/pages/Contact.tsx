import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-800">
          {t('contactTitle')}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t('contactSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl mb-8 text-gray-800">
            {t('getInTouch')}
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 group">
              <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-200 transition-colors">
                <Phone className="size-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t('phone')}</h3>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-rose-600 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-200 transition-colors">
                <Mail className="size-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t('email')}</h3>
                <a href="mailto:info@bobflowerstore.com" className="text-gray-600 hover:text-rose-600 transition-colors">
                  info@bobflowerstore.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-200 transition-colors">
                <MapPin className="size-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t('address')}</h3>
                <p className="text-gray-600">
                  Bob flowers<br />
                  Jordan
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-2xl mb-6 text-gray-800">{t('followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/bobflowerstore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-1"
              >
                <div className="bg-blue-500 p-3 rounded-full">
                  <Facebook className="size-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Facebook</p>
                  <p className="text-sm text-gray-500">@bobflowerstore</p>
                </div>
              </a>

              <a
                href="https://instagram.com/bobflowerstore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-1"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full">
                  <Instagram className="size-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Instagram</p>
                  <p className="text-sm text-gray-500">@bobflowerstore</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl mb-6 text-gray-800">
            {t('sendMessage')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                {t('name')}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                {t('email')}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                {t('message')}
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              size="lg"
            >
              {t('submit')}
            </Button>
          </form>
        </div>
      </div>

      {/* Google Maps Location */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6">
            <div className="flex items-center gap-3 text-white">
              <Navigation className="size-6" />
              <h2 className="text-2xl md:text-3xl">
                {t('address')}
              </h2>
            </div>
          </div>
          <div className="relative w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27092.285547525447!2d35.8421670743164!3d31.91921049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca70073499baf%3A0x22856d03776eb195!2sBob%20flowers!5e0!3m2!1sen!2sjo!4v1774388679421!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bob Flower Store Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}