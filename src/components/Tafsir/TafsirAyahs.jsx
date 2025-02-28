"use client";

import useSWR from "swr";

export default function TafsirAyahs({ id }) {

    const { data: surahData, error: surahError } = useSWR(`https://api.alquran.cloud/v1/surah/${id}`);
    const { data: tafsirData, error: tafsirError } = useSWR(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`);
    const { data: albitaqatData, error: albitaqatError } = useSWR(`https://raw.githubusercontent.com/Alsarmad/albitaqat_quran/main/albitaqat.json`);

    if (surahError || tafsirError || albitaqatError) return (
        <>
            <div className="text-center py-8">
                <p>حدث خطأ أثناء تحميل البيانات.</p>
            </div>
        </>
    );

    if (!surahData || !tafsirData || !albitaqatData) return (
        <>
            <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-200">جارٍ تحميل بيانات التفسير...</p>
            </div>
        </>
    );

    const albitaqat = albitaqatData[id - 1] || {};

    return (
        <section className="py-10 relative px-4">
            <h2 className="text-xl md:text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                معلومات عن السورة
            </h2>
            <div className="container m-auto">
                <div className="mb-10">
                    {[
                        { label: "آيَاتُها", value: albitaqat.ayaatiha },
                        { label: "مَعنَى اسْمِها", value: albitaqat.maeni_asamuha },
                        { label: "سَبَبُ تَسْمِيَتِها", value: albitaqat.sabab_tasmiatiha },
                        { label: "أَسْمَاؤُهـا", value: albitaqat.asmawuha },
                        { label: "مَقْصِدُها العَامُّ", value: albitaqat.maqsiduha_aleamu },
                        { label: "سَبَبُ نُزُولِهَا", value: albitaqat.sabab_nuzuliha },
                    ].map((item, index) => (
                        <div key={index} className="px-6 py-6 mb-3 shadow-md border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border-stone-600">
                            <span className="text-lime-600">{item.label}:</span> {item.value || "غير متوفر"}
                        </div>
                    ))}
                </div>
                <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    التفسير
                </h2>
                <div>
                    {tafsirData.result?.map((aya, index) => (
                        <div key={index} className="px-6 py-6 mb-3 font-quran shadow-md border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border-stone-600">
                            <h3 className="text-xl md:text-2xl pb-5 border-b mb-5 border-stone-900 dark:border-stone-500">
                                <span className="font-quran leading-10">{aya.arabic_text}</span>
                                <span className="text-lime-600">
                                    <span className="mr-2 font-quran"> ﴿ </span>
                                    <span className="text-black dark:text-white">{aya.aya}</span>
                                    <span className="ml-2 font-quran"> ﴾ </span>
                                </span>
                            </h3>
                            <p className="text-xl">{aya.translation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
