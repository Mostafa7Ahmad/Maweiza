import { Suspense } from "react";
import Tasbih from "@/components/tasbih/Tasbih";
import Azekar from "@/components/azekar/Azekar";

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
