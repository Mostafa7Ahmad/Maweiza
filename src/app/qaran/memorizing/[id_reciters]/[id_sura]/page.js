"use client";

import { useEffect, useState } from "react";

import AudioPlayer from "react-h5-audio-player";
import "@/app/audio.css";

import Landing from "@/components/Assets/Landing";
import Aya from "./Aya";

import memorizingAll from "@/data/memorizingAll.json";

export default function _({ params }) {
    const idRecitations = params.id_reciters;
    const id = params.id_sura;

    const [ayah, setAyah] = useState(1);
    const [dataAudio, setDataAudio] = useState("");
    const [dataAyah, setDataAyah] = useState([]);
    const [dataRecitations, setDataRecitations] = useState("");
    const [nameEn, setNameEn] = useState("");
    const [dataSuaruh, setDataSuaruh] = useState("");

    useEffect(() => {
        async function fetchDataApi1() {
            let recitation = memorizingAll.data.filter(
                (recitations) =>
                    recitations.id.toString() === idRecitations.toString()
            )[0];
            setNameEn(recitation.name_en);
            setDataRecitations(recitation.name_ar);
            const response = await fetch(
                `https://quran-api-id.vercel.app/surahs/${id}/ayahs/${ayah}`
            );
            const suaruhAudioJson = await response.json();
            setDataAudio(suaruhAudioJson.audio[recitation.name_en]);
        }
        fetchDataApi1();
    }, [id, idRecitations]);

    useEffect(() => {
        async function fetchDataApi2() {
            try {
                const responseSuaruh = await fetch(
                    `https://api.alquran.cloud/v1/surah/${id}`
                );
                const dataSuaruhJson = await responseSuaruh.json();
                const suaruhData = dataSuaruhJson.data;
                setDataAyah(suaruhData.ayahs);
                setDataSuaruh(suaruhData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataApi2();
    }, [id]);

    let ShowDataMap = dataAyah.map((aya, key) => (
        <span key={key} onClick={() => play(aya.numberInSurah)}>
            <Aya aya={aya} ayah={ayah} />
        </span>
    ));

    async function ended() {
        try {
            const response = await fetch(
                `https://quran-api-id.vercel.app/surahs/${id}/ayahs/${ayah + 1}`
            );
            const suaruhAudioJson = await response.json();
            setDataAudio(suaruhAudioJson.audio[nameEn]);
            ShowDataMap = dataAyah.map((aya, key) => (
                <span key={key} onClick={() => play(aya.numberInSurah)}>
                    <Aya aya={aya} ayah={ayah + 1} />
                </span>
            ));
            setAyah(ayah + 1);
        } catch (error) {
            console.log(error);
        }
    }

    async function play(ayaNaw) {
        try {
            const response = await fetch(
                `https://quran-api-id.vercel.app/surahs/${id}/ayahs/${ayaNaw}`
            );
            const suaruhAudioJson = await response.json();
            setDataAudio(suaruhAudioJson.audio[nameEn]);
            ShowDataMap = dataAyah.map((aya, key) => (
                <span key={key} onClick={() => play(aya.numberInSurah)}>
                    <Aya aya={aya} ayah={ayaNaw} />
                </span>
            ));
            setAyah(ayaNaw);
        } catch (error) {
            console.log(error);
        }
    }

    async function clickNext() {
        try {
            const response = await fetch(
                `https://quran-api-id.vercel.app/surahs/${id}/ayahs/${ayah + 1}`
            );
            const suaruhAudioJson = await response.json();
            setDataAudio(suaruhAudioJson.audio[nameEn]);
            ShowDataMap = dataAyah.map((aya, key) => (
                <span key={key} onClick={() => play(aya.numberInSurah)}>
                    <Aya aya={aya} ayah={ayah + 1} />
                </span>
            ));
            setAyah(ayah + 1);
        } catch (error) {
            console.log(error);
        }
    }

    async function clickPrevious() {
        try {
            const response = await fetch(
                `https://quran-api-id.vercel.app/surahs/${id}/ayahs/${ayah - 1}`
            );
            const suaruhAudioJson = await response.json();
            setDataAudio(suaruhAudioJson.audio[nameEn]);
            ShowDataMap = dataAyah.map((aya, key) => (
                <span key={key} onClick={() => play(aya.numberInSurah)}>
                    <Aya aya={aya} ayah={ayah - 1} />
                </span>
            ));
            setAyah(ayah - 1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Landing
                title={<span className="font-quran">{dataSuaruh.name}</span>}
                text=""
            />
            <section className="py-10 relative px-4">
                <div className=" fixed bottom-0 right-0 left-0 bg-white py-10 px-10 shadow-lg dark:bg-black w-full">
                    <h1 className="m-auto text-center my-5 text-2xl font-quran">
                        {dataSuaruh.name}
                    </h1>
                    <p className="m-auto text-center text-xl">
                        بصوت الشيخ {dataRecitations}
                    </p>
                    <AudioPlayer
                        onClickNext={(e) => clickNext()}
                        onClickPrevious={(e) => clickPrevious()}
                        onEnded={(e) => ended()}
                        autoPlay={true}
                        src={dataAudio}
                    />
                </div>
                {id !== "9" ? (
                    <h4 className="text-2xl font-quran mb-7 w-fit m-auto">
                        بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
                    </h4>
                ) : (
                    ""
                )}
                <div className="container m-auto">{ShowDataMap}</div>
                <h4 className="text-2xl font-quran mt-7 w-fit m-auto">
                    صّدٍقُ آلَلَهّ آلَعٌظُيَمً
                </h4>
            </section>
        </>
    );
}
