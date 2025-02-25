import Link from "next/link";

import Image from "next/image";

import { categoriesLinks } from "@/data/categoriesLinks";
import ramadanMode from "@/helpers/ramadanMode";

export default function Categories() {
    const ramadan = ramadanMode();

    const showData = categoriesLinks.map((item, key) => {
        return (
            item.ramadan ?
                ramadan &&
                <div key={key} className="relative overflow-hidden">
                    <div className="shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-lg bg-white dark:bg-[#191919] dark:border dark:border-stone-700 relative">
                        {(item.new) && <div className="label">قسم جديد</div>}
                        {(item.ramadan) && <span className="absolute top-5 right-5 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            الوضع الرمضاني
                        </span>}
                        <div className="animate-border-beam"></div>
                        <div className="m-5 overflow-hidden rounded-md">
                            <Image quality={40} src={item.img} className="object-contain m-auto" width={180} height={180} alt="" />
                        </div>
                        <Link
                            className="flex justify-center rounded-md m-5 p-3 text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-105 active:scale-90 transition-all"
                            href={`${item.path}`}>
                            {item.name}
                        </Link>
                    </div>
                </div>
                :
                <div key={key} className="relative overflow-hidden">
                    <div className="shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-lg bg-white dark:bg-[#191919] dark:border dark:border-stone-700 relative">
                        {(item.new) && <div className="label">قسم جديد</div>}
                        <div className="animate-border-beam"></div>
                        <div className="m-5 overflow-hidden rounded-md">
                            <Image quality={40} src={item.img} className="object-contain m-auto" width={180} height={180} alt="" />
                        </div>
                        <Link
                            className="flex justify-center rounded-md m-5 p-3 text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-105 active:scale-90 transition-all"
                            href={`${item.path}`}>
                            {item.name}
                        </Link>
                    </div>
                </div>
        )
    });

    return (
        <>
            <section className="py-10 relative" id="categories">
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 top-16 left-0 -z-40"
                    alt="img"
                />
                <h2 className="text-2xl mb-5 w-fit m-auto relative before:w-10 before:bg-lime-600 before:h-1 before:absolute before:top-1/2 before:right-full before:-translate-x-5 after:w-10 after:bg-lime-600 after:h-1 after:absolute after:top-1/2 after:left-full after:translate-x-5">
                    اقسام الموقع
                </h2>
                <div className="container mt-10 gap-3 flex flex-col m-auto px-3 sm:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
                <Image
                    width={100}
                    height={100}
                    src="/img.png"
                    className="absolute w-32 bottom-0 rotate-180 right-0 -z-40"
                    alt="img"
                />
            </section>
        </>
    );
}
