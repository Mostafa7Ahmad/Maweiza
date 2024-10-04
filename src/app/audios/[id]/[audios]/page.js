import Landing from "@/components/Assets/Landing";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function ({ params }) {
    let audios = [];
    let links = [];

    try {
        const response = await fetch(
            `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/audios/ar/ar/${params.id}/25/json`
        );
        const data = await response.json();
        audios = data.data.filter(
            (audio) => audio.id.toString() === params.audios.toString()
        )[0];
        links = data.links;
    } catch (errors) {
        console.log(errors);
    }

    const showData = audios.attachments.map((item, key) => (
        <div
            key={key}
            className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#191919] dark:border-stone-700"
        >
            <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    {item.description}
                </p>
            </div>
            <div>
                <p>
                    <span>حجم المحاضره</span> : {item.size}
                </p>
                <Link
                    href={item.url}
                    download
                    className="flex justify-between mt-2 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-600 to-lime-500 rounded-lg  hover:scale-105 active:scale-90 transition-all"
                >
                    <span> استماع للمحاضره </span>
                    <FontAwesomeIcon icon={faHeadphones} />
                </Link>
            </div>
        </div>
    ));

    return (
        <>
            <Landing title="قسم محاضرات صوتيه" text="" />
            <section className="pb-10 container px-3 m-auto">
                <div className="mt-10 gap-5 flex flex-col md:grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
            </section>
        </>
    );
}
