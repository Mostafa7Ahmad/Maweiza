import { Suspense } from "react";
import Salah from "@/components/web/Salah";
import EventsTimer from "@/components/web/EventsTimer";

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
