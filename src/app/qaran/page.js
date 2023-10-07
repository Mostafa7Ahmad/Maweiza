import Link from "next/link";
import Image from "next/image";

import Landing from "@/components/Landing";

export const metadata = {
    title: 'موقع موعظه | قسم القران الكريم',
    description: 'يحتوي هذا القسم علي جميع سور القران الكريم',
}

export default async function AlQaran() {
    let Surs = [];
    
    try {
        const response = await fetch('https://api.alquran.cloud/v1/meta')
        const data = await response.json();
        Surs = data.data.surahs.references;
    } catch (errors) {
        console.log(errors);
    }

    const showData = Surs.map((item, key) =>
        <Link key={key} href={`/qaran/${item.number}`} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
            <div className="flex flex-row gap-5 text-xl items-center">
                <p className="bg-lime-600 flex w-10 h-10 items-center justify-center rotate-45">
                    <span className="-rotate-45 text-white">{item.number}</span>
                </p>
                <p className="font-quran">{item.name}</p>
            </div>
            <span className="text-gray-300"> {item.numberOfAyahs} آيه </span>
        </Link>
    );

    return (
        <>
            <Landing title="قسم القران الكريم" text="" />
            <section className="pt-20 pb-20 relative">
                <Image
                    width={100} height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <div className="container gap-5 flex flex-col m-auto px-3 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
                <Image
                    width={100} height={100}
                    src="/img.png"
                    className="absolute bottom-10 right-0 rotate-180 -z-40"
                    alt="img"
                />
            </section>
        </>
    );
}