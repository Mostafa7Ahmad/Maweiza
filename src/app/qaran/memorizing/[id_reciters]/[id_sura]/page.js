"use client";

import { useEffect, useState } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import '@/app/audio.css';

import Landing from "@/components/Landing";
import Aya from './Aya';

import memorizingAll from "@/json/memorizingAll.json";

export default function Qaran({ params }) {

    const idRecitations = params.id_reciters;
    const id = params.id_sura;

    const [isShow, setIsShow] = useState(false)

    const [ayah, setAyah] = useState(1)

    const [showData, setShowData] = useState("")

    const [dataAudio, setDataAudio] = useState("")

    const [dataAyah, setDataAyah] = useState([])

    const [dataRecitations, setDataRecitations] = useState("")

    const [nameEn, setNameEn] = useState("")

    const [dataSuaruh, setDataSuaruh] = useState("")

    useEffect(() => {
        let recitation = memorizingAll.data.filter((recitations) => (recitations.id.toString() === idRecitations.toString()))[0]
        setNameEn(recitation.name_en)
        setDataRecitations(recitation.name_ar)
    }, [idRecitations])

    useEffect(() => {
        async function fetchDataApi1() {
            const response = await fetch(`https://quran-api-id.vercel.app/surahs/${id}/ayahs/${ayah}`)
            const suaruhAudioJson = await response.json();
            setDataAudio(suaruhAudioJson.audio[recitation.name_en])
        }
        fetchDataApi1()
    }, [id, idRecitations, ayah])

    useEffect(() => {
        async function fetchDataApi2() {
            try {
                const responseSuaruh = await fetch(`https://api.alquran.cloud/v1/surah/${id}`)
                const dataSuaruhJson = await responseSuaruh.json();
                const suaruhData = dataSuaruhJson.data
                setDataAyah(suaruhData.ayahs);
                setDataSuaruh(suaruhData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataApi2()
    }, [id])

    let ShowDataMap = dataAyah.map((aya, key) => <span key={key} onClick={() => play(aya.numberInSurah)}><Aya aya={aya} ayah={ayah} /></span>)

    function ended() {
        try {
            ShowDataMap = dataAyah.map((aya, key) => <span key={key} onClick={() => play(aya.numberInSurah)}><Aya aya={aya} ayah={ayah} /></span>)
            setAyah(ayah + 1)
        } catch (error) {
            console.log(error);
        }
    }

    function play(ayah) {
        try {
            ShowDataMap = dataAyah.map((aya, key) => <span key={key} onClick={() => play(aya.numberInSurah)}><Aya aya={aya} ayah={ayah} /></span>)
            setAyah(ayah)
        } catch (error) {
            console.log(error);
        }
    }

    function clickNext() {
        try {
            ShowDataMap = dataAyah.map((aya, key) => <span key={key} onClick={() => play(aya.numberInSurah)}><Aya aya={aya} ayah={ayah} /></span>)
            setAyah(ayah + 1)
        } catch (error) {
            console.log(error);
        }
    }

    function clickPrevious() {
        try {
            ShowDataMap = dataAyah.map((aya, key) => <span key={key} onClick={() => play(aya.numberInSurah)}><Aya aya={aya} ayah={ayah} /></span>)
            setAyah(ayah - 1)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Landing title={<span className="font-quran">{dataSuaruh.name}</span>} text="" />
            <section className="pt-20 pb-20 relative px-4">
                <div className=" fixed bottom-0 right-0 left-0 bg-white py-10 px-10 shadow-lg dark:bg-black w-full">
                    <h1 className="m-auto text-center my-5 text-2xl font-quran">{dataSuaruh.name}</h1>
                    <p className="m-auto text-center text-xl"> بصوت الشيخ {dataRecitations}</p>
                    <AudioPlayer onClickNext={e => clickNext()} onClickPrevious={e => clickPrevious()} onEnded={e => ended()} autoPlay={true} src={dataAudio} />
                </div>
                {
                    (id !== "9") ? <h4 className="text-2xl font-quran mb-7 w-fit m-auto">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</h4> : ""
                }
                <div className="container m-auto">
                    {ShowDataMap}
                </div>
                <h4 className="text-2xl font-quran mt-7 w-fit m-auto">
                    صّدٍقُ آلَلَهّ آلَعٌظُيَمً
                </h4>
            </section>
        </>
    );
}