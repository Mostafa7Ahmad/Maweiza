"use client";

import Link from "next/link";
import { useState } from "react";

import quotesAll from "@/json/quotesAll.json";
import Search from "../web/Search";

export default function Quotes() {
    let [data, setData] = useState(quotesAll.authors);
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
            optimize_string(item.author).includes(
                optimize_string(e.target.value)
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
