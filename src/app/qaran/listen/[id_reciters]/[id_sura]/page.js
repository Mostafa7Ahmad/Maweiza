"use client";

import AudioPlayer from "react-h5-audio-player";
import "@/app/audio.css";

import Landing from "@/components/Layout/Landing";

export default async function ({ params }) {
    const idRecitations = params.id_reciters;
    const id = params.id_sura;

    let dataSuaruh = [];
    let dataAyah = [];

    let dataRecitations = "";

    let dataAudio = "";

    try {
        const responseSuaruh = await fetch(`https://api.alquran.cloud/v1/surah/${id}`);
        const dataSuaruhJson = await responseSuaruh.json();
        const suaruhData = dataSuaruhJson.data;

        dataAyah = suaruhData.ayahs;
        dataSuaruh = suaruhData;

        const responseFileAudio = await fetch(
            `https://abdoahmed26.github.io/api/arabic.json`
        );
        const dataFileAudio = await responseFileAudio.json();
        const dataFileAudioFilter = dataFileAudio.reciters.filter((recitations) => recitations.id === idRecitations)[0];

        dataAudio = `${dataFileAudioFilter.Server}/${id.toString().padStart(3, "0")}.mp3`;
        dataRecitations = dataFileAudioFilter.name;
    } catch (error) {
        console.log(error);
    }

    return (
        <>
            <Landing title={<span className="font-quran">{dataSuaruh.name}</span>} />
            <section className="py-10 relative px-4">
                <div className="bg-white py-10 px-10 mb-20 dark:bg-black w-full">
                    <h1 className="m-auto text-center my-5 text-2xl font-quran">
                        {dataSuaruh.name}
                    </h1>
                    <p className="m-auto text-center text-xl"> بصوت الشيخ {dataRecitations}</p>
                    <AudioPlayer autoPlay loop src={String(dataAudio)} />
                </div>
                {id !== "9" &&
                    <h4 className="text-2xl font-quran mb-7 w-fit m-auto">
                        بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
                    </h4>}
                <div className="container m-auto">{dataAyah.map((aya) => (
                    <span className="leading-[65px]" key={aya.number}>
                        <span className="font-quran text-xl md:text-2xl">
                            {aya.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "")}
                        </span>
                        <span className="font-quran text-lime-600 text-xl md:text-2xl">
                            <span className="mr-2 font-quran"> ﴿ </span>
                            <span className="text-black dark:text-white">
                                {aya.numberInSurah}
                            </span>
                            <span className="ml-2 font-quran"> ﴾ </span>
                        </span>
                    </span>
                ))}</div>
                <h4 className="text-2xl font-quran mt-7 w-fit m-auto"> صّدٍقُ آلَلَهّ آلَعٌظُيَمً</h4>
            </section>
        </>
    );
}
