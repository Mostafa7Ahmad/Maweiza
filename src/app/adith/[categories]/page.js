import Link from "next/link";

import Landing from "@/components/Landing";

export default async function ({ params }) {
    let AdithApi = [];
    const categories = params.categories;

    try {
        const response = await fetch(`https://hadeethenc.com/api/v1/hadeeths/list/?language=ar&category_id=${categories}&per_page=1000`)
        const responseJson = await response.json();
        AdithApi = responseJson.data;
    } catch (error) {
        console.log(error);
    }

    
    const showData = AdithApi.map((item, index) =>
        <Link href={`/adith/${categories}/${item.id}`} key={index} className="flex bg-white text-xl dark:bg-black dark:hover:bg-lime-600 items-center hover:bg-lime-600 hover:text-white transition-colors flex-row justify-between p-5 border-2 border-solid border-lime-600">
            {item.title}
        </Link>
    )

    return (
        <>
            <Landing title="قسم الحديث" text="" />
            <section className="pt-20 pb-20 relative px-4">
                <div className="container m-auto flex flex-col gap-5">
                    {showData}
                </div>
            </section>
        </>
    );
}