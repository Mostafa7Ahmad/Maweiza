import { Suspense } from "react";
import Salah from "@/components/salah/Salah";
import EventsTimer from "@/components/salah/EventsTimer";

export default function _() {
    return (
        <>
            <Suspense>
                <Salah />
            </Suspense>
            <EventsTimer />
        </>
    );
}
