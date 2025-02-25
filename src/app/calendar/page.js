import Landing from "@/components/Assets/Landing";
import ramadanMode from "@/helpers/ramadanMode";
import React from 'react';

const RamadanSchedule = () => {
    return (
        <div className="min-h-screen container mx-auto mb-5">
            <div className="mt-5">
                <div className="mx-auto p-10 bg-gradient-to-br from-green-900 to-green-600 rounded-2xl shadow-lg relative">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-full">
                            <h1 className="text-5xl font-bold text-white">
                                جدول أوقات رمضان المبارك
                            </h1>
                            <span className="inline-block mt-4 py-1 text-green-100 text-xl font-medium rounded-md">
                                مواعيد السحور والإفطار
                            </span>
                            <p className="mt-4 text-green-50 text-sm opacity-90">
                                اللهم بلغنا رمضان وأعنا على صيامه وقيامه واجعلنا من عتقائك من النار.
                            </p>
                        </div>
                        <div className="h-full p-3 border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <span className="block text-center mb-2 text-2xl">
                                <b className="text-4xl block -mb-1 text-green-600">01</b>
                                رمضان
                            </span>
                            <p className="text-center text-gray-600 dark:text-gray-200 text-sm">
                                10 مارس 2025 الاثنين
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 flex flex-col md:flex-row gap-2">
                <div className="w-full space-y-6">
                    {["التقويم الرمضاني"].map((title, idx) => (
                        <div key={idx} className="rounded-md p-10 border border-gray-200 bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <h2 className="text-2xl text-green-600 mb-4"> {title}</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-center">
                                    <thead>
                                        <tr>
                                            {["رمضان", "التاريخ", "اليوم", "السحور", "الشروق", "الإفطار"].map((header, i) => (
                                                <th key={i} className="bg-green-600 text-white p-3">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array(30).fill().map((_, i) => (
                                            <tr key={i} className={i >= 20 ? "bg-yellow-400" : ""}>
                                                <td className={`p-2 border border-gray-200 dark:border-zinc-700` + (i >= 20 ? " text-white" : " text-gray-800 dark:text-white")}>
                                                    {i + 1} رمضان
                                                </td>
                                                <td className={`p-2 border border-gray-200 dark:border-zinc-700` + (i >= 20 ? " text-white" : " text-gray-800 dark:text-white")}>
                                                    {i + 1} مايو 2025
                                                </td>
                                                <td className={`p-2 border border-gray-200 dark:border-zinc-700` + (i >= 20 ? " text-white" : " text-gray-800 dark:text-white")}>
                                                    الاثنين
                                                </td>
                                                {Array(3).fill().map((_, j) => (
                                                    <td key={j} className={`p-2 border border-gray-200 dark:border-zinc-700` + (i >= 20 ? " text-white" : " text-gray-800 dark:text-white")}>
                                                        04:22
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-[32%] space-y-2">
                    {["السحور", "الإفطار", "ليلة القدر", "العشر الأواخر", "رمضان كريم"].map((title, index) => (
                        <div key={index} className="p-6 shadow-md border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                            <h4 className="text-xl text-green-600 text-center mb-4">دعاء {title}</h4>
                            <p className="text-gray-600 dark:text-gray-200 text-center mb-4">
                                {title === "السحور" && "اللهم إني نويت أن أصوم رمضان كاملاً لوجهك الكريم، فاغفر لي ما تقدم من ذنبي وما تأخر."}
                                {title === "الإفطار" && "اللهم لك صمت وعلى رزقك أفطرت، ذهب الظمأ وابتلت العروق وثبت الأجر إن شاء الله."}
                                {title === "ليلة القدر" && "اللهم إنك عفو تحب العفو فاعف عني."}
                                {title === "العشر الأواخر" && "اللهم اجعلنا من عتقاء شهر رمضان، وأكرمنا بليلة القدر واغفر لنا ذنوبنا."}
                                {title === "رمضان كريم" && "اللهم اجعل هذا الشهر مباركًا علينا وعلى الأمة الإسلامية بالخير والبركات."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Page() {
    const ramadan = ramadanMode();
    return (
        ramadan &&
        <>
            <Landing title="التقويم الرمضاني" />
            <RamadanSchedule />
        </>
    );
}