function Aya(props) {
    return (
        <>
            <span className="leading-[65px] cursor-pointer">
                <span className={"font-quran text-xl md:text-2xl" + ((props.aya.numberInSurah === props.ayah) ? " text-lime-600" : " text-black dark:text-white")} >
                    {props.aya.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "")}
                </span>
                <span className="font-quran text-lime-600 text-xl md:text-2xl">
                    <span className="mr-2 font-quran"> ﴿ </span>
                    <span className="text-black dark:text-white">{props.aya.numberInSurah}</span>
                    <span className="ml-2 font-quran"> ﴾ </span>
                </span>
            </span>
        </>
    );
}

export default Aya;