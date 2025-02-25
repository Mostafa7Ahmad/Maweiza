import ramadanMode from "@/helpers/ramadanMode";

export default function Page() {
    const ramadan = ramadanMode();
    return (
        ramadan &&
        <>
            list-ramadan
        </>
    );
}