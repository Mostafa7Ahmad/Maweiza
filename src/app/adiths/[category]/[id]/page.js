import CategoriesAdith from "@/components/Adith/Adith";
import Landing from "@/components/Layout/Landing";

export default async function _({ params }) {
    const id = params.id;

    return (
        <>
            <Landing title="عرض الحديث" />
            <CategoriesAdith id={id} />
        </>
    );
}
