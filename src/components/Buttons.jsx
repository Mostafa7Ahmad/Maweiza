"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Buttons() {
    const [dark, setDark] = useState(false);
    const [btnClass, setBtnClass] = useState("");

    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.theme = "dark";
            setDark(true);
        }
        window.addEventListener("scroll", function () {
            window.scrollY >= 500 ? setBtnClass("show") : setBtnClass("");
        });
    }, []);

    function themeEdit() {
        if (dark) {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.theme = "light";
            setDark(false);
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.theme = "dark";
            setDark(true);
        }
    }
    const btnToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <>
            <span
                onClick={btnToTop}
                className={
                    "btn-to-top hover-me dark:bg-[#00000014] dark:text-white text-lime-600 fixed bottom-[10px] right-[-50px] px-5 py-2 transition-colors bg-[rgba(255, 255, 255, 0.22)] backdrop-blur-sm z-40 transition-all cursor-pointer rounded-sm " +
                    btnClass
                }
            >
                <i className="fa fa-angle-up" />
                <FontAwesomeIcon icon={faAngleUp} />
            </span>
            <span
                onClick={themeEdit}
                className="btn-theme hover-me w-12 dark:bg-[#3a3a3a96] dark:text-white fixed bottom-[10px] left-[10px] backdrop-blur-sm text-black transition-colors cursor-pointer z-40 rounded-sm dark"
            >
                {dark ? (
                    <FontAwesomeIcon className="m-auto block" icon={faMoon} />
                ) : (
                    <FontAwesomeIcon className="m-auto block" icon={faSun} />
                )}
            </span>
        </>
    );
}

export default Buttons;
