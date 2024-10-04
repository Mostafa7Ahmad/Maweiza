"use client";

import Link from "next/link";
import { useState } from "react";
import localStorage from 'local-storage';

export default function SearchHadith(props) {

    const [id, setId] = useState((props.id != "-") ? (localStorage.get('id')) ?? "" : "");

    function handleChange(e) {
        setId(e.target.value);
        localStorage.set('id', e.target.value);
    }


    return (
        <div className="font-sans px-5 text-black flex dark:text-white items-center justify-center my-5">
            <div className="border dark:border-gray-500 bg-[#fafafa] dark:bg-black w-full max-w-2xl rounded overflow-hidden flex">
                <input
                    type="text"
                    onChange={handleChange}
                    className="px-4 py-2 dark:bg-[#191919] block w-full"
                    placeholder="بحث..."
                    value={id ?? ""}
                />
                <Link href={"/search/" + id} className="flex items-center justify-center px-4 transition-colors border-r hover:text-white hover:border-lime-600 hover:bg-lime-600 dark:border-gray-500">
                    <svg
                        className="h-4 w-4 text-grey-dark"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
