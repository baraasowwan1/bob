import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const portfolioImages = [
  {
    id: 1,
    url: 'https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/656848752_122204919824498856_1311471240225801069_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=GMARM0qyPtkQ7kNvwFXeeOE&_nc_oc=AdoD9c-IsMbuy_FxZd9dn_aJ6-0kjnOcIs4lNKsLgKWF-acLj-uwwfwxlexnSmhjidOd5nhNq4974Rhcle4QOkAv&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=GuxwDIMMVMA-hzeyYDs5nQ&_nc_ss=7a32e&oh=00_Afx6Rs7W1mSp3NoXi7AAnVwAaZGoZBUd8cYvdEsUy_SKEQ&oe=69C9ED28',
    title: 'Red Roses Bouquet',
  },
  {
    id: 2,
    url: 'https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/656498514_122204919614498856_1652600111153785909_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=zVDYO6zoXYUQ7kNvwFLPByF&_nc_oc=Adq25Jcbdbn-BEBDMmL64HoMeBfBbx0TJPCFREfADl2w1tW1Hw8qtzd-H4LwCWPTsTA06R8Bghc9T4rHOP865ePf&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=BJHAZHQWOa1tsz7B5l3ztQ&_nc_ss=7a32e&oh=00_Afz9_uEHZCVG2nqS5lSMyraF54G-VsLkzmGLEhh_h9BkLw&oe=69C9E673',
    title: 'Pink Roses',
  },
  {
    id: 3,
    url: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/658916732_122204916080498856_5436379757486246401_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=nnBNXP42c_gQ7kNvwHNx3SF&_nc_oc=Adr0ON6KevB_0MbZ4NJO61XFPgg3ymoGw982lF3tBinXLnpjJZmxFZxHqhIs9jQlz4M8j9MBYAgshjSE30CFdg2B&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=s8Tn1RDULV8TW1p3hZ7HTA&_nc_ss=7a32e&oh=00_AfwL-2Q0AGXe1eIsYA3gu1oEQjgp20AUmqXgIKmf7_NrzQ&oe=69CA17C6',
    title: 'White Roses Arrangement',
  },
  {
    id: 4,
    url: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/656481328_122204690582498856_4658411384429805310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=U7jLjji0qFsQ7kNvwFzvdze&_nc_oc=AdorYod7aoketNVjJdRlAyxuN6pwlccZ6x2pEefM9ypQ6hZehHIy42xLThcOWgueB4bc6a0CLvCMe5TX9NAqY-MG&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=cn8TsBPntAJBrBqaS7_J0w&_nc_ss=7a32e&oh=00_AfxpXYZElO1miGR6VtGMvQilkZmbqa-i0CRi3_eI-fj2DQ&oe=69CA1BE2',
    title: 'Yellow Roses',
  },
  {
    id: 5,
    url: 'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/656873906_122204690588498856_1607913724015534379_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wTMwV7oQBYgQ7kNvwF6n2H-&_nc_oc=Adp8vK6Vl5E5NszDBhlT1hDZeZtzfqucOiY0MHutX5k0ztSypJIv7arG5nJh45KARHilM3EB6Xir7-JVawtZwlaM&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=YpUr6pVtq8z250c3zD4myQ&_nc_ss=7a32e&oh=00_AfzTYZcOnYp41PJ2s8t52UT3-5nfLxQ3BLLSxIOk0AlG_g&oe=69C9F91B',
    title: 'Wedding Flowers',
  },
  {
    id: 6,
    url: 'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/657428281_122204759138498856_1944445685936991742_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=oIYKjnWWfM4Q7kNvwHOhrg2&_nc_oc=Adpv6YHhyWQfe2xq5kpVqZyLbSOjVc8eTL93Bj4SR_rmpOZNc1kzFI6eIMonIYaWADuCave7HpNowJioB2MjfG8G&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=czYLUT0aKidv-dYd28IqQQ&_nc_ss=7a32e&oh=00_Afyua_as3onqMBxlz0sKE9kYmRL9Vc6Bu9YmvIG7shifGQ&oe=69CA0B6B',
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
