import Link from "next/link";
import Image from "next/image";

import Landing from "@/components/Landing";

export default async function ({ params }) {
    
    let Surs = [];
    const idRecitations = params.id_reciters;

    try {
        const responseFileAudio = await fetch(`https://abdoahmed26.github.io/api/arabic.json`)
        const dataFileAudio = await responseFileAudio.json();
        const dataFileAudioFilter = dataFileAudio.reciters.filter((recitations) => (recitations.id === idRecitations))[0];
        const suras = dataFileAudioFilter.suras.split(",")
        
        const response = await fetch('https://api.alquran.cloud/v1/meta')
        const data = await response.json();
        Surs = data.data.surahs.references.filter((Sura) => suras.includes(Sura.number.toString()));

    } catch (errors) {
        console.log(errors);
    }

    const showData = Surs.map((item, key) =>
        <Link key={key} href={`/qaran/listen/${idRecitations}/${item.number}`} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
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
                <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    اختر السوره
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