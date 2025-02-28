import CategoriesAdith from "@/components/adith/Adith";
import Landing from "@/components/layout/Landing";

export default async function _({ params }) {
    const id = params.id;

    return (
        <>
            <Landing title="عرض الحديث" />
            <CategoriesAdith id={id} />
        </>
    );
}
