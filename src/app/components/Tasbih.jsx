"use client";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

import img from "../Images/3487.png";
import images from "../Images/images.png";

export default function Tasbih() {
    let [tasbih, setTasbih] = useState(0);
    function tasbihAdd() {
        setTasbih(parseInt(tasbih) + 1);
        localStorage.int = parseInt(tasbih) + 1;
    }
    function tasbihRefresh() {
        setTasbih(0);
        localStorage.int = 0;
    }
    useEffect(() => {
        (!('int' in localStorage)) ?  localStorage.int = 0 : setTasbih(localStorage.int)
    }, [])
    return (
        <>
            <img src={img} className="absolute right-0 rotate-180 -z-40" alt="img" />
            <section className="pt-20 pb-20">
                <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    تسبيح
                </h2>
                <div className="relative m-auto w-fit">
                    <span className="int w-[170px] bg-black px-5 py-2 text-left text-3xl absolute z-20 select-none top-[70px] left-[55px]">{tasbih}</span>
                    <span onClick={tasbihRefresh} className="top-[160px] z-20 bg-black absolute rounded-full cursor-pointer p-[10px] right-[54px]">
                        <FontAwesomeIcon icon={faRefresh} />
                    </span>
                    <span onClick={tasbihAdd} className="bottom-[33px] bg-black rounded-full z-20 select-none absolute cursor-pointer right-[87px] text-3xl py-8 px-12">+</span>
                    <img loading="lazy" className="w-72 h-80 relative" src={images} alt="img" />
                </div>
            </section>
        </>
    );
}

