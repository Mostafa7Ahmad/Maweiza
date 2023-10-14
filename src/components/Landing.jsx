export default function Landing(props) {
    return (
        <>
            <section className="bg-[url('../images/16446.png')] bg-bottom bg-cover w-full h-screen translate-y-[-130px] flex items-center justify-center p-10">
                <div className="z-1 relative text-center mb-32">
                    <h3 className="text-3xl mb-5">{props.title}</h3>
                    <p className="text-xl">
                        {props.text}
                    </p>
                </div>
            </section>
        </>
    );
}