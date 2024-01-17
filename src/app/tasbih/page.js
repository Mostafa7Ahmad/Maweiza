import { Suspense } from "react";
import Tasbih from "@/components/Tasbih";
import Landing from "@/components/Landing";

export default function () {
    return (
        <>
            <Landing title="تسبيح" />
            <Suspense>
                <Tasbih />
            </Suspense>
        </>
    );
}
