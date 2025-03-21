import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";

import Landing from "@/components/Layout/Landing";
import Link from "next/link";

export const metadata = {
    title: "موقع موعظه | الفتاوي ",
};

export default async function page({ params }) {
    let fatwa = [];
    let links = [];

    try {
        const response = await fetch(`https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/fatwa/ar/ar/${params.id}/25/json`);
        const data = await response.json();
        fatwa = data.data;
        links = data.links;
    } catch (errors) {
        console.log(errors);
    }


    return (
        <>
            <Landing title="قسم الفتاوي" text="يحتوي هذا القسم علي اكثر من 520 فتوه من ائمه وعلماء" />
            <section className="py-10 container px-3 m-auto">
                <div className="gap-2 flex flex-col md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {fatwa.map((item, key) => (
                        <div key={key}
                            className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#191919] dark:border-stone-700">
                            <div>
                                <a href={item.attachments.url}><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5></a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{item.description}</p>
                            </div>
                            <div>
                                <span>المفتي</span> : {item.prepared_by[0].title}
                                {item.attachments.map((item2, key2) => (
                                    <>
                                        <span key={key2}>
                                            <a
                                                href={item2.url}
                                                download
                                                className="flex justify-between mt-2 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-600 to-lime-500 rounded-lg  hover:scale-105 active:scale-90 transition-all">
                                                <span>تحميل الفتوه بصيغه {item2.extension_type}</span>
                                                <FontAwesomeIcon icon={faDownload} />
                                            </a>
                                        </span>
                                    </>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-5 flex justify-between items-center">
                    {links.prev === "" ? (<span></span>) : (
                        <Link
                            href={`/fatwa/${Number(params.id) - 1}`}
                            className="flex transition-colors flex-row justify-between py-3 px-5 border-2 border-solid bg-gray-100 dark:bg-[#323232] dark:border-stone-700 rounded-lg items-center dark:hover:border-lime-600 dark:hover:bg-lime-600 hover:bg-lime-600 hover:border-lime-600 hover:text-white">
                            <FontAwesomeIcon className="ml-2" icon={faAngleDoubleRight} />
                            السابق
                        </Link>
                    )}
                    <span> {links.current_page} / {links.pages_number} </span>
                    {links.next === "" ? (<span></span>) : (
                        <Link
                            href={`/fatwa/${Number(params.id) + 1}`}
                            className="flex transition-colors flex-row justify-between py-3 px-5 border-2 border-solid bg-gray-100 dark:bg-[#323232] dark:border-stone-700 rounded-lg items-center dark:hover:border-lime-600 dark:hover:bg-lime-600 hover:bg-lime-600 hover:border-lime-600 hover:text-white">
                            التالي
                            <FontAwesomeIcon className="mr-2" icon={faAngleDoubleLeft} />
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
}
