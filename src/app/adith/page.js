import Image from "next/image";
import Link from "next/link";

import Landing from "@/components/Landing";

export const metadata = {
    title: 'موقع موعظه | قسم الاحاديث',
    description: 'يحتوي هذا القسم علي الكثير من الاحاديث النبويه مع عرذ جميع معلومات الحديث',
}

export default async function AlAdith() {
    let adithApi = [];

    try {
        const response = await fetch('https://hadeethenc.com/api/v1/categories/list/?language=ar')
        adithApi = await response.json();
    } catch (error) {
        console.log(error);
    }

    const showData = adithApi.map((item, index) =>
        <Link href={`/adith/${item.id}`} key={index} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
            <div className="flex flex-row gap-5 items-center">
                {item.title}
            </div>
            <span className="text-gray-300"> {item.hadeeths_count} حديث </span>
        </Link>
    );

    return (
        <>
            <Landing title="قسم الحديث" text="" />
            <section className="pt-20 pb-20 relative px-4">
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