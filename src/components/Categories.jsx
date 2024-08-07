import Link from "next/link";

import azekar from "@/images/azekar.png";
import adith from "@/images/adith.jpeg";
import khotab from "@/images/khotab.jpeg";
import videos from "@/images/videos.jpg";
import articles from "@/images/articles.jpeg";
import fatwa from "@/images/fatwa.jpg";
import zakat from "@/images/zakat.jpg";
import qaran from "@/images/qaran.jpeg";
import tafsir from "@/images/tafsir.jpeg";
import tasbih from "@/images/tasbih.jpeg";
import Salah from "@/images/Salah.jpeg";
import search from "@/images/search.jpeg";
import stories from "@/images/stories.jpeg";
import children from "@/images/children.jpeg";
import quotes from "@/images/quotes.jpeg";
import audios from "@/images/audios.jpeg";
import books from "@/images/books.jpeg";
import Image from "next/image";
import localStorage from "local-storage";

export const categoriesLinks = [
    {
        name: "قسم القران الكريم",
        path: "/qaran",
        img: qaran.src,
        new: false,
    },
    {
        name: "قسم تفسير القران",
        path: "/tafsir",
        img: tafsir.src,
        new: false,
    },
    {
        name: "قسم التسبيح",
        path: "/tasbih",
        img: tasbih.src,
        new: false,
    },
    {
        name: "اوقات الصلاة والمناسبات الاسلامية",
        path: "/salah",
        img: Salah.src,
        new: false,
    },
    {
        name: "قسم الحديث",
        path: "/adith",
        img: adith.src,
        new: false,
    },
    {
        name: "قسم الادعية والاذكار",
        path: "/azekar",
        img: azekar.src,
        new: false,
    },
    {
        name: "قسم الاقتباسات",
        path: "/quotes",
        img: quotes.src,
        new: false,
    },
    {
        name: "قسم الكتب",
        path: "/books/1",
        img: books.src,
        new: false,
    },
    {
        name: "قسم المقالات",
        path: "/articles/1",
        img: articles.src,
        new: false,
    },
    {
        name: "قسم الخطب",
        path: "/khotab/1",
        img: khotab.src,
        new: false,
    },
    {
        name: "قسم الفتاوي",
        path: "/fatwa/1",
        img: fatwa.src,
        new: false,
    },
    {
        name: "قسم المحاضرات الصوتيه",
        path: "/audios/1",
        img: audios.src,
        new: false,
    },
    {
        name: "قسم المحاضرات الفيديو",
        path: "/videos/1",
        img: videos.src,
        new: false,
    },
    {
        name: "اداه الباحث في الحديث",
        path: `/search/${localStorage.get('id') ?? "-"}`,
        img: search.src,
        new: true,
    },
    {
        name: "ما لا يسع اطفال المسلمين جهله",
        path: "/children",
        img: children.src,
        new: true,
    },
    // {
    //     name: "قصص الانبياء",
    //     path: "/stories",
    //     img: stories.src,
    //     new: true,
    // },
    // {
    //     name: "حساب الذكاه",
    //     path: "/zakat",
    //     img: zakat.src,
    //     new: true,
    // }
];

export default function Categories() {
    const showData = categoriesLinks.map((item, key) => (
        <div
            key={key}
            className="shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-lg bg-white dark:bg-[#191919] dark:border dark:border-stone-700 relative"
        >
                {(item.new) ? <div className="label">قسم جديد</div> : null}
            <div className="m-5 overflow-hidden rounded-md">
                
                <img src={item.img} className="md:w-full md:h-60" alt="" />
            </div>
            <Link
                className="flex justify-center rounded-md m-5 p-3 text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-105 active:scale-90 transition-all"
                href={`${item.path}`}
            >
                {item.name}
            </Link>
        </div>
    ));

    return (
        <>
            <section className="py-10 relative" id="categories">
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <h2 className="text-2xl mb-5 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    اقسام الموقع
                </h2>
                <div className="container mt-10 gap-3 flex flex-col m-auto px-3 sm:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 bottom-0 rotate-180 right-0 -z-40"
                    alt="img"
                />
            </section>
        </>
    );
}
