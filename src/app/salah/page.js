import { Suspense } from "react";
import Salah from "@/components/Salah";
import Landing from "@/components/Landing";

export default function () {
    return (
        <>
            <Landing title="اوقات الصلاة" />
            <Suspense>
                <Salah />
            </Suspense>
        </>
    );
}
