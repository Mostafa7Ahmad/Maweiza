
import Landing from "@/components/Landing";

export default async function Adith({ prams }) {
    const id = prams.id;
    const AdithApi = [];
    const hints = [];

    try {
        const response = await axios.get(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${id}`)
        AdithApi = response.data
        hints = response.data.hints.map((item, index) => <li key={index}>{item}</li>)
    } catch (error) {

        console.log(error);
    }

    return (
        <>
            <Landing title={AdithApi.title} text="" />
            <section className="pt-20 pb-20 relative px-4">
                <div className="container m-auto">

                    <div className="mb-3 text-xl p-5 border-y border-stone-700 border-solid">
                        {AdithApi.hadeeth}
                    </div>

                    <div className="flex p-5 my-5 text-xl justify-between items-center">
                        <div>
                            <span className="text-lime-600">الاسناد :</span>
                            {AdithApi.attribution}
                        </div>
                        <div>
                            <span className="text-lime-600">الدرجه :</span>
                            {AdithApi.grade}
                        </div>
                    </div>

                    <div className="mb-3 p-5 text-xl border-y border-stone-700 border-solid">
                        <span className="text-lime-600">توضيح :</span>
                        {AdithApi.explanation}
                    </div>

                    <div className="mb-3 p-5 text-xl">
                        <span className="text-lime-600">مايرشد اليه من الحديث :</span>
                        <ol>
                            {hints}
                        </ol>
                    </div>

                    <div className="mb-3 p-5 text-xl border-y border-stone-700 border-solid">
                        <span className="text-lime-600">مراجع :</span>
                        {AdithApi.reference}
                    </div>
                </div>
            </section>
        </>
    );
}