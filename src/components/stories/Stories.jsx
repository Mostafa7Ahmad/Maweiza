"use client";

import { useState } from "react";
import Link from "next/link";
import stories from "@/json/stories";

export default function Stories() {
    let [dataStories, setDataStories] = useState(stories);
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

    const showData = dataStories.map((item, key) => (
        <Link
            key={key}
            href={`/stories/${item.id}`}
            className="flex transition-all flex-row justify-center p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm items-center dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white"
        >
            {item.name}
        </Link>
    ));

    function handleChange(e) {
        let dataFilter = stories.filter((item) =>
            optimize_string(item.name).includes(optimize_string(e.target.value))
        );
        setDataStories(dataFilter);
        dataFilter.length === 0 ? setMassage(true) : setMassage(false);
    }

    return (
        <>
            <div className="font-sans px-5 text-black flex dark:text-white items-center justify-center my-5">
                <div className="border dark:border-gray-500 w-full max-w-2xl rounded overflow-hidden flex">
                    <input
                        type="text"
                        onChange={handleChange}
                        className="px-4 py-2 dark:bg-[#191919] block w-full"
                        placeholder="بحث..."
                    />
                    <button className="flex items-center justify-center px-4 transition-colors border-r hover:text-white hover:border-lime-600 hover:bg-lime-600 dark:border-gray-500">
                        <svg
                            className="h-4 w-4 text-grey-dark"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </div>
            {massage ? (
                <div className="container m-auto">
                    <p className="text-center">لا يوجد نتائج</p>
                </div>
            ) : (
                <div className="container gap-2 flex flex-col m-auto px-3 md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {showData}
                </div>
            )}
        </>
    );
}
