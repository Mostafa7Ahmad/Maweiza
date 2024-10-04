import { Suspense } from "react";
import Tasbih from "@/components/web/Tasbih";
import Azekar from "@/components/web/Azekar";

export default function _() {
    return (
        <>
            <Suspense>
                <Tasbih />
                <Azekar />
            </Suspense>
        </>
    );
}
