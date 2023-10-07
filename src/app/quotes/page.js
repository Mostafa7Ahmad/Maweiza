import Link from "next/link";

import Landing from "@/components/Landing";

import quotesAll from "@/json/quotesAll.json";

export const metadata = {
    title: 'موقع موعظه | قسم الاقتباسات',
    description: 'يحتوي هذا القسم علي اقتباسات للائمه والعلماء',
}

export default function Quotes() {
    const showData = quotesAll.authors.map((item, index) =>
        <Link href={`/quotes/${item.authorId}`} key={index} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
            <div className="flex flex-row gap-5 text-xl items-center">
                <p>{item.author}</p>
            </div>
        </Link>
    )

    return (
        <>
            <Landing title="قسم الاقتباسات الاسلاميه" text="" />
            <section className="pt-20 pb-20 relative px-4">
                <div className="container m-auto gap-5 flex flex-col px-3 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
            </section>
        </>
    );
}