import Landing from "@/components/Assets/Landing";

import azekar from "@/json/azekar";

export default async function ({ params }) {
    const id = params.id;

    let dataAzekar = azekar[id - 1];
    let dataAzekarArray = azekar[id - 1].array;

    const showData = dataAzekarArray.map((azekar, index) => (
        <div
            key={index}
            className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600"
        >
            {azekar.text}
        </div>
    ));

    return (
        <>
            <Landing title={dataAzekar.category} text="" />
            <section className="py-5 relative px-4">
                <div className="container m-auto">{showData}</div>
            </section>
        </>
    );
}
