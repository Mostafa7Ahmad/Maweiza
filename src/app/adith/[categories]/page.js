import Link from "next/link";

import Landing from "@/components/Assets/Landing";

export default async function ({ params }) {
    let AdithApi = [];
    const categories = params.categories;

    try {
        const response = await fetch(
            `https://hadeethenc.com/api/v1/hadeeths/list/?language=ar&category_id=${categories}&per_page=1000`
        );
        const responseJson = await response.json();
        AdithApi = responseJson.data;
    } catch (error) {
        console.log(error);
    }

    const showData = AdithApi.map((item, index) => (
        <Link
            href={`/adith/${categories}/${item.id}`}
            key={index}
            className="flex transition-all flex-row justify-between p-5 border-2 border-solid bg-white dark:border-gray-500 dark:bg-[#191919] rounded-sm items-center dark:hover:border-lime-600 dark:hover:bg-gradient-to-r dark:hover:from-green-600 dark:hover:to-lime-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-lime-500 hover:border-none active:scale-90 hover:text-white"
        >
            {item.title}
        </Link>
    ));

    return (
        <>
            <Landing title="قسم الحديث" text="" />
            <section className="py-5 relative px-4">
                <div className="container m-auto flex flex-col gap-2">
                    {showData}
                </div>
            </section>
        </>
    );
}
