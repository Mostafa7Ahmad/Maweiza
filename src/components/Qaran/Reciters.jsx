"use client";

import { useState } from "react";
import Link from "next/link";
import recitersJson from "@/data/reciters";
import memorizingJson from "@/data/memorizingAll";
import Search from "../layout/Search";
import { optimizeString } from "@/helpers/optimizeString";

export default function Reciters(props) {
    let AlReciter = [];

    if (props.type === "listen") {
        AlReciter = recitersJson.reciters;
    } else {
        AlReciter = memorizingJson.data;
    }

    let [dataReciters, setDataReciters] = useState(AlReciter);
    let [massage, setMassage] = useState(false);

    return (
        <>
            <Search handleChange={(e) => (e) => {
                let dataFilter = AlReciter.filter((item) =>
                    optimizeString(props.type === "listen" ? item.name : item.name_ar).includes(optimizeString(e.target.value))
                );
                setDataReciters(dataFilter);
                dataFilter.length === 0 ? setMassage(true) : setMassage(false);
            }} />
            {massage ? (
                <div className="container m-auto">
                    <p className="text-center">لا يوجد نتائج</p>
                </div>
            ) : (
                <div className="container gap-2 flex flex-col m-auto px-3 md:grid md:gap-3 md:grid-cols-1 lg:grid-cols-3">
                    {dataReciters.map((item, key) => (
                        <>
                            <Link
                                key={key}
                                href={`/qaran/${props.type}/${item.id}`}
                                className="text-xl text-center transition-colors p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white">
                                {props.type == "listen" ? (
                                    <div>
                                        <p className="pb-5 block border-b dark:border-white mb-5">{item.name}</p>
                                        <p>{item.rewaya}</p>
                                    </div>
                                ) : (
                                    <p>{item.name_ar}</p>
                                )}
                            </Link>
                        </>
                    ))}
                </div>
            )}
        </>
    );
}
