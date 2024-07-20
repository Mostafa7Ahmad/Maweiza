"use client";

import { useEffect, useState } from 'react';
import moment from 'moment-hijri';
import Landing from './Landing';

const currentHijriYear = moment().iYear();
const nextHijriYear = currentHijriYear + 1;

const islamicEvents = [
  { name: 'رأس السنة الهجرية', hijriDate: `${nextHijriYear}-01-01` },
  { name: 'المولد النبوي', hijriDate: `${currentHijriYear}-03-12` },
  { name: 'الإسراء والمعراج', hijriDate: `${currentHijriYear}-07-27` },
  { name: 'النصف من شعبان', hijriDate: `${currentHijriYear}-08-15` },
  { name: 'أول رمضان', hijriDate: `${currentHijriYear}-09-01` },
  { name: 'عيد الفطر', hijriDate: `${currentHijriYear}-10-01` },
  { name: 'وقفة عرفة', hijriDate: `${currentHijriYear}-12-09` },
  { name: 'عيد الأضحى', hijriDate: `${currentHijriYear}-12-10` },
  { name: 'عاشوراء', hijriDate: `${nextHijriYear}-01-10` },
];

export default function EventsTimer() {
  const [eventsTimeLeft, setEventsTimeLeft] = useState([]);

  console.log()

  useEffect(() => {
    const calculateTimeLeft = (eventDate) => {
      const now = new Date();
      const timeDifference = eventDate - now;

      if (timeDifference <= 0) {
        return 'قد حان!';
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
          seconds: seconds,
          minutes: minutes,
          hours: hours,
          days: days,
        };
      }
    };

    const updateTimers = () => {
      const updatedEventsTimeLeft = islamicEvents.map(event => {
        const eventDate = moment(event.hijriDate, 'iYYYY-iMM-iDD').toDate();
        return {
          name: event.name,
          timeLeft: calculateTimeLeft(eventDate),
        };
      });

      setEventsTimeLeft(updatedEventsTimeLeft);
    };

    const timerInterval = setInterval(updateTimers, 1000);

    updateTimers(); // Call it once to initialize

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <Landing title=" المناسبات الإسلامية القادمة " text="يحتفل بعيد الفطر والاضحي فقط والاحتفال بغير ذالك بدعة تم ذكر المناسبات للمعرفه لا للاحتفال" />
      <div className="container pb-5 pt-5 px-5 m-auto md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 justify-center items-center ">
        {eventsTimeLeft.map((event, index) => (
          <div key={index} className="relative px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600 flex flex-col justify-between items-center" >

            <h3 className="block text-ml mb-7 text-lime-600"> المتبقي علي {event.name}</h3>
            <div className="w-full gap-3 rounded-xl mb-1 flex justify-between items-center">
              <div className="text-center w-full">
                الثواني
              </div>
              <div className="text-center w-full">
                الدقائق
              </div>
              <div className="text-center w-full">
                الساعات
              </div>
              <div className="text-center w-full">
                الايام
              </div>
            </div>

            <div className="w-full gap-3 text-xl rounded-xl flex justify-between items-center">
              <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">
                {event.timeLeft.seconds}
              </div>
              <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">
                {event.timeLeft.minutes}
              </div>
              <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">
                {event.timeLeft.hours}
              </div>
              <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">
                {event.timeLeft.days}
              </div>
            </div>

          </div>
        ))}
      </div>
      {/* <div className="container pb-5 pt-2 px-5 m-auto">
        <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
          <span className="text-lime-600">ملاحظة :</span>
          <span className="">
            
          </span>
        </div>
      </div> */}
    </>
  );
};
