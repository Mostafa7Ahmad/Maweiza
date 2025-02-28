import Landing from "@/components/layout/Landing";
import SearchHadith from "@/components/adith/SearchHadith";
import { optimizeString } from "@/helpers/optimizeString";

export default async function _({ params }) {
    const id = params.id;

    let hadiths = false;
    let showData = "";
    let length = 0;

    if (id != "-") {
        try {
            const res = await fetch(`https://dorar.net/dorar_api.json?skey=${id}`);
            const data = await res.json();
            hadiths = data.ahadith.result;
            length = data.ahadith.result.length;

            hadiths = hadiths.split("--------------");
            hadiths.pop()
            showData = hadiths.map((hadith, index) => (
                <div
                    key={index}
                    className="px-6 py-6 mb-3 font-quran shadow-[0_0_15px_rgb(0_0_0_/_5%)] border border-gray-200 rounded-md bg-white dark:bg-stone-900 dark:border dark:border-stone-600"
                >
                    <div dangerouslySetInnerHTML={{ __html: optimizeString(hadith) }} />
                </div>
            ));
        } catch (error) {
            console.log(error);
            showData = <p className="text-center">لا يوجد نتائج</p>;
        }
    }

    return (
        <>
            <Landing title="اداه الباحث في الحديث" text="يمكنك الموقع من البحث عن الأحاديث النبوية والتحقق من صحتها إنطلاقا من كلمة أو جملة من الحديث" />
            <section className="py-2">
                <SearchHadith id={id} />
                <div className="container px-5 m-auto">
                    <div className="mb-10">
                        {length != 153 ? showData : <p className="text-center">لا يوجد نتائج</p>}
                    </div>
                </div>
            </section>
        </>
    );
}
