import Link from "next/link";

export const categoriesLinks = [
    {
        name: "قران كريم",
        path: "/qaran",
    },
    {
        name: "تفسير القران",
        path: "/tafsir",
    },
    {
        name: "اسماء الله الحسني",
        path: "/names",
    },
    {
        name: "حديث",
        path: "/adith",
    },
    {
        name: "ادعيه والأذكار",
        path: "/azekar",
    },
    {
        name: "اقتباسات",
        path: "/quotes",
    },
    {
        name: "كتب",
        path: "/books/1",
    },
    {
        name: "مقالات",
        path: "/articles/1",
    },
    {
        name: "خطب",
        path: "/khotab/1",
    },
    {
        name: "فتاوي",
        path: "/fatwa/1",
    },
    {
        name: "محاضرات صوتيه",
        path: "/audios/1",
    },
    {
        name: "محاضرات فديو",
        path: "/videos/1",
    }
]

export default function Categories() {
    const showData = categoriesLinks.map((item, key) =>
        <Link href={`${item.path}`} key={key} className="bg-white dark:bg-black dark:hover:bg-lime-600 hover:bg-lime-600 hover:text-white transition-colors justify-between p-5 border-2 border-solid border-lime-600 text-center">
            {item.name}
        </Link>
    )

    return (
        <>
            <section className="pt-20 pb-20">
                <h2 className="text-2xl mb-5 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    اقسام الموقع
                </h2>
                <div className="container mt-10 gap-5 flex flex-col m-auto px-3 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
            </section>
        </>
    );
}