"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { links } from "./links";

export default function Navbar() {
    const [menuButton, setMenuButton] = useState(["", ""]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>
        (isOpen) ? setMenuButton(["close", "show"]) : setMenuButton(["", ""])
    , [isOpen])

    const navLinks = links.map((item, index) =>
        <li key={index}>
            <Link onClick={() => setIsOpen(false)} className="text-lime-500 text-sm py-2 px-3 relative" href={item.path}>
                {item.name}
            </Link>
        </li>
    )
    
    return (
        <>
            <nav className="fixed top-0 right-0 left-0 z-40 h-0">
                <div className="backdrop-blur-sm bg-[#0000000c]">
                    <div className="container flex justify-between items-center m-auto py-5 px-3">
                        <Link href="/">
                            <Image loading="lazy" quality={75} className="m-auto" width="70" height="70" src="/logo.png" alt="logo" />
                            <span className="text-lime-500">موقع موعظه</span>
                        </Link>
                        <div className="nav-link">
                            <div onClick={() => (isOpen) ? setIsOpen(false) : setIsOpen(true)} className={"btn-nav hidden " + menuButton[0]}>
                                <span className="block h-[2px] w-full bg-[#ffffffd1] transition-all" />
                                <span className="block h-[2px] w-full bg-[#ffffffd1] transition-all" />
                                <span className="block h-[2px] w-full bg-[#ffffffd1] transition-all" />
                            </div>
                            <ul className={"flex gap-[10px] list-none " + menuButton[1]}>
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}