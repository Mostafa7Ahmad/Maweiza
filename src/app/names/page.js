import Image from "next/image";

import Landing from "@/components/Landing";

export const metadata = {
    title: "موقع موعظه | اسماء الله الحسني ",
    description: "يحتوي هذا القسم علي اسماء الله الحسني ",
};

export default async function () {
    let reciters = [];
    try {
        let data = await fetch(
            "https://raw.githubusercontent.com/Alsarmad/Names_Of_Allah_Json/main/Names_Of_Allah.json"
        );
        reciters = await data.json();
    } catch (errors) {
        console.log(errors);
    }

    const showData = reciters.map((item, key) => (
        <span
            key={key}
            className="px-6 py-6 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600"
        >
            <p className="pb-5 text-2xl block border-b mb-5 dark:border-gray-200">
                {item.name}
            </p>
            <p className="text-xl">{item.text}</p>
        </span>
    ));

    return (
        <>
            <Landing title="قسم اسماء الله الحسني" text="" />
            <section className="py-10 relative">
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <div className="container gap-2 flex flex-col m-auto px-3 md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute bottom-10 right-0 rotate-180 -z-40"
                    alt="img"
                />
            </section>
        </>
    );
}
