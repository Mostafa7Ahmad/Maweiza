export default function Landing(props) {
    return (
        <>
            <section className="bg-[url('./images/16446.png')] bg-center bg-cover w-full h-screen flex items-center justify-center p-10">
                <div className="z-1 relative text-center mb-36">
                    <h3 className="text-3xl mb-4">{props.title}</h3>
                    <p className="text-xl">
                        {props.text}
                    </p>
                </div>
            </section>
        </>
    );
}