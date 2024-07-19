"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import moment from "moment";
import "moment/dist/locale/ar-dz";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "@/components/Loader";
import Landing from "./Landing";

moment.locale("ar");

export default function Salah() {
    const [timings, setTimings] = useState({
        Fajr: "00:00",
        Dhuhr: "00:00",
        Asr: "00:00",
        Sunset: "00:00",
        Isha: "00:00",
    });

    const prayersArray = [
        { key: "Fajr", displayName: "الفجر" },
        { key: "Dhuhr", displayName: "الظهر" },
        { key: "Asr", displayName: "العصر" },
        { key: "Sunset", displayName: "المغرب" },
        { key: "Isha", displayName: "العشاء" },
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
        if (
            momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
        ) {
            prayerIndex = 1;
        } else if (
            momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
        ) {
            prayerIndex = 2;
        } else if (
            momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
        ) {
            prayerIndex = 3;
        } else if (
            momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
        ) {
            prayerIndex = 4;
        }
        setNextPrayerIndex(prayerIndex);
        const nextPrayerTime = timings[prayersArray[prayerIndex].key]; // prayersArray[prayerIndex].key
        let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);
        if (prayerIndex === 0) {
            remainingTime =
                moment("23:59:59", "hh:mm:ss").diff(momentNow) +
                moment(nextPrayerTime, "hh:mm").diff(
                    moment("00:00:00", "hh:mm:ss")
                );
        }
        const durationRemainingTime = moment.duration(remainingTime);
        setRemainingTime({
            h: durationRemainingTime.hours().toString().padStart(2, "0"),
            m: durationRemainingTime.minutes().toString().padStart(2, "0"),
            s: durationRemainingTime.seconds().toString().padStart(2, "0"),
        });
    };

    useEffect(() => {
        let interval = setInterval(() => {
            setupCountdownTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [timings]);

    useEffect(() => {
        setLoadingScreen(true);
        let date = new Date();
        async function getPlayer(latitude, longitude) {
            try {
                const response = await fetch(
                    `https://api.aladhan.com/v1/calendar/${date.getFullYear()}?latitude=${latitude}&longitude=${longitude}`
                );
                const pray = await response.json();
                let time = pray.data[date.getMonth() + 1][date.getDate() - 1];
                setTimings({
                    Fajr: time.timings.Fajr.slice(0, 5),
                    Dhuhr: time.timings.Dhuhr.slice(0, 5),
                    Asr: time.timings.Asr.slice(0, 5),
                    Sunset: time.timings.Maghrib.slice(0, 5),
                    Isha: time.timings.Isha.slice(0, 5),
                });
                setBtnError(null);
            } catch (error) {
                toast.error("تحقق من اتصال الانترنت", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                console.log(error);
            }
            setLoadingScreen(false);
        }

        function onSuccess(PositionCallback) {
            const { latitude, longitude } = PositionCallback.coords;
            localStorage.setItem("latitude", latitude);
            localStorage.setItem("longitude", longitude);
            getPlayer(latitude, longitude);
        }

        async function onErrors(PositionErrorCallback) {
            toast.warn("فشل تحديد الموقع", {
                position: toast.POSITION.TOP_RIGHT,
            });
            if (PositionErrorCallback.code === 1) {
                try {
                    const response = await fetch(
                        "https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt"
                    );
                    const data = await response.json();
                    let timings = data.data.timings;
                    setTimings({
                        Fajr: timings.Fajr,
                        Dhuhr: timings.Dhuhr,
                        Asr: timings.Asr,
                        Sunset: timings.Maghrib,
                        Isha: timings.Isha,
                    });
                } catch (error) {
                    toast.error("تحقق من اتصال الانترنت", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    console.log(error);
                }
                setBtnError(
                    <>
                        <div className="line text-gray-300 mt-20 container m-auto">
                            <p className="p-5 border-2 border-solid border-amber-300 text-amber-400">
                                <span className="text-xl">تنبيه هام</span>
                                <br />
                                تم ضبط توقت الصلاه بتوقيت مصر القاهره بسبب عدم
                                القدره علي تحديت الموقع الزمني
                                <br />
                                اسمح للمتصفح بتحديد الموقع لعرض مواقيت الصلاه
                                بدقه
                                <br />
                                او قم بتشغيل GPS
                                <br />
                                وقم بالضغط علي الزر بالاسفل للتحديث
                            </p>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <button
                                onClick={() => setRefreshGps(!refreshGps)}
                                className="text-lime-600 border-2 text-xl border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-3 text-center inline-flex items-center"
                            >
                                تحديث
                            </button>
                        </div>
                    </>
                );
                setLoadingScreen(false);
            }
        }

        if (
            localStorage.getItem("latitude") !== null &&
            localStorage.getItem("longitude") !== null
        ) {
            function getPlayerLocalStorage() {
                const latitude = localStorage.getItem("latitude");
                const longitude = localStorage.getItem("longitude");
                getPlayer(latitude, longitude);
            }
            getPlayerLocalStorage();
        } else {
            navigator.geolocation
                ? navigator.geolocation.getCurrentPosition(onSuccess, onErrors)
                : console.log("Not Found Location");
        }
    }, [refreshGps]);

    return (
        <>
            <Landing title="اوقات الصلاة" />
            <ToastContainer />
            <section className="pt-15 mt-10 salah pb-5 relative">
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />

                {loadingScreen ||
                    (timings.Fajr === "00:00" &&
                        timings.Asr === "00:00" &&
                        timings.Isha === "00:00") ? (
                    <Loader />
                ) : (
                    <>
                        <div className="container px-5 m-auto text-white md:grid lg:grid-cols-5 md:grid-cols-3 gap-5 justify-center items-center ">
                            <div className={"p-5 w-full fajr rounded-md mb-5 md:mb-0 bg-gradient-to-r from-green-600 to-lime-500 flex flex-col justify-center text-xl" + ((nextPrayerIndex === 0) ? " md:scale-110 sm:scale-105" : " text-gray-300 py-8")}>
                                <span className="block mb-1"> أذان الفجر </span>
                                <span className="block font-sans">
                                    {moment(timings.Fajr, ["HH:mm"]).format(
                                        "hh:mm A"
                                    )}
                                </span>
                                {((nextPrayerIndex === 0) ? <>
                                    <span span className="block mt-3 text-sm"> الصلاة التالية </span>
                                    <span className="block font-sans text-3xl">
                                        {remainingTime.h}:{remainingTime.m}:{remainingTime.s}
                                    </span>
                                </> : null)}
                            </div>
                            <div className={"p-5 w-full dhuhr rounded-md mb-5 md:mb-0 bg-gradient-to-r from-green-600 to-lime-500 flex flex-col justify-center text-xl" + ((nextPrayerIndex === 1) ? " md:scale-110 sm:scale-105" : " text-gray-300 py-8")}>
                                <span className="block mb-1">أذان الظهر </span>
                                <span className="block font-sans">
                                    {moment(timings.Dhuhr, ["HH:mm"]).format(
                                        "hh:mm A"
                                    )}
                                </span>
                                {((nextPrayerIndex === 1) ? <>
                                    <span span className="block mt-3 text-sm"> الصلاة التالية </span>
                                    <span className="block font-sans text-3xl">
                                        {remainingTime.h}:{remainingTime.m}:{remainingTime.s}
                                    </span>
                                </> : null)}
                            </div>
                            <div className={"p-5 w-full asr rounded-md mb-5 md:mb-0 bg-gradient-to-r from-green-600 to-lime-500 flex flex-col justify-center text-xl" + ((nextPrayerIndex === 3) ? " md:scale-110 sm:scale-105" : " text-gray-300 py-8")}>
                                <span className="block mb-1">أذان العصر </span>
                                <span className="block font-sans">
                                    {moment(timings.Asr, ["HH:mm"]).format(
                                        "hh:mm A"
                                    )}
                                </span>
                                {((nextPrayerIndex === 3) ? <>
                                    <span span className="block mt-3 text-sm"> الصلاة التالية </span>
                                    <span className="block font-sans text-3xl">
                                        {remainingTime.h}:{remainingTime.m}:{remainingTime.s}
                                    </span>
                                </> : null)}
                            </div>
                            <div className={"p-5 w-full maghrib rounded-md mb-5 md:mb-0 bg-gradient-to-r from-green-600 to-lime-500 flex flex-col justify-center text-xl" + ((nextPrayerIndex === 4) ? " md:scale-110 sm:scale-105" : " text-gray-300 py-8")}>
                                <span className="block mb-1">أذان المغرب </span>
                                <span className="block font-sans">
                                    {moment(timings.Sunset, ["HH:mm"]).format(
                                        "hh:mm A"
                                    )}
                                </span>
                                {((nextPrayerIndex === 4) ? <>
                                    <span span className="block mt-3 text-sm"> الصلاة التالية </span>
                                    <span className="block font-sans text-3xl">
                                        {remainingTime.h}:{remainingTime.m}:{remainingTime.s}
                                    </span>
                                </> : null)}
                            </div>
                            <div className={"p-5 w-full isha rounded-md mb-5 md:mb-0 bg-gradient-to-r from-green-600 to-lime-500 flex flex-col justify-center text-xl" + ((nextPrayerIndex === 5) ? " md:scale-110 sm:scale-105" : " text-gray-300 py-8")}>
                                <span className="block mb-1">أذان العشاء </span>
                                <span className="block font-sans">
                                    {moment(timings.Isha, ["HH:mm"]).format(
                                        "hh:mm A"
                                    )}
                                </span>
                                {((nextPrayerIndex === 5) ? <>
                                    <span span className="block mt-3 text-sm"> الصلاة التالية </span>
                                    <span className="block font-sans text-3xl">
                                        {remainingTime.h}:{remainingTime.m}:{remainingTime.s}
                                    </span>
                                </> : null)}
                            </div>
                        </div>

                        {btnError}

                        {/* <h2 className="mt-20 mb-10 w-fit m-auto text-xl">
                            متبقي حتى صلاة {prayersArray[nextPrayerIndex].displayName}
                        </h2>

                        <div className="container gap-5 flex justify-center text-white max-sm:flex-col m-auto px-3">
                            <div className="max-sm:m-auto rounded-md bg-gradient-to-r from-green-600 to-lime-500 px-6 py-6 mb-3 w-32 font-quran text-center">
                                <h3 className="text-5xl pb-5 border-b mb-5 border-white">
                                    {remainingTime.h}
                                </h3>
                                <p className="text-2xl">ساعه</p>
                            </div>

                            <div className="max-sm:m-auto rounded-md bg-gradient-to-r from-green-600 to-lime-500 px-6 py-6 mb-3 w-32 font-quran text-center">
                                <h3 className="text-5xl pb-5 border-b mb-5 border-white">
                                    {remainingTime.m}
                                </h3>
                                <p className="text-2xl">دقيقه</p>
                            </div>

                            <div className="max-sm:m-auto rounded-md bg-gradient-to-r from-green-600 to-lime-500 px-6 py-6 mb-3 w-32 font-quran text-center">
                                <h3 className="text-5xl pb-5 border-b mb-5 border-white">
                                    {remainingTime.s}
                                </h3>
                                <p className="text-2xl">ثانيه</p>
                            </div>
                        </div> */}
                    </>
                )}
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 bottom-0 rotate-180 right-0 -z-40"
                    alt="img"
                />
            </section>
        </>
    );
}
