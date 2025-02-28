"use client";

import React from 'react'
import useSWR from 'swr';

export default function Adith({ id }) {
    const { data, error, isLoading } = useSWR(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${id}`);

    if (isLoading) {
        return (
            <>
                <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-200">جارٍ تحميل بيانات الحديث...</p>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <div className="text-center py-8">
                    <p>حدث خطأ أثناء تحميل البيانات.</p>
                </div>
            </>
        );
    }


    return (
        <section className="py-5 relative px-4">
            <div className="container m-auto">
                <div className="flex flex-wrap p-5 my-5 text-xl justify-between items-center">
                    <div>
                        <span className="text-lime-600 text-xl">الاسناد : </span>
                        {data.attribution}
                    </div>
                    <div>
                        <span className="text-lime-600 text-xl">الدرجه : </span>
                        {data.grade}
                    </div>
                </div>
                <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                    {data.hadeeth}
                </div>

                <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                    <span className="text-lime-600 text-xl block mb-2">توضيح :</span>
                    {data.explanation}
                </div>

                <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                    <span className="text-lime-600 text-xl block mb-2">
                        مايرشد اليه من الحديث :
                    </span>
                    <ol>
                        {data.hints.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>

                <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                    <span className="text-lime-600 text-xl block mb-2">مراجع :</span>
                    {data.reference}
                </div>
            </div>
        </section>
    )
}
