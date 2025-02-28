

import Landing from "@/components/Layout/Landing";
import Articles from "@/components/Articles/Articles";

export const metadata = {
    title: "موقع موعظه | المقالات ",
    description: "يحتوي هذا القسم علي اكثر من 1690 مقاله اسلامية",
};

export default async function _({ params }) {
    return (
        <>
            <Landing title="قسم المقالات" text="يحتوي هذا القسم علي اكثر من 1690 مقاله اسلامية" />
            <Articles id={params.id} />
        </>
    );
}
