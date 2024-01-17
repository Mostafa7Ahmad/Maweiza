import Landing from "@/components/Landing";

export default async function ({ params }) {
    const id = params.id;

    let AdithApi = [];
    let hints = [];

    try {
        const responseFetch = await fetch(
            `https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${id}`
        );
        const response = await responseFetch.json();
        AdithApi = response;
        hints = response.hints.map((item, index) => (
            <li key={index}>{item}</li>
        ));
    } catch (error) {
        console.log(error);
    }

    return (
        <>
            <Landing title={AdithApi.title} text="" />
            <section className="py-5 relative px-4">
                <div className="container m-auto">
                    <div className="flex flex-wrap p-5 my-5 text-xl justify-between items-center">
                        <div>
                            <span className="text-lime-600 text-xl">الاسناد : </span> 
                            {AdithApi.attribution}
                        </div>
                        <div>
                            <span className="text-lime-600 text-xl">الدرجه : </span> 
                            {AdithApi.grade}
                        </div>
                    </div>
                    <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                        {AdithApi.hadeeth}
                    </div>

                    <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                        <span className="text-lime-600 text-xl block mb-2">توضيح :</span>
                        {AdithApi.explanation}
                    </div>

                    <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                        <span className="text-lime-600 text-xl block mb-2">
                            مايرشد اليه من الحديث :
                        </span>
                        <ol>{hints}</ol>
                    </div>

                    <div className="px-6 py-6 mb-3 shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600">
                        <span className="text-lime-600 text-xl block mb-2">مراجع :</span>
                        {AdithApi.reference}
                    </div>
                </div>
            </section>
        </>
    );
}
