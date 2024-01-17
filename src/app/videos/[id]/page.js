import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";

import Landing from "@/components/Landing";
import Link from "next/link";

export const metadata = {
    title: "موقع موعظه | المحاضرات الفديو ",
};

export default async function ({ params }) {
    let videos = [];
    let links = [];

    try {
        const response = await fetch(
            `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/videos/ar/ar/${params.id}/25/json`
        );
        const data = await response.json();
        videos = data.data;
        links = data.links;
    } catch (errors) {
        console.log(errors);
    }
    const showData = videos.map((item, key) => (
        <div
            key={key}
            className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#191919] dark:border-stone-700"
        >
            <div>
                <a href={item.attachments.url}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    {item.description}
                </p>
            </div>
            <div>
                {item.prepared_by.length > 0 ? (
                    <p>
                        <span>المحاضر</span> : {item.prepared_by[0].title}
                    </p>
                ) : (
                    ""
                )}
                {item.attachments.length > 0 ? (
                    <span>
                        <Link
                            href={`/videos/${params.id}/${item.id}`}
                            download
                            className="flex justify-between mt-2 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800"
                        >
                            <span> فتح الحزمة</span>
                            <FontAwesomeIcon icon={faRecordVinyl} />
                        </Link>
                    </span>
                ) : (
                    ""
                )}
            </div>
        </div>
    ));

    return (
        <>
            <Landing title="قسم المحاضرات فديو" text="" />
            <section className="py-10 container px-3 m-auto">
                <div className="mt-10 gap-5 flex flex-col md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
                <div className="mt-5 flex justify-between items-center">
                    {links.prev === "" ? (
                        <span></span>
                    ) : (
                        <Link
                            href={`/videos/${Number(params.id) - 1}`}
                            className="flex transition-colors flex-row justify-between py-3 px-5 border-2 border-solid bg-gray-100 dark:bg-[#323232] dark:border-stone-700 rounded-lg items-center dark:hover:border-lime-600 dark:hover:bg-lime-600 hover:bg-lime-600 hover:border-lime-600 hover:text-white"
                        >
                            <FontAwesomeIcon
                                className="ml-2"
                                icon={faAngleDoubleRight}
                            />
                            السابق
                        </Link>
                    )}
                    <span>
                        {" "}
                        {links.current_page} / {links.pages_number}{" "}
                    </span>
                    {links.next === "" ? (
                        <span></span>
                    ) : (
                        <Link
                            href={`/videos/${Number(params.id) + 1}`}
                            className="flex transition-colors flex-row justify-between py-3 px-5 border-2 border-solid bg-gray-100 dark:bg-[#323232] dark:border-stone-700 rounded-lg items-center dark:hover:border-lime-600 dark:hover:bg-lime-600 hover:bg-lime-600 hover:border-lime-600 hover:text-white"
                        >
                            التالي
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faAngleDoubleLeft}
                            />
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
}
