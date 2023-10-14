import Link from "next/link";

import Landing from "@/components/Landing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple, faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: 'موقع موعظه | قسم القران الكريم',
    description: 'يحتوي هذا القسم علي جميع سور القران الكريم مع وضعين' ,
}

export default async function () {
    return (
        <>
            <Landing title="قسم القران الكريم" text="" />
            <section className="pt-20 pb-20 relative">
                <div className="container gap-5 flex flex-col m-auto px-3 md:grid md:gap-10 md:grid-cols-1 lg:grid-cols-2">
                    <Link href={`/qaran/listen`} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
                        <div className="flex flex-row gap-5 text-xl items-center">
                            <p className="bg-lime-600 flex w-10 h-10 items-center justify-center rotate-45">
                                <span className="-rotate-45 text-white">
                                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                                </span>
                            </p>
                            <p className="text-center">
                                وضع الاستماع
                            </p>
                        </div>
                    </Link>
                    <Link href={`/qaran/memorizing`} className="flex bg-white dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
                        <div className="flex flex-row gap-5 text-xl items-center">
                            <p className="bg-lime-600 flex w-10 h-10 items-center justify-center rotate-45">
                                <span className="-rotate-45 text-white">
                                    <FontAwesomeIcon icon={faMicrophoneLines} />
                                </span>
                            </p>
                            <p className="text-center">
                                وضع الحفظ
                            </p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}