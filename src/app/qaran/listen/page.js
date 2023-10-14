import Link from "next/link";
import Image from "next/image";

import Landing from "@/components/Landing";

export default async function () {
    let reciters = [];

    try {
        let data = await fetch("https://abdoahmed26.github.io/api/arabic.json");
        let read = await data.json();
        reciters = read.reciters;
    } catch (errors) {
        console.log(errors);
    }

    const showData = reciters.map((item, key) =>
        <Link key={key} href={`/qaran/listen/${item.id}`} className="text-xl text-center bg-white dark:bg-black dark:hover:bg-lime-600 hover:bg-lime-600 hover:text-white transition-colors p-5 border-2 border-solid border-lime-600">
            <p className="pb-5 block border-b mb-5 border-lime-600">
                {item.name}
            </p>
            <p>
                {item.rewaya}
            </p>
        </Link>
    );

    return (
        <>
            <Landing title="قسم الاستماع لتلاوه القران الكريم" text="" />
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