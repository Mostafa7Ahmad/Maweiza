import './globals.css';

import MenuProvider from '@/context/MenuContext';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Buttons from '@/components/Buttons';

export const metadata = {
  title: 'موقع موعظه',
  description: 'موقع إسلامي يوجد به القرآن الكريم وتفسير القران الكريم والحديث الشريف واذكار وأدعيه والاقتباسات الاسلاميه واوقات الصلاه والمزيد',
  manifest: "/manifest.webmanifest" ,
  keywords: "اذكار , أدعيه ,اوقات الصلاه , قران , حديث ,الاقتباسات",
  author: "مصطفي احمد",
}

// fas fa-headphones
// fas fa-microphone

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className="scroll-smooth" dir="rtl">
      <body className="dark:bg-black dark:text-white transition-colors selection:bg-lime-600 selection:text-white">
        <main className="relative">
          <MenuProvider>
            <Navbar />
            {children}
            <Footer />
            <Buttons />
          </MenuProvider>
        </main>
      </body>
    </html>
  )
}