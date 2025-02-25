export default function Landing(props) {
    return (
        <>
            <section className="bg-bottom bg-cover w-full mt-20 flex items-center justify-center pt-20">
                <div className="z-1 relative text-center container">
                    <div className="hero-content max-md:border max-md:border-gray-200 rounded-lg max-md:bg-white max-md:dark:bg-[#191919] max-md:dark:border max-md:dark:border-stone-700 p-5 max-md:mx-5">
                        <h3 className="text-3xl mb-3">{props.title}</h3>
                        <p className="text-ml m-auto px-5">{props.text}</p>
                    </div>
                </div>
            </section>
        </>
    );
}