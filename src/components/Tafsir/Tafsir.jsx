"use client";

import { useState } from "react";
import Link from "next/link";
import sur from "@/json/sur";
import Search from "../web/Search";

export default function Tafsir() {
    let [dataTafsir, setDataTafsir] = useState(sur.data.surahs.references);
    let [massage, setMassage] = useState(false);

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

    const showData = dataTafsir.map((item, key) => (
        <Link
            key={key}
            href={`/tafsir/${item.number}`}
            className="flex transition-all flex-row justify-center p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm items-center dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white"
        >
            {optimize_string(item.name)}
        </Link>
    ));

    function handleChange(e) {
        let dataFilter = sur.data.surahs.references.filter((item) =>
            optimize_string(item.name).includes(optimize_string(e.target.value))
        );
        setDataTafsir(dataFilter);
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
                <div className="container gap-2 flex flex-col m-auto px-3 md:grid md:gap-3 md:grid-cols-4 lg:grid-cols-6">
                    {showData}
                </div>
            )}
        </>
    );
}
