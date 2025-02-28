import Image from "next/image";

import Landing from "@/components/Layout/Landing";
import Azekar from "@/components/Azekar/Azekars";
import { Suspense } from "react";
import Loader from "@/components/Layout/Loader";

export const metadata = {
    title: "موقع موعظه | قسم الاذكار والادعيه",
    description: "يحتوي هذا القسم علي الكثير من الاذكار والادعيه المختلفه",
};

export default function _() {
    return (
        <>
            <Landing
                title="قسم الاذكار والادعية"
                text="يحتوي هذا القسم علي أكثر من 140 من الأذكار والأدعية المتنوعة"
            />
            <section className="pb-10 relative">
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <Suspense fallback={<Loader />}>
                    <Azekar />
                </Suspense>
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute bottom-10 right-0 rotate-180 -z-40"
                    alt="img"
                />
            </section>
        </>
    );
}
