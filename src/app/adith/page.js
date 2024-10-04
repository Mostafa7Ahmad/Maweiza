import Image from "next/image";

import Landing from "@/components/Assets/Landing";
import Adiths from "@/components/Adith/Adiths";

export const metadata = {
    title: "موقع موعظه | قسم الاحاديث",
    description:
        "يحتوي هذا القسم علي اكتر من 3500 من الأحاديث النبوية مع عرض جميع معلومات الحديث",
};

export default async function _() {
    return (
        <>
            <Landing
                title="قسم الحديث"
                text="يحتوي هذا القسم علي اكتر من 3500 من الأحاديث النبوية مع عرض جميع معلومات الحديث"
            />
            <section className="pb-5 relative px-4">
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <Adiths />
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
