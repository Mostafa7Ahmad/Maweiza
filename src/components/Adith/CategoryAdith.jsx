
"use client";

import Link from 'next/link';
import React from 'react'
import useSWR from "swr";

export default function CategoryAdith({ category }) {
    const { data, error, isLoading } = useSWR(`https://hadeethenc.com/api/v1/hadeeths/list/?language=ar&category_id=${category}&per_page=1000`);

    if (isLoading) {
        return (
            <>
                <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">جارٍ تحميل بيانات الاحاديث...</p>
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
            <div className="container m-auto flex flex-col gap-2">
                {data.data.map((item, index) => (
                    <Link
                        href={`/adiths/${category}/${item.id}`}
                        key={index}
                        className="flex transition-all flex-row justify-between p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm items-center dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white">
                        {item.title}
                    </Link>
                ))}
            </div>
        </section>
    )
}
