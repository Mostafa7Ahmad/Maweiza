import { Suspense } from "react";
import Salah from "@/components/Salah";
import EventsTimer from "@/components/EventsTimer";

export default function () {
    return (
        <>
            <Suspense>
                <Salah />
            </Suspense>
            <EventsTimer />
        </>
    );
}
