"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Buttons() {
    const [Theme, setTheme] = useState("");
    const [btnClass, setBtnClass] = useState("");

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme("light");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            setTheme("dark");
        }

        window.addEventListener("scroll", () => window.scrollY >= 500 ? setBtnClass("show") : setBtnClass(""));
    }, []);


    function theme() {
        if (document.querySelector("html").getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            setTheme("dark");
        }
        else if (document.querySelector("html").getAttribute("data-theme") === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme("light");
        }
        else {
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme("light");
        }
    }

    const btnToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <span onClick={btnToTop} className={"btn-to-top hover-me dark:bg-[#00000014] dark:text-white text-lime-600 fixed bottom-[10px] right-[-50px] px-5 py-2 transition-colors bg-[rgba(255, 255, 255, 0.22)] backdrop-blur-sm z-40 transition-all cursor-pointer rounded-sm " + btnClass}>
                <i className="fa fa-angle-up" />
                <FontAwesomeIcon icon={faAngleUp} />
            </span>
            <span onClick={theme} className="btn-theme hover-me w-12 dark:bg-[#3a3a3a96] dark:text-white fixed bottom-[10px] left-[10px] backdrop-blur-sm text-black transition-colors cursor-pointer z-40 rounded-sm dark">
                {(Theme === "dark") ? <FontAwesomeIcon className="m-auto block" icon={faMoon} /> : <FontAwesomeIcon className="m-auto block" icon={faSun} />}
            </span>
        </>
    );
}

export default Buttons;