"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import moment from "moment";
import "moment/dist/locale/ar-dz";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "@/components/Loader";

moment.locale("ar");

export default function Salah() {

    const [timings, setTimings] = useState({
        Fajr: "00:00",
        Dhuhr: "00:00",
        Asr: "00:00",
        Sunset: "00:00",
        Isha: "00:00"
    });
    const prayersArray = [
        { key: "Fajr", displayName: "الفجر" },
        { key: "Dhuhr", displayName: "الظهر" },
        { key: "Asr", displayName: "العصر" },
        { key: "Sunset", displayName: "المغرب" },
        { key: "Isha", displayName: "العشاء" }
    ];
    const [remainingTime, setRemainingTime] = useState({
        h: "00",
        m: "00",
        s: "00",
    });

    const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
    const [refreshGps, setRefreshGps] = useState(true);
    const [btnError, setBtnError] = useState(null);
    const [loadingScreen, setLoadingScreen] = useState(true);

    const setupCountdownTimer = () => {
        const momentNow = moment();

        let prayerIndex = 0;

        if (momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) && momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))) {
            prayerIndex = 1;
        }
        else if (momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) && momentNow.isBefore(moment(timings["Asr"], "hh:mm"))) {
            prayerIndex = 2;
        }
        else if (momentNow.isAfter(moment(timings["Asr"], "hh:mm")) && momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))) {
            prayerIndex = 3;
        }
        else if (momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) && momentNow.isBefore(moment(timings["Isha"], "hh:mm"))) {
            prayerIndex = 4;
        }

        setNextPrayerIndex(prayerIndex);

        const nextPrayerTime = timings[prayersArray[prayerIndex].key]; // prayersArray[prayerIndex].key

        let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

        if (prayerIndex === 0) {
            remainingTime = (moment("23:59:59", "hh:mm:ss").diff(momentNow)) + (moment(nextPrayerTime, "hh:mm").diff(moment("00:00:00", "hh:mm:ss")));
        }

        const durationRemainingTime = moment.duration(remainingTime);

        setRemainingTime({
            h: durationRemainingTime.hours().toString().padStart(2, '0'),
            m: durationRemainingTime.minutes().toString().padStart(2, '0'),
            s: durationRemainingTime.seconds().toString().padStart(2, '0'),
        })
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setupCountdownTimer()
        }, 1000);
        return () => clearInterval(interval);
    }, [timings]);

    useEffect(() => {
        setLoadingScreen(true)

        let date = new Date();

        async function getPlayer(latitude, longitude) {
            try {
                const response = await fetch(`https://api.aladhan.com/v1/calendar/${date.getFullYear()}?latitude=${latitude}&longitude=${longitude}`)
                const pray = await response.json();
                let time = pray.data[date.getMonth() + 1][date.getDate() - 1];
                setTimings({
                    Fajr: time.timings.Fajr.slice(0, 5),
                    Dhuhr: time.timings.Dhuhr.slice(0, 5),
                    Asr: time.timings.Asr.slice(0, 5),
                    Sunset: time.timings.Maghrib.slice(0, 5),
                    Isha: time.timings.Isha.slice(0, 5)
                })
                setBtnError(null);
            } catch (error) {
                toast.error("تحقق من اتصال الانترنت", {
                    position: toast.POSITION.TOP_RIGHT
                });
                console.log(error);
            }
            setLoadingScreen(false)
        }

        function onSuccess(PositionCallback) {
            const { latitude, longitude } = PositionCallback.coords
            localStorage.setItem("latitude", latitude)
            localStorage.setItem("longitude", longitude)
            getPlayer(latitude, longitude)
        }

        async function onErrors(PositionErrorCallback) {
            toast.warn("فشل تحديد الموقع", {
                position: toast.POSITION.TOP_RIGHT
            });
            if (PositionErrorCallback.code === 1) {
                try {
                    const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt')
                    const data = await response.json();
                    let timings = data.data.timings;
                    setTimings({
                        Fajr: timings.Fajr,
                        Dhuhr: timings.Dhuhr,
                        Asr: timings.Asr,
                        Sunset: timings.Maghrib,
                        Isha: timings.Isha, 
                    })
                } catch (error) {
                    toast.error("تحقق من اتصال الانترنت", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    console.log(error);
                }
                setBtnError(
                    <>
                        <div className="line text-gray-300 mt-20 container m-auto">
                            <p className="p-5 border-2 border-solid border-amber-300 text-amber-400">
                                <span className="text-xl">
                                    تنبيه هام
                                </span>
                                <br />
                                تم ضبط توقت الصلاه بتوقيت مصر القاهره بسبب عدم القدره علي تحديت الموقع الزمني
                                <br />
                                اسمح للمتصفح بتحديد الموقع لعرض مواقيت الصلاه بدقه
                                <br />
                                او قم بتشغيل GPS
                                <br />
                                وقم بالضغط علي الزر بالاسفل للتحديث
                            </p>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <button
                                onClick={() => setRefreshGps(!refreshGps)}
                                className="text-lime-600 border-2 text-xl border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-3 text-center inline-flex items-center">
                                تحديث
                            </button>
                        </div>
                    </>
                )
                setLoadingScreen(false)
            }
        };

        if (localStorage.getItem("latitude") !== null && localStorage.getItem("longitude") !== null) {
            function getPlayerLocalStorage() {
                const latitude = localStorage.getItem("latitude")
                const longitude = localStorage.getItem("longitude")
                getPlayer(latitude, longitude)
            }
            getPlayerLocalStorage()
        } else {
            (navigator.geolocation) ? navigator.geolocation.getCurrentPosition(onSuccess, onErrors) : console.log("Not Found Location");
        }

    }, [refreshGps]);

    return (
        <>
            <ToastContainer />
            <section className="pt-15 pb-10 relative">
                <Image width={100} height={100} src="/img.png" className="absolute w-32 top-16 left-0 -z-40" alt="img" />
                <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    أوقات الصلاة
                </h2>
                {(loadingScreen || (timings.Fajr === "00:00" && timings.Asr === "00:00" && timings.Isha === "00:00")) ? (
                    <Loader />
                ) : (
                    <>
                        <div className="container m-auto grid lg:grid-cols-5 md:grid-cols-3 gap-10 justify-center">
                            <div className="p-5 w-28 h-28 m-auto transition-colors bg-white dark:bg-black rounded-full border-lime-600 border-4 border-solid text-center flex flex-col justify-center">
                                <span className="block"> الفجر </span>
                                <span className="block"> {moment(timings.Fajr, ["HH:mm"]).format("hh:mm A")} </span>
                            </div>
                            <div className="p-5 w-28 h-28 m-auto transition-colors bg-white dark:bg-black rounded-full border-lime-600 border-4 border-solid text-center flex flex-col justify-center">
                                <span className="block"> الظهر </span>
                                <span className="block"> {moment(timings.Dhuhr, ["HH:mm"]).format("hh:mm A")} </span>
                            </div>
                            <div className="p-5 w-28 h-28 m-auto transition-colors bg-white dark:bg-black rounded-full border-lime-600 border-4 border-solid text-center flex flex-col justify-center">
                                <span className="block"> العصر </span>
                                <span className="block"> {moment(timings.Asr, ["HH:mm"]).format("hh:mm A")} </span>
                            </div>
                            <div className="p-5 w-28 h-28 m-auto transition-colors bg-white dark:bg-black rounded-full border-lime-600 border-4 border-solid text-center flex flex-col justify-center">
                                <span className="block"> المغرب </span>
                                <span className="block"> {moment(timings.Sunset, ["HH:mm"]).format("hh:mm A")} </span>
                            </div>
                            <div className="p-5 w-28 h-28 m-auto transition-colors bg-white dark:bg-black rounded-full border-lime-600 border-4 border-solid text-center flex flex-col justify-center">
                                <span className="block"> العشاء </span>
                                <span className="block"> {moment(timings.Isha, ["HH:mm"]).format("hh:mm A")} </span>
                            </div>
                        </div>

                        {btnError}

                        <h2 className="mt-20 mb-10 w-fit m-auto text-xl">متبقي حتى صلاة {prayersArray[nextPrayerIndex].displayName}</h2>

                        <div className="container gap-5 flex justify-center max-sm:flex-col m-auto px-3">
                            <div className="max-sm:m-auto px-6 py-6 mb-3 w-32 font-quran border-4 border-solid border-lime-600 text-center">
                                <h3 className="text-4xl pb-5 border-b mb-5 border-lime-600">{remainingTime.h}</h3>
                                <p className="text-xl">ساعه</p>
                            </div>

                            <div className="max-sm:m-auto px-6 py-6 mb-3 w-32 font-quran border-4 border-solid border-lime-600 text-center">
                                <h3 className="text-4xl pb-5 border-b mb-5 border-lime-600">{remainingTime.m}</h3>
                                <p className="text-xl">دقيقه</p>
                            </div>

                            <div className="max-sm:m-auto px-6 py-6 mb-3 w-32 font-quran border-4 border-solid border-lime-600 text-center">
                                <h3 className="text-4xl pb-5 border-b mb-5 border-lime-600">{remainingTime.s}</h3>
                                <p className="text-xl">ثانيه</p>
                            </div>
                        </div>

                    </>
                )}
            </section>
        </>
    );
}
