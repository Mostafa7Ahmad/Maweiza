"use client";

import { useState } from "react";
import Link from "next/link";
import azekar from "@/data/azekar";
import Search from "../layout/Search";
import { optimizeString } from "@/helpers/optimizeString";

export default function Azekar() {
    let [dataAzekar, setDataAzekar] = useState(azekar);
    let [massage, setMassage] = useState(false);


    const showData = dataAzekar.map((item, key) => (
        <Link
            href={`/azekar/${item.id}`}
            key={key}
            className="flex transition-all flex-row justify-between p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm items-center dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white">
            {item.category}
        </Link>
    ));

    function handleChange(e) {
        let dataFilter = azekar.filter((item) =>
            optimizeString(item.category).includes(optimizeString(e.target.value))
        );
        setDataAzekar(dataFilter);
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
