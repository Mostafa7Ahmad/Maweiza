import Image from "next/image";

import Landing from "@/components/Layout/Landing";
import Reciters from "@/components/Qaran/Reciters";

export default async function _() {
    return (
        <>
            <Landing title="قسم حفظ القران الكريم" />
            <section className="py-10 relative">
                <h2 className="text-2xl mb-10 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    اختر القارئ
                </h2>
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <Reciters type={"memorizing"} />
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
