import { Suspense } from "react";
import Salah from "@/components/Salah/Salah";
import EventsTimer from "@/components/Salah/EventsTimer";

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
