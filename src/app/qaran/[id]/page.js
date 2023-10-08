
import AudioPlayer from 'react-h5-audio-player';
import '../../audio.css';

import Landing from "@/components/Landing";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default async function Qaran({ params }) {
    const idRecitations = 1;

    const id = params.id;

    let dataSuaruh = [];

    let dataAyah = [];

    let dataAudio = [];

    let dataRecitations = '';

    try {
        const responseSuaruh = await fetch(`https://api.alquran.cloud/v1/surah/${id}`)
        const dataSuaruhJson = await responseSuaruh.json();
        const suaruhData = dataSuaruhJson.data
        dataAyah = suaruhData.ayahs;
        dataSuaruh = suaruhData;

        const responseFileAudio = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${idRecitations}/${id}`)
        const dataFileAudio = await responseFileAudio.json();
        dataAudio = dataFileAudio.audio_file;

        const responseRecitation = await fetch(`https://api.quran.com/api/v4/resources/recitations?language=ar`)
        const dataRecitationJson = await responseRecitation.json();
        dataRecitations = dataRecitationJson.recitations.filter((recitations) => (recitations.id === idRecitations) ? recitations : "")[0].translated_name.name;
    } catch (error) {
        console.log(error);
    }

    const showData = dataAyah.map((aya) =>
        <span className="leading-[65px]" key={aya.number}>
            <span className="font-quran text-xl md:text-2xl">
                {aya.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "")}
            </span>
            <span className="font-quran text-lime-600 text-xl md:text-2xl">
                <span className="mr-2 font-quran"> ﴿ </span>
                <span className="text-black dark:text-white">{aya.numberInSurah}</span>
                <span className="ml-2 font-quran"> ﴾ </span>
            </span>
        </span>
    );

    return (
        <>
            <Landing title={<span className="font-quran">{dataSuaruh.name}</span>} text="" />
            <section className="pt-20 pb-20 relative px-4">
                <div className="bg-white py-10 px-10 mb-20 dark:bg-black w-full">
                    <h1 className="m-auto text-center my-5 text-2xl font-quran">{dataSuaruh.name}</h1>
                    <p className="m-auto text-center text-xl"> بصوت الشيخ {dataRecitations}</p>
                    <AudioPlayer src={dataAudio.audio_url} />
                </div>
                {
                    (id !== "9") ? <h4 className="text-2xl font-quran mb-7 w-fit m-auto">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</h4> : ""
                }
                <div className="container m-auto">
                    {showData}
                </div>
                <h4 className="text-2xl font-quran mt-7 w-fit m-auto">
                    صّدٍقُ آلَلَهّ آلَعٌظُيَمً
                </h4>
            </section>

        </>
    );
}