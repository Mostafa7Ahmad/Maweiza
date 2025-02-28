
"use client";

import Categories from "@/components/Home/Categories";

import { faAngleDoubleDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(display-mode: standalone)").matches) {
            setIsInstalled(true);
        }

        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });

        window.addEventListener("appinstalled", () => {
            setIsInstalled(true);
        });
    }, []);

    const installPWA = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choice) => {
                if (choice.outcome === "accepted") {
                    setIsInstalled(true);
                }
                setDeferredPrompt(null);
            });
        }
    };


    return (
        <>
            <div className="hero max-md:pt-28">
                <div className="container mx-auto relative h-screen p-10 mt-[120px] lg:mt-2 flex items-center justify-center max-md:pb-36">
                    <div className="mx-4 flex max-md:flex-wrap max-lg:justify-between justify-items-center items-center">
                        <div className="hero-content backdrop-blur-md bg-[rgb(250_250_250_/_80%)] dark:bg-[rgba(0,0,0,0.5)] p-5 max-md:border max-md:dark:border-zinc-700">
                            <h1 className="mb-5 text-3xl max-md:text-4xl max-sm:text-2xl font-bold  text-dark  dark:text-white">
                                مرحبا بكم في موقع موعظة
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                اكتشف عالمًا من المعرفة والعلم مع موقعنا المخصص لتقديم محتوى إسلامي شامل ومتنوع. نقدم لك مجموعة واسعة من الأقسام التي تلبي احتياجاتك المختلفة، استمتع بمكتبة غنية من الكتب والمقالات، وابقَ على اطلاع بأوقات الصلاة والأحاديث النبوية. والمزيد ...
                            </p>
                            <button
                                className="flex w-full justify-between items-center rounded-md mt-5 p-3 text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-105 active:scale-90 transition-all"
                                onClick={installPWA}>
                                تحميل كتطبيق
                                <FontAwesomeIcon className="text-sm max-h-3" icon={faDownload} />
                            </button>
                            {isInstalled && <p className="text-green-500 mt-5">🎉 التطبيق مثبت بالفعل!</p>}
                        </div>
                        <div className="px-4 max-md:mx-auto">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Image src="/4159264.webp" quality={40} width={400} height={400} alt="hero" className="max-w-full mx-auto up-and-down my-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#categories" className="go-down -bottom-24 text-lime-600 transition-colors text-xl hover:text-lime-700">
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </a>
                </div>
            </div>

            <Categories />
        </>
    );
}
