"use client";

import { useState } from "react";
import Link from "next/link";
import recitersJson from "@/json/reciters";
import memorizingJson from "@/json/memorizingAll";
import Search from "../Search";

export default function Reciters(props) {
    let AlReciter = [];

    if (props.type === "listen") {
        AlReciter = recitersJson.reciters;
    } else {
        AlReciter = memorizingJson.data;
    }

    let [dataReciters, setDataReciters] = useState(AlReciter);
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

    const showData = dataReciters.map((item, key) => (
        <>
            <Link
                key={key}
                href={`/qaran/${props.type}/${item.id}`}
                className="text-xl text-center transition-colors p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white"
            >
                {props.type == "listen" ? (
                    <>
                        <p className="pb-5 block border-b dark:border-white mb-5">
                            {item.name}
                        </p>
                        <p>{item.rewaya}</p>
                    </>
                ) : (
                    <p>{item.name_ar}</p>
                )}
            </Link>
        </>
    ));

    function handleChange(e) {
        let dataFilter = AlReciter.filter((item) =>
            optimize_string(
                props.type === "listen" ? item.name : item.name_ar
            ).includes(optimize_string(e.target.value))
        );
        setDataReciters(dataFilter);
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
                <div className="container gap-2 flex flex-col m-auto px-3 md:grid md:gap-3 md:grid-cols-1 lg:grid-cols-3">
                    {showData}
                </div>
            )}
        </>
    );
}
