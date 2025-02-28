import CategoryAdith from "@/components/adith/CategoryAdith";
import Landing from "@/components/layout/Landing";

export default async function _({ params }) {
    const category = params.category;
    console.log(category)

    return (
        <>
            <Landing title="قسم الحديث" text="" />
            <CategoryAdith category={category} />
        </>
    );
}
