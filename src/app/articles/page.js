import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Landing from "@/components/Landing";

export default async function Articles() {
    let articles = [];

    try {
        const response = await fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/articles/ar/ar/1/1000/json')
        const data = await response.json();
        articles = data.data;
    } catch (errors) {
        console.log(errors);
    }
    const showData = articles.map((item, key) =>
        <div key={key} className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#191919] dark:border-stone-700">
            <div>
                <a href={item.attachments.url}><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.title} </h5></a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{item.description}</p>
            </div>
            <div>
                {item.prepared_by.map((item2, key2) =>
                    <>
                        <p key={key2}> <span>الكاتب</span> : {item2.title}</p>
                    </>
                )}

                {item.attachments.map((item2, key2) =>
                    <>
                        <span key={key2}>
                            <a href={item2.url} download className="flex justify-between mt-2 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800">
                                <span>  تحميل المقال بصيغه {item2.extension_type}</span>
                                <FontAwesomeIcon icon={faDownload} />
                            </a>
                        </span>
                    </>
                )}
            </div>
        </div>
    )

    return (
        <>
            <Landing title="قسم المقالات" text="" />
            <section className="pt-20 pb-20">
                <div className="container mt-10 gap-5 flex flex-col m-auto px-3 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
            </section>
        </>
    );
}