"use client";

import Link from "next/link";
import { useState } from "react";

import quotesAll from "@/data/quotesAll.json";
import Search from "../layout/Search";
import { optimizeString } from "@/helpers/optimizeString";

export default function Quotes() {
    let [data, setData] = useState(quotesAll.authors);
    let [massage, setMassage] = useState(false);

    let showData = data.map((item, index) => (
        <Link
            href={`/quotes/${item.authorId}`}
            key={index}
            className="flex transition-all flex-row justify-between p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm items-center dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white"
        >
            <div className="flex flex-row gap-5 text-xl items-center">
                <p>{item.author}</p>
            </div>
        </Link>
    ));

    function handleChange(e) {
        let dataFilter = quotesAll.authors.filter((item) =>
            optimizeString(item.author).includes(
                optimizeString(e.target.value)
            )
        );
        setData(dataFilter);
        dataFilter.length === 0 ? setMassage(true) : setMassage(false);
    }

    return (
        <>
            <Search handleChange={handleChange} />
            {massage ? (
                <div className="container m-auto">
                    <p className="text-center">لا يوجد نتائج</p>
                </div>
            ) : (
                <div className="container m-auto gap-5 flex flex-col px-3 md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {showData}
                </div>
            )}
        </>
    );
}
