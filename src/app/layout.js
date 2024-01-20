import "./globals.css";

import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Buttons from "@/components/Buttons";

export const metadata = {
    metadataBase: new URL("https://maweiza.vercel.app"),
    title: "موقع موعظه",
    description:
        "موقع إسلامي يوجد به القرآن الكريم وتفسير القران الكريم والحديث الشريف واذكار وأدعيه والاقتباسات الاسلاميه واوقات الصلاه والمزيد",
    manifest: "/manifest.webmanifest",
    keywords: "اذكار , أدعيه ,اوقات الصلاه , قران , حديث ,الاقتباسات",
    author: "مصطفي احمد",
    icon: "favicon.ico",
    openGraph: {
        siteName: "Maweiza",
    },
    verification: {
        google: "google",
        yahoo: "yahoo",
        me: ["zn327855@gmail.com"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" className="scroll-smooth" dir="rtl">
<Head>
<Script id="google-tag-manager" strategy="afterInteractive">
    {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WBZJG335');
    }
  </Script>
<Head/>
            <body className="bg-[#fafafa] dark:bg-black dark:text-white transition-colors selection:bg-lime-600 selection:text-white">

<noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBZJG335" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
                <main className="relative">
                    <Navbar />
                    {children}
                    <Footer />
                    <Buttons />
                </main>
            </body>
        </html>
    );
}
