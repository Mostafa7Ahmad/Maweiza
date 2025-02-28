

import Landing from "@/components/layout/Landing";
import Articles from "@/components/articles/Articles";

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
