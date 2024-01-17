import Landing from "@/components/Landing";

export default async function ({ params }) {
    const id = params.id;

    let dataSuaruh = [];
    let dataTafsir = [];
    let dataAlbitaqat = [];

    let dataFadluha = "";
    let dataSababNuzuliha = "";

    function optimize_string(string) {
        let text = "";
        let char = "";
        for (let index = 0; index < string.length; index++) {
            char = string[index];
            char = char.replace("ة", "ه");
            char = char.replace("ى", "ي");
            char = char.replace("أ", "ا");
            char = char.replace("إ", "ا");
            char = char.replace("آ", "ا");
            char = char.replace("ٱ", "ا");
            char = char.replace(/َ|ً|ُ|ٌ|ّ|ٍ|ِ|ْ|ٰ|ٓ|ـ/g, "");
            char = char.replace(/ۡ|ـ/g, "");
            char = char.replace("عبد ال", "عبدال");
            text = text + char;
        }
        return text;
    }

    
    try {
        const responseSuaruh = await fetch(
            `https://api.alquran.cloud/v1/surah/${id}`
        );
        dataSuaruh = await responseSuaruh.json();

        const responseTafsir = await fetch(
            `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`
        );
        dataTafsir = await responseTafsir.json();

        const responseAalbitaqat = await fetch(
            `https://raw.githubusercontent.com/Alsarmad/albitaqat_quran/main/albitaqat.json`
        );
        const dataAalbitaqat = await responseAalbitaqat.json();
        const albitaqatData = dataAalbitaqat[id - 1];

        dataAlbitaqat = albitaqatData;
        dataFadluha = albitaqatData.fadluha.map((fadluha, index) => (
            <span key={index}>
                {fadluha} <br />
            </span>
        ));
        dataSababNuzuliha = albitaqatData.munasabatiha.map(
            (sababNuzuliha, index) => (
                <span key={index}>
                    {sababNuzuliha} <br />
                </span>
            )
        );
    } catch (error) {
        console.log(error);
    }

    const showData = dataTafsir.result.map((aya, index) => (
        <div
            key={index}
            className="px-6 py-6 mb-3 font-quran shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600"
        >
            <h3 className="text-xl md:text-2xl pb-5 border-b mb-5 border-stone-900 dark:border-stone-500">
                <span className="font-quran leading-10">{aya.arabic_text}</span>
                <span className="text-lime-600">
                    <span className="mr-2 font-quran"> ﴿ </span>
                    <span className="text-black dark:text-white">
                        {aya.aya}
                    </span>
                    <span className="ml-2 font-quran"> ﴾ </span>
                </span>
            </h3>
            <p className="text-xl">{aya.translation}</p>
        </div>
    ));

    return (
        <>
            <Landing
                title={optimize_string(dataSuaruh.data.name)}
                text=""
            />
            <section className="py-10 relative px-4">
                <h2 className="text-xl md:text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    معلومات عن السوره
                </h2>
                <div className="container m-auto">
                    <div className="mb-10">
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">آيَاتُها :</span>
                            {dataAlbitaqat.ayaatiha}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">
                                مَعنَى اسْمِها :
                            </span>
                            {dataAlbitaqat.maeni_asamuha}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">
                                سَبَبُ تَسْمِيَتِها :
                            </span>
                            {dataAlbitaqat.sabab_tasmiatiha}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">
                                أَسْمَاؤُهـا :
                            </span>
                            {dataAlbitaqat.asmawuha}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">
                                مَقْصِدُها العَامُّ :
                            </span>
                            {dataAlbitaqat.maqsiduha_aleamu}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">
                                سَبَبُ نُزُولِهَا :
                            </span>
                            {dataAlbitaqat.sabab_nuzuliha}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">فَضْلُها :</span>
                            {dataFadluha}
                        </div>
                        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="text-lime-600">
                                مُنَاسَبَاتُها :
                            </span>
                            {dataSababNuzuliha}
                        </div>
                    </div>
                    <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                        التفسير
                    </h2>
                    <div className="">
                        {showData}
                    </div>
                </div>
            </section>
        </>
    );
}
