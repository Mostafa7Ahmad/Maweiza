import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight, faDownload } from "@fortawesome/free-solid-svg-icons";

import Landing from "@/components/Landing";
import Link from "next/link";

export default async function ({ params }) {
    let books = [];
    let links = [];

    try {
        const response = await fetch(`https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/books/ar/ar/${params.id}/25/json`)
        const data = await response.json();
        books = data.data;
        links = data.links;
    } catch (errors) {
        console.log(errors);
    }

    const showData = books.map((item, key) =>
        <div key={key} className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#191919] dark:border-stone-700">
            <div>
                <a href={item.attachments[0].url}><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.title} </h5></a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{item.description}</p>
            </div>
            <div>
                <p> <span>المؤلف</span> : {item.prepared_by[0].title}</p>
                <p> <span>حجم الكتاب</span> : {item.attachments[0].size}</p>
                <p> <span>صيغه الكتاب</span> : {item.attachments[0].extension_type}</p>
                <a href={item.attachments[0].url} download className="flex justify-between mt-2 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800">
                    <span> تحميل الكتاب</span>
                    <FontAwesomeIcon icon={faDownload} />
                </a>
            </div>
        </div>
    )

    return (
        <>
            <Landing title="قسم الكتب" text="" />
            <section className="pt-20 pb-20 container px-3 m-auto">
                <div className="mt-10 gap-5 flex flex-col md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
                <div className="mt-10 flex justify-between">
                    {
                        (links.prev === '') ? <span></span> : <Link
                            href={`/books/${Number(params.id) - 1}`}
                            className="text-lime-600 border-2 text-xl border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-3 text-center inline-flex items-center">
                            <FontAwesomeIcon className="ml-2" icon={faAngleDoubleRight} />
                            السابق
                        </Link>
                    }

                    {
                        (links.next === '') ? <span></span> : <Link
                            href={`/books/${Number(params.id) + 1}`}
                            className="text-lime-600 border-2 text-xl border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-3 text-center inline-flex items-center">
                            التالي
                            <FontAwesomeIcon className="mr-2" icon={faAngleDoubleLeft} />
                        </Link>
                    }
                </div>
            </section>
        </>
    );
}