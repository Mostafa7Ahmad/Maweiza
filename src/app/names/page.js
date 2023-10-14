
import Image from "next/image";

import Landing from "@/components/Landing";

export const metadata = {
    title: 'موقع موعظه | اسماء الله الحسني ',
    description: 'يحتوي هذا القسم علي اسماء الله الحسني ',
}

export default async function () {

    let reciters = [] ;
    try {
        let data = await fetch("https://raw.githubusercontent.com/Alsarmad/Names_Of_Allah_Json/main/Names_Of_Allah.json");
        reciters = await data.json();
    } catch (errors) {
        console.log(errors);
    }

    const showData = reciters.map((item, key) =>
        <span key={key} className="text-xl text-center bg-white dark:bg-black dark:hover:bg-lime-600 hover:bg-lime-600 hover:text-white transition-colors p-5 border-2 border-solid border-lime-600">
            <p className="pb-5 block border-b mb-5 border-lime-600">
                {item.name}
            </p>
            <p>
                {item.text}
            </p>
        </span>
    );

    return (
        <>
            <Landing title="قسم اسماء الله الحسني" text="" />
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