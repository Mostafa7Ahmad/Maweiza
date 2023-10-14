import Landing from "@/components/Landing";

export default async function ({ params }) {
    let audios = [];
    let links = [];

    try {
        const response = await fetch(`https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/audios/ar/ar/${params.id}/25/json`)
        const data = await response.json();

        audios = data.data.filter((audio) => (audio.id.toString() === params.audios.toString()))[0]

        links = data.links;
    } catch (errors) {
        console.log(errors);
    }

    const showData = audios.attachments.map((item, key) =>
        <div key={key} className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#191919] dark:border-stone-700">
            <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{item.description}</p>
            </div>
            <div>
                <p> <span>حجم المحاضره</span> : {item.size}</p>
                <a href={item.url} download className="flex justify-between mt-2 w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800">
                    <span>استماع للمحاضره</span>
                </a>
            </div>
        </div>
    )

    return (
        <>
            <Landing title="قسم محاضرات صوتيه" text="" />
            <section className="pt-20 pb-20 container px-3 m-auto">
                <div className="mt-10 gap-5 flex flex-col md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {showData}
                </div>
            </section>
        </>
    );
}