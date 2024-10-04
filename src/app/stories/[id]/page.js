import Landing from "@/components/Assets/Landing";

import stories from "@/json/stories.json";
import { Console } from "console";

export default function ({ params }) {
    const id = params.id;

    const filterData = stories.filter((item) => item.id === Number(id))[0];

    console.log(filterData);

    // const showData = "";

    // const author = stories.filter((item) => item.id === Number(id))[0].author;

    const showData = filterData.data.map((item, index) => (
        <div key={index} className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
            <span className="text-lime-600 text-xl block mb-2">
                {item.title} :
            </span>
            <p>{item.data}</p>
        </div>
    ));

    return (
        <>
            <Landing title={filterData.name} text="" />
            <section className="py-5 relative px-4">
                <div className="container m-auto">{showData}</div>
            </section>
        </>
    );
}
