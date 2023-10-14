import Image from "next/image";
import Link from "next/link";

import Landing from "@/components/Landing";

export const metadata = {
    title: 'موقع موعظه | قسم الاذكار والادعيه',
    description: 'يحتوي هذا القسم علي الكثير من الاذكار والادعيه المختلفه',
}

export default async function () {
    let dataAzekar = [];

    try {
        const response = await fetch('https://raw.githubusercontent.com/Alsarmad/Adhkar-json/main/adhkar.json')
        const data = await response.json();
        dataAzekar = data;
    } catch (error) {
        console.log(error);
    }

    const showData = dataAzekar.map((item, key) =>
        <Link href={`/azekar/${item.id}`} key={key} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
            {item.category}
        </Link>
    )

    return (
        <>
            <Landing title="قسم الاذكار والادعية" text="" />
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
