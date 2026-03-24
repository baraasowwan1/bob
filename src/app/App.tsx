import { RouterProvider } from 'react-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { router } from './routes';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <LanguageProvider>

      {/* الموقع كامل */}
      <RouterProvider router={router} />

      {/* 🔥 زر واتساب عائم */}
      <a
        href="https://wa.me/962791809728"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageCircle className="size-6" />
      </a>

    </LanguageProvider>
  );
}
