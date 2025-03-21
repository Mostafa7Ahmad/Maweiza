"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import Headroom from "react-headroom";

import { links } from "../../data/links";
import { useRamadan } from "@/context/ramadanContext";

export default function Navbar() {
    const { ramadan } = useRamadan();

    const [menuButton, setMenuButton] = useState(["", ""]);
    const [isOpen, setIsOpen] = useState(false);
    let nav = useRef(null);

    useEffect(() => {
        isOpen ? setMenuButton(["close", "show"]) : setMenuButton(["", ""]);
    }, [isOpen]);

    const navLinks = links.map((item, index) => (
        <li key={index}>
            <Link
                onClick={() => setIsOpen(false)}
                className="text-gray-600 dark:text-white hover:text-lime-500 dark:hover:text-lime-500 transition-colors text-sm py-2 px-3 relative"
                href={item.path}
            >
                {item.name}
            </Link>
        </li>
    ));

    return (
        <>
            <Headroom className="fixed z-50 md:top-5 top-0 left-0 right-0 container mx-auto transition-all">
                <nav className="z-40 relative backdrop-blur-md border rounded-xl dark:border-zinc-700 shadow-sm">
                    <div className="nav bg-[rgb(250_250_250_/_80%)] dark:bg-[rgba(0,0,0,0.5)] px-3">
                        <div className="container flex justify-between items-center m-auto py-5 px-3">
                            <Link href="/">
                                <Image
                                    loading="lazy"
                                    quality={75}
                                    className="m-auto"
                                    width="60"
                                    height="60"
                                    src="/logo.png"
                                    alt="logo"
                                />
                            </Link>
                            <div className="nav-link">
                                <div
                                    onClick={() =>
                                        isOpen
                                            ? setIsOpen(false)
                                            : setIsOpen(true)
                                    }
                                    className={
                                        "btn-nav hidden " + menuButton[0]
                                    }
                                >
                                    <span className="block h-[2px] w-full bg-[#ffffffd1] transition-all" />
                                    <span className="block h-[2px] w-full bg-[#ffffffd1] transition-all" />
                                    <span className="block h-[2px] w-full bg-[#ffffffd1] transition-all" />
                                </div>
                                <ul
                                    ref={nav}
                                    style={{
                                        height:
                                            menuButton[1] == "show"
                                                ? (nav.current ? nav.current.scrollHeight : 0) +
                                                "px"
                                                : "initial",
                                    }}
                                    className={"flex gap-[10px] list-none max-[992px]:bg-[#fafafaeb] max-[992px]:dark:bg-[#000000a6] " + (menuButton[1] == "show" ? nav.current.scrollHeight + "" : "hide")}
                                >
                                    {navLinks}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </Headroom>
            {ramadan && <Image src="/zena.png" width={250} height={200} alt="Zena decoration" className="zena" />}
        </>
    );
}
