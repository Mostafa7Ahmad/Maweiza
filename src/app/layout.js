
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Buttons from "@/components/Buttons";

export const metadata = {
    metadataBase: new URL("https://maweiza.vercel.app"),
    title: "موقع موعظه",
    description: "اكتشف عالمًا من المعرفة والعلم مع موقعنا المخصص لتقديم محتوى إسلامي شامل ومتنوع. نقدم لك مجموعة واسعة من الأقسام التي تلبي احتياجاتك المختلفة، استمتع بمكتبة غنية من الكتب والمقالات، وابقَ على اطلاع بأوقات الصلاة والأحاديث النبوية. والمزيد ...",
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
            <head>
                <meta
                    name="google-adsense-account"
                    content="ca-pub-2830940611983404"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WBZJG335');`,
                    }}
                />
            </head>
            <body className="bg-[#fafafa] header dark:bg-[#000000f2] dark:text-white transition-colors selection:bg-lime-600 selection:text-white">
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-WBZJG335"
                    height="0"
                    width="0"
                >
                </iframe>
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
