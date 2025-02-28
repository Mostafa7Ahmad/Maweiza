"use client";

import { useEffect, useState } from 'react';
import moment from 'moment-hijri';
import Landing from '../Layout/Landing';

const islamicEvents = [
  { name: 'رأس السنة الهجرية', hijriMonth: 1, hijriDay: 1 },
  { name: 'المولد النبوي', hijriMonth: 3, hijriDay: 12 },
  { name: 'الإسراء والمعراج', hijriMonth: 7, hijriDay: 27 },
  { name: 'النصف من شعبان', hijriMonth: 8, hijriDay: 15 },
  { name: 'أول رمضان', hijriMonth: 9, hijriDay: 1 },
  { name: 'عيد الفطر', hijriMonth: 10, hijriDay: 1 },
  { name: 'وقفة عرفة', hijriMonth: 12, hijriDay: 9 },
  { name: 'عيد الأضحى', hijriMonth: 12, hijriDay: 10 },
  { name: 'عاشوراء', hijriMonth: 1, hijriDay: 10 },
];

export default function EventsTimer() {
  const [eventsTimeLeft, setEventsTimeLeft] = useState([]);

  useEffect(() => {
    const calculateTimeLeft = (eventDate) => {
      const now = new Date();
      const timeDifference = eventDate - Number(now);

      if (timeDifference <= 0) {
        return 'اليوم';
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
        const currentHijriYear = moment().iYear();
        const nextHijriYear = currentHijriYear + 1;

        let eventHijriDate = moment(`${currentHijriYear}-${event.hijriMonth}-${event.hijriDay}`, 'iYYYY-iM-iD');

        if (eventHijriDate.isBefore(moment(), 'day')) {
          eventHijriDate = moment(`${nextHijriYear}-${event.hijriMonth}-${event.hijriDay}`, 'iYYYY-iM-iD');
        }
        const eventDate = eventHijriDate.toDate();

        return {
          name: event.name,
          timeLeft: calculateTimeLeft(eventDate),
        };
      });

      setEventsTimeLeft(updatedEventsTimeLeft);
    };

    const timerInterval = setInterval(updateTimers, 1000);

    updateTimers();

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <Landing title=" المناسبات الإسلامية القادمة " text="يحتفل بعيد الفطر والاضحي فقط والاحتفال بغير ذالك بدعة تم ذكر المناسبات للمعرفة لا للاحتفال" />
      <div className="container pb-5 pt-5 px-5 m-auto md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 justify-center items-center">
        {eventsTimeLeft.map((event, index) => (
          <div key={index} className="relative px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600 flex flex-col justify-between items-center">
            <h3 className="block text-ml mb-7 text-lime-600">المتبقي على {event.name}</h3>
            <div className="w-full gap-3 rounded-xl mb-1 flex justify-between items-center">
              <div className="text-center w-full">الثواني</div>
              <div className="text-center w-full">الدقائق</div>
              <div className="text-center w-full">الساعات</div>
              <div className="text-center w-full">الأيام</div>
            </div>
            <div className="w-full gap-3 text-xl rounded-xl flex justify-between items-center">
              {typeof event.timeLeft === 'string' ? (
                <div className="text-center w-full">{event.timeLeft}</div>
              ) : (
                <>
                  <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">{event.timeLeft.seconds}</div>
                  <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">{event.timeLeft.minutes}</div>
                  <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">{event.timeLeft.hours}</div>
                  <div className="font-sans bg-zinc-500 text-white p-2 rounded-xl text-center w-full">{event.timeLeft.days}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
