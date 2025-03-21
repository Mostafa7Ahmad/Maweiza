import Link from "next/link";

import Landing from "@/components/Layout/Landing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMicrophoneLines, } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const metadata = {
    title: "موقع موعظه | قسم القران الكريم",
    description: "يحتوي هذا القسم علي جميع سور القران الكريم مع وضعين",
};

export default async function qaran() {
    return (
        <>
            <Landing title="قسم القران الكريم" text="اذا كنت تريد الاستماع الي تلاوه القران الكريم اختر وضع الاستماع لانه يحتوي علي عدد كبير من الشيوخ اما اذا كنت تريد الحفظ فختر وضع الحفظ لكي تتمكن من تحديد الايه التي تريد حفظها مع امكانيه التكرار وغيرها" />
            <section className="py-10 relative">
                <div className="container gap-5 flex flex-col m-auto px-3 md:grid md:gap-10 md:grid-cols-1 lg:grid-cols-2">
                    <div className="shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-lg bg-white dark:bg-[#191919] dark:border dark:border-stone-700">
                        <div className="m-5 overflow-hidden rounded-md relative h-96 before:absolute before:z-10 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-lime-600">
                            <Image fill src="/qaran/listen.jpeg" className="object-cover" alt="listen qaran" />
                        </div>
                        <Link
                            className="flex justify-center rounded-md m-5 p-3 items-center text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-95 active:scale-90 transition-all"
                            href={`/qaran/listen`}>
                            <p className="text-center">وضع الاستماع</p>
                            <FontAwesomeIcon className="mx-3" icon={faHeadphonesSimple} />
                        </Link>
                    </div>
                    <div className="shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-lg bg-white dark:bg-[#191919] dark:border dark:border-stone-700">
                        <div className="m-5 overflow-hidden rounded-md relative h-96 before:absolute before:z-10 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-lime-600">
                            <Image fill src="/qaran/memorizing.jpeg" className="object-cover" alt="memorizing qaran" />
                        </div>
                        <Link
                            className="flex justify-center rounded-md m-5 p-3 items-center text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-95 active:scale-90 transition-all"
                            href={`/qaran/memorizing`}>
                            <p className="text-center">وضع الحفظ</p>
                            <FontAwesomeIcon className="mx-3" icon={faMicrophoneLines} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
