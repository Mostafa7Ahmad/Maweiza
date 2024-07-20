import { Suspense } from "react";
import Tasbih from "@/components/Tasbih";
import Azekar from "@/components/Azekar";

export default function () {
    return (
        <>
            <Suspense>
                <Tasbih />
                <Azekar />
            </Suspense>
        </>
    );
}
