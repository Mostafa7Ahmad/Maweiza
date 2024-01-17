import "./globals.css";

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
            <body className="bg-[#fafafa] dark:bg-black dark:text-white transition-colors selection:bg-lime-600 selection:text-white">
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
