import Link from "next/link";
import Image from "next/image";

import Landing from "@/components/Landing";

import memorizingAll from "@/json/memorizingAll.json";

export default async function () {
    let reciters = [];

    reciters = memorizingAll.data;

    const showData = reciters.map((item, key) =>
        <Link key={key} href={`/qaran/memorizing/${item.id}`} className="text-xl text-center bg-white dark:bg-black dark:hover:bg-lime-600 hover:bg-lime-600 hover:text-white transition-colors p-5 border-2 border-solid border-lime-600">
            <p>
                {item.name_ar}
            </p>
        </Link>
    );

    return (
        <>
            <Landing title="قسم حفظ القران الكريم" text="" />
            <section className="pt-20 pb-20 relative">
                <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    اختر القارئ
                </h2>
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